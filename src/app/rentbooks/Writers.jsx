// import img from "./writers/w2.jpg"


export default function Writers() {
    return (
        <div className="space-y-4 max-w-7xl mx-auto pb-10 px-5 lg:px-3 ">

            {/* title */}
            <div className="flex items-center justify-center xl:justify-between">
                <h2 className="text-xl font-bold">Writers</h2>
                <h2 className="hidden xl:block">See more...</h2>
            </div>

            <div className="flex items-center justify-center xl:justify-between gap-10 flex-wrap">
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w2.jpg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w3.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w4.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w5.jpg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w6.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w7.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w8.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w9.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w10.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w11.jpeg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w.jpg`} />
                </figure>
                
                <figure>
                    <img className="size-16 rounded-full" src={`./writers/w12.jpeg`} />
                </figure>
                
                {/* <figure>
                    <img className="size-16 rounded-full" src={`./writers/w13.jpeg`} />
                </figure>
                 */}
            </div>


        </div>
    )
}
