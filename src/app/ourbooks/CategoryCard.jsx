import Image from "next/image";

export default function CategoryCard({img,genre}) {
    return (
        <div className="flex flex-col justify-center items-center gap-y-2">
            <div className="size-36 border rounded-full flex justify-center">
                <Image src={img} height={50} width={100} className="h-32 w-24 -mt-6 rounded-lg" />
            </div>
            <h2 className="font-bold uppercase">{genre}</h2>
        </div>
    )
}
