import MyBookCard from "./MyBookCard";

export default function MyBooks() {
    return (
        <section className="space-y-12">

            {/* my book page title and filter */}
            <div className="bg-[#EFEEE9] flex items-center justify-between rounded-md p-6">
                <h1 className="text-3xl font-black uppercase text-center">My books</h1>
                {/* filter function */}
                <div>
                    <form className="max-w-sm mx-auto">
                        <select id="countries" className="bg-gray-50  border-black border-2 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 ">
                            <option value="US">Fiction</option>
                            <option value="CA">Classic</option>
                            <option value="FR">Modernist</option>
                        </select>
                    </form>
                </div>
            </div>

            {/* cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-16 gap-y-10 pb-12">

                <MyBookCard />
                <MyBookCard />

            </div>

        </section>
    )
}
