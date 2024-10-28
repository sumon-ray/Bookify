
export default function OurBooksBanner() {
  return (
    <div style={{ backgroundImage: "url('./bg3.jpg')" , backgroundAttachment: "fixed"}} className="w-full min-h-screen bg-cover ">
      <div className="bg-gradient-to-tr from-[#000000CC] to-[#00000033] min-h-screen *:text-white flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-black">When in doubt go<br /> to the library</h1>
        <p>It is a long established fact that a reader</p>
        <button className="uppercase bg-[#364957CC] dark:bg-[#0A0A0C] dark:text-white hover:bg-[#364957] px-4 py-2 font-medium rounded-lg ">Find Book</button>
      </div>
    </div>
  )
}
