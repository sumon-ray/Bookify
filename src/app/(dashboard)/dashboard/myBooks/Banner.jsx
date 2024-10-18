import React from "react";

const Banner = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('/image/banner.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "100%",
  };

  const backgroundImageStyle2 = {
    backgroundImage: "url('/image/RectangleLight.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "50%",
      borderTopRightRadius: "10px",
      borderBottomRightRadius: "10px",
      // borderTopLeftRadius: "20px",  
      // borderBottomLeftRadius: "20px",
    
  };
  const backgroundImageStyle3 = {
    backgroundImage: "url('/image/RectangleLight.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    width: "100%",
  };

  return (
    <div className="relative flex items-center justify-center h-[400px] w-full" style={backgroundImageStyle}>
      <div className="md:flex absolute inset-0 " style={backgroundImageStyle2}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
            A Book Is a Gift You Can Open Again and Again
          </h1>
          <p className="my-4 text-sm md:text-base lg:text-lg max-w-2xl hidden md:block">
            Dialogue is a many-sided critical concept; at once an ancient philosophical genre,
            a formal component of fiction and drama.
          </p>
          <p className="my-4 text-sm md:text-base lg:text-lg max-w-2xl md:hidden">
            Dialogue is a many-sided critical concept; at once an ancient philosophical genre,
            a formal component of fiction and drama.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#364957] md:px-4 py-2 rounded-md text-white text-sm md:text-base">
              Claim Discount
            </button>
            <button className="bg-white md:px-4 py-2 rounded-md text-[#364957] text-sm md:text-base">
              Open Flash
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden absolute inset-0 " style={backgroundImageStyle3}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold leading-tight">
            A Book Is a Gift You Can Open Again and Again
          </h1>
          <p className="my-4 text-sm md:text-base lg:text-lg max-w-2xl hidden md:block">
            Dialogue is a many-sided critical concept; at once an ancient philosophical genre,
            a formal component of fiction and drama.
          </p>
          <p className="my-4 text-sm md:text-base lg:text-lg max-w-2xl md:hidden">
            Dialogue is a many-sided critical concept; at once an ancient philosophical genre,
            a formal component of fiction and drama.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#364957] px-4 py-2 rounded-md text-white text-sm md:text-base">
              Claim Discount
            </button>
            <button className="bg-white px-4 py-2 rounded-md text-[#364957] text-sm md:text-base">
              Open Flash
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Banner;
