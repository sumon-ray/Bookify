import img from "../../assets/images/Our-books/T.png"
import img1 from "../../assets/images/Our-books/s.png"
import img2 from "../../assets/images/Our-books/R.png"
import img3 from "../../assets/images/Our-books/a.png"
import img4 from "../../assets/images/Our-books/D.png"
import img5 from "../../assets/images/Our-books/j.jpg"
import Image from "next/image";

export default function Trending() {
  return (
    <div className="bg-[#EFEEE9] w-full py-14 space-y-3">

        <h1 className="text-3xl font-semibold text-center">Trending this week</h1>

        <div className="border border-black border-dashed rounded-xl max-w-7xl mx-auto flex justify-center py-12">
          <div className="grid grid-cols-6 gap-10">
              <Image src={img} width={400} height={500}  className="w-36 h-44 rounded-xl" />
              <Image src={img1} width={400} height={500} className="w-36 h-44 rounded-xl" />
              <Image src={img2} width={400} height={500} className="w-36 h-44 rounded-xl" />
              <Image src={img3} width={400} height={500} className="w-36 h-44 rounded-xl" />
              <Image src={img4} width={400} height={500} className="w-36 h-44 rounded-xl" />
              <Image src={img5} width={400} height={500} className="w-36 h-44 rounded-xl" />
          </div>
        </div>

    </div>
  )
}
