import Image from 'next/image'
// import img1 from "../assets/images/About/about1.jpg"
import img1 from "../assets/images/About/about1.jpg"
import img2 from "../assets/images/About/about2.jpg"
import { Button } from 'flowbite-react';

const AboutSection = () => {
  return (
    <div className="hero  bg-base-200 pt-20 mb-36  max-w-7xl mx-auto ">
      <div className="hero-content flex flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
          <Image
            src={img2}
            alt="About Image 1"
            className="w-3/4 rounded-lg shadow-2xl"
            width={500} 
            height={400}
          />
          <Image
            src={img1} 
            alt="About Image 2"
            className="w-1/2 absolute right-5 top-1/3 border-[#000000B3] hover:border-[#000000] border-8 rounded-lg shadow-2xl"
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
          <Button size='lg' className='outline  bg-zinc-500'> Get More Info </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
