"use client";

import React, { useEffect, useState } from "react";
import BookContent from "./BookContent";
import NavigationButtons from "./NavigationButtons";
import './style.css'
const Page = ({ params }) => {
  const { id } = params;
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://bookify-server-lilac.vercel.app/book/${id}`
        );
        const data = await response.json();

        if (response.ok) {
          const cleanedContent = data.content
            .replace(/\\n/g, " ")
            .replace(/\s{2,}/g, " ")
            .trim();
          const parsedContent =
            cleanedContent.startsWith("[") && cleanedContent.endsWith("]")
              ? JSON.parse(cleanedContent)
              : null;

          if (parsedContent) {
            setBook({ ...data, content: parsedContent });
          } else {
            console.error("Invalid JSON format in content:", cleanedContent);
          }
        } else {
          console.error("Failed to fetch book data.");
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 2, book.content.length - 2));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 2, 0));

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
      </div>
    );
  }

  if (!book) return <div>Book content not found or invalid</div>;

  return (
    <div className="md:mt-24 max-w-6xl mx-auto p-4">
      <BookContent book={book} currentPage={currentPage} />
      <NavigationButtons
        currentPage={currentPage}
        totalPages={book.content.length}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default Page;

[
  {
    page: 1,
    description:
      "<p> The novel begins with Scout Finch, the narrator, introducing herself and providing some background information. She mentions her full name, Jean Louise Finch, and explains how she got her nickname, Scout. <br /> She reflects on her childhood and describes the town of Maycomb, Alabama, where she grew up. Scout paints a picture of Maycomb as a small, sleepy town that is somewhat stuck in time, characterized by its old buildings and the slow pace of life. Scout introduces her family, particularly her father, Atticus Finch, a lawyer, and her brother, Jem Finch. She hints at events that would unfold in the future but emphasizes her childhood experiences, including her interactions with her neighbors and classmates. her story is just began to start. <br /> As the story progresses, the narrative delves into the Finch family dynamics, showcasing the strong moral compass of Atticus Finch. He is dedicated to teaching Scout and Jem the importance of empathy and understanding others. One pivotal lesson comes when Atticus tells Scout that you never really understand a person until </p>",
  },

  {
    page: 2,
    description:
      "<p>you consider things from his point of view. This lesson becomes central to the children's development and the unfolding events in Maycomb. The town of Maycomb is also shown to be steeped in racial prejudice, a major theme of the novel. This reality is brought to the forefront when Tom Robinson, a black man, is falsely accused of raping a white woman, Mayella Ewell. Atticus is appointed to defend Tom, and this decision brings a wave of hostility towards the Finch family. Scout and Jem face bullying and prejudice at school, which deeply impacts their childhood innocence.<br /> The trial of Tom Robinson serves as a critical turning point in the story, illustrating the deep-rooted racism in society. Atticus presents compelling evidence proving Tom's innocence, yet the jury's decision reflects the ingrained biases of the time. This moment is a harsh awakening for Scout and Jem, who grapple with the injustice and moral complexities of the adult world. Through the trial, the story explores themes of morality, justice, and the loss of innocence.<br/> In the end, Scout reflects on the lessons learned throughout her childhood. She realizes that people are often misunderstood. then, she become more concious about trusting people and she never do the same mistakes again and again.  </p>",
  },
  

  {
    page: 3,
    description:
      "<p> In the end, Scout reflects on the lessons learned throughout her childhood. She realizes that people are often misunderstood and that the capacity for goodness exists in everyone, even in those who seem different. The novel concludes with a powerful message about empathy and understanding, encouraging readers to look beyond appearances and embrace the complexities of human nature. <br/> As the story nears its conclusion, Scout and Jem confront the reality of their father's fight against prejudice and injustice. They learn that true courage is not the absence of fear, but the willingness to stand up for what is right, even when the odds are against you. The children's understanding of Boo Radley evolves as well, transforming from a source of childhood fear into a symbol of kindness and protection.<br /> In the end, Scout reflects on the lessons learned throughout her childhood. She realizes that people are often misunderstood, and that the capacity for goodness exists in everyone, even in those who seem different. The novel concludes with a powerful message about empathy and understanding, encouraging readers to look beyond appearances. </p>",
  },

  {
    page: 4,
    description:
      "<p> As Scout continued to grow, she realized how deeply rooted the issues of prejudice were in her small town of Maycomb. Each day, she would observe the subtle and not-so-subtle ways people treated one another, and it became clear to her that the world was far more complex than she had once imagined. <br /> Scout remembered how her father had often spoken of empathy and understanding, encouraging her to see the world through the eyes of others. But it wasn’t until she witnessed the town's reaction to the Tom Robinson case that she truly understood what her father meant. The trial had exposed the deep divisions within Maycomb, and while some had hoped for justice, others were content to cling to their old ways. <br /> Atticus had taught her to stand up for what was right, even when it was difficult, and now Scout found herself grappling with the idea that not everyone would make the same choice. In the aftermath of the trial, life in Maycomb seemed to return to normal, but for Scout, nothing would ever be the same again. The innocence of her childhood had been forever altered by the harsh realities of the adult world. </p>",
  },
  {
    page: 5,
    description:
      "<p> As the years went on, Scout’s reflections on the trial deepened. She remembered the way her father had stood alone in his fight for justice, facing the town’s prejudice head-on. Atticus had never wavered, even when it seemed that the odds were against him. Scout began to understand that true courage wasn’t about winning; it was about fighting for what was right, regardless of the outcome. <br /> She recalled the moments of clarity that had come to her during the trial—the realization that the world was not as simple as she had once believed. People weren’t always good or bad; often, they were a mix of both, shaped by their circumstances and choices. This newfound understanding changed the way Scout viewed the people around her. <br /> Maycomb, with its old buildings and slow pace, hadn’t changed much over the years. But Scout had. She now saw the town’s residents with new eyes, recognizing the quiet struggles they faced. While some were willing to change, others were too afraid to let go of the past. Yet, despite the town’s flaws, Scout still believed in the goodness of people, a lesson her father had instilled in her from a young age. </p>",
  },
  {
    page: 6,
    description:
      "<p> One of the most significant lessons Scout learned from her father was that understanding others required more than just sympathy; it required a willingness to listen and learn. Throughout her childhood, she had often found herself frustrated by the narrow-mindedness of the people in her town. Yet, as she grew older, she realized that change was possible, but only if people were willing to open their hearts and minds. <br /> Scout remembered how Atticus had told her that real change came slowly, often through small, seemingly insignificant actions. It wasn’t enough to simply hope for a better world; one had to actively work toward it. As Scout reflected on the events of her childhood, she realized that each of her father’s lessons had been preparing her for the difficult road ahead. <br /> The trial of Tom Robinson had been a turning point, not just for the Finch family, but for the entire town. Though the trial had ended, its impact would be felt for years to come. Scout knew that she would carry the lessons of her father’s courage and empathy with her wherever she went, always striving to make the world a better place. </p>",
  },
  {
    page: 7,
    description:
      "<p> The seasons continued to change in Maycomb, marking the passage of time. With each passing year, Scout grew more aware of the complexities of human nature. The people she had once viewed as simple and predictable were now far more complicated in her eyes. She realized that everyone had their own battles to fight, their own fears and insecurities to face. <br /> Scout often thought back to her childhood games with Jem and Dill, their carefree days spent imagining stories and adventures. But now, those memories seemed distant, overshadowed by the events that had shaped her understanding of the world. Despite the challenges she had faced, Scout remained hopeful. Her father’s unwavering belief in justice and equality had left a lasting impression on her. <br /> As she walked through the familiar streets of Maycomb, Scout reflected on the lessons she had learned. She knew that the fight for justice was far from over, but she also knew that she was better prepared to face it. Her childhood had been filled with lessons of empathy, courage, and the importance of standing up for what was right. And though the road ahead was uncertain, Scout was determined to carry those lessons with her for the rest of her life. </p>",
  },
];


