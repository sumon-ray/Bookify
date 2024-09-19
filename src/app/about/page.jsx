export default function AboutPage() {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[38rem]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')" }}>
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                    <h1 className="font-black text-5xl text-white">About us</h1>
                </div>
            </div>


            {/* BookChimp */}
            <div className="max-w-6xl mx-auto my-20">
                <div className="grid grid-cols-2 gap-9">

                    <div className="h-64 w-full lg:h-auto">
                        <div
                            className="w-full h-full bg-cover rounded-2xl"
                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)" }}
                        >
                            <div className="w-full h-full bg-black opacity-25 rounded-2xl"></div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] ">
                        <div className="max-w-xl space-y-1">
                            <h4 className="text-[#A85D32] font-black ">About us</h4>
                            <h1 className="text-3xl font-bold text-balance">About Book Chimp</h1>
                            <p className="pb-3 text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nihil ratione eveniet magnam, corporis qui tempore numquam totam mollitia asperiores dolor laborum saepe eum reiciendis. Non vel praesentium inventore blanditiis?</p>
                            <button className="bg-[#A85D32] text-white p-2 font-bold rounded-lg">Our Service</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] ">
                        <div className="max-w-xl text-right">
                            <h3 className="text-2xl font-serif font-bold text-balance">Which book has had the biggest impact on your life? Share your story in the comments.</h3>
                            <p className="pt-3 pb-5 text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat doloremque possimus culpa dolorem incidunt expedita architecto, nulla quos deleniti dolor vel aspernatur earum temporibus id ad molestiae. Neque, et vel?</p>
                            <button className="bg-[#A85D32] text-white p-2 font-bold rounded-lg">Our Project</button>
                        </div>
                    </div>

                    <div className="h-64 w-full lg:h-auto">
                        <div
                            className="w-full h-full bg-cover rounded-2xl"
                            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                        >
                            <div className="w-full h-full rounded-2xl bg-black opacity-25"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
