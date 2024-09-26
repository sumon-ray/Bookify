import MyBookCard from "./MyBookCard";

export default function page() {
    return (
        <section className="space-y-12">

            {/* my book page title */}
            <div className="bg-[#EFEEE9] rounded-md p-6">
                <h1 className="text-3xl font-black uppercase text-center">My books</h1>
            </div>

            {/* cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-16 gap-y-10 pb-12">

                <MyBookCard />
                <MyBookCard />

            </div>

        </section>
    )
}
