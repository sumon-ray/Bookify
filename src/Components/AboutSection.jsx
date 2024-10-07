import Image from 'next/image'
// import img1 from "../assets/images/About/about1.jpg"
import img1 from "../assets/images/About/about1.jpg"
import img2 from "../assets/images/About/about2.jpg"
import { Button } from 'flowbite-react';

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto pb-10 lg:pt-40  ">  
      <div className="flex flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
          <Image
            src={img2}
            alt="About Image 1"
            className="w-3/4 rounded-lg shadow-xl"
            width={400} 
            height={400}
            
          />
          <Image
            src={img1} 
            alt="About Image 2"
            className="w-1/2 absolute right-5 top-1/3 border-[#EFEEE9] border-8 rounded-xl"
            width={250}
            height={300}
          />
        </div>
        <div className='lg:w-1/2 space-y-3 p-4'>
          <h3 className='text-3xl text-black font-bold'>About Us</h3>
          <h1 className="text-3xl font-bold">
          We strive to foster a culture of sharing by promoting book exchanges and enhancing access to knowledge.
          </h1>
          <p className="pb-1">
          Bookify offer a simple yet impactful way to share knowledge and stories within a community. By swapping unused books, participants reduce waste and promote sustainability.
          </p>
          <Button className='bg-[#364957]'> Get More Info </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
