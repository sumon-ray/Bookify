import Image from "next/image";

export default function CategoryCard({img,genre}) {
    return (
        <div className="flex flex-col justify-center items-center gap-y-2 dark:text-white">
            <div className="size-32 lg:size-36 border rounded-full flex justify-center dark:border-[#0A0A0C]">
                <Image src={img} height={50} width={100} className="h-28 lg:h-32 w-20 lg:w-24 -mt-6 rounded-lg" />
            </div>
            <h2 className="text-xs md:text-base font-semibold uppercase">{genre}</h2>
        </div>
    )
}
