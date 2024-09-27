
import Image from "next/image";
export default function AboutPage() {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[250px]" style={{ backgroundImage: "url('https://i.ibb.co.com/MByfHgW/spectacular-wall-wooden-background-classical-library-books-library-study-living-room-education-10412.jpg')" }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <h1 className="font-bold text-5xl text-gray-100">About us</h1>
                </div>
            </div>

            <div className="container mx-auto  p-4 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 ">
        <div className="flex items-center justify-center  mt-8 lg:mt-0  sm:h-64 lg:h-96 xl:h-112 2xl:h-128">
      
        <Image
            src="https://i.ibb.co.com/4VyWbf5/pexels-photo-7273787.jpg"
            alt=""
            width={600}
            height={600}
            className="  sm:h-64 lg:h-96 xl:h-112 2xl:h-128  rounded-md "
          />
      

        </div>

        <div className=" md:mr-5 md:ml-5 ">
          
          <h1 className="text-3xl flex gap-2 font-bold leading-none sm:text-6xl">
           <p className="text-[#EFEEE9]">About</p> BookiFy
          </h1>
          <p className="mt-4 mb-4 text-lg  sm:mb-5 text-gray-700">
          Welcome to Bookify, your ultimate destination for discovering, exchanging, and sharing books! At Bookify, we believe in the power of stories to connect, inspire, and transform lives. Our mission is to create a thriving community where book lovers can come together to explore new titles, swap their favorite reads, and cultivate a passion for literature.We are passionate about making books more accessible.At Bookify, we believe every book has a story, not just within its pages but in the journey it takes from one reader to another. 
          </p>
         
        </div>
      </div>
      <h1 className="font-bold text-2xl container mx-auto p-2 mb-4 mt-4">Our Mission</h1>
      <div className="container mx-auto grid-cols-1 p-2 grid  lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5   ">
      
      <p>
      <span className="font-semibold">Book Exchange Platform</span> We offer a unique platform where users can exchange books easily, allowing everyone to enjoy more stories without the clutter of owning too many physical copies.
      </p> 
      <p>
      <span className="font-semibold">Sustainable Reading</span> Our mission is to promote eco-friendly reading habits by encouraging the sharing and recycling of books among the community.
      </p> 
      <p>
      <span className="font-semibold">Community-Centric</span>  From timeless classics to modern bestsellers, Bookify is home to a diverse collection of books across various genres, catering to readers with different tastes and preferences.
      </p> 
      <p>
      <span className="font-semibold">Easy Access</span> Whether you’re looking to trade, explore new titles, or connect with fellow book enthusiasts, Bookify makes it easy to discover and share the
      </p> 
      <p>
      <span className="font-semibold">Affordable</span> Enjoy access to a wide range of books without spending a fortune. Our book exchange platform promotes affordability and accessibility for everyone.
      </p> 
      <p>
      <span className="font-semibold">User-Friendly</span> Our platform is designed to provide a seamless experience, making book discovery, exchanges, and interactions smooth and enjoyable.
      </p> 
      </div>
       
        </div>
    )
}
