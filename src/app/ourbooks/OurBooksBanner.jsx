
export default function OurBooksBanner() {
  return (
    <div style={{ backgroundImage: "url('./bg3.jpg')" }} className="w-full min-h-[75vh] bg-cover">
      <div className="bg-gradient-to-tr from-[#000000CC] to-[#00000033] min-h-[75vh] *:text-white flex flex-col justify-center items-center text-center space-y-2">
        <h1 className="text-6xl font-black">When in doubt go<br /> to the library</h1>
        <p>It is a long established fact that a reader</p>
        <button className="uppercase bg-[]">Find Book</button>
      </div>
    </div>
  )
}
