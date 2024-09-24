export default function Details({ params }) {
    return (
        <section className="space-y-10">
            {/* title of details */}
            <div className="bg-[#EFEEE9] p-6">
                <h1 className="text-3xl font-black uppercase text-center">Book Details</h1>
            </div>

            {/* img and details */}

            <div className="flex gap-x-10 max-w-7xl mx-auto">
                {/* img */}
                <figure className="w-1/2 h-96 bg-[#EFEEE9]">
                    <img src="" alt="" />
                </figure>
                {/* details */}
                <div className="w-1/2 py-2 space-y-2">
                    <h1 className="font-bold text-2xl capitalize">{'To Kill a Mockingbird'}</h1>
                    <p><span className="font-bold mr-1">Author:</span>{'Harper Lee'}</p>
                    <p><span className="font-bold mr-1">category:</span>{'Fiction'}</p>
                    <p><span className="font-bold mr-1">Condition:</span>{'Good'}</p>
                    <p><span className="font-bold mr-1">Exchange:</span>{'Available'}</p>
                    <p><span className="font-bold mr-1">Published:</span>{1999}</p>
                    <p><span className="font-bold mr-1">Total Page:</span>{281}</p>
                    <p><span className="font-bold mr-1">location:</span>{'Dhaka'}</p>
                    
                </div>
            </div>
        </section>
    )
}
