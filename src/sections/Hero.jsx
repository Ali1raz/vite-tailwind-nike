import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images"

export default function Hero( {activeShoe, setShoe}) {
    return (
        <section className="">
            <div className="relative max-w-6xl mx-auto bg-gray-900/5">
                <img src={activeShoe} className="max-w-full mx-auto my-9 "/>
                <div className="relative -bottom-18 max-sm:-bottom-10 ma-sm:right-0 flex justify-center gap-4 items-center transition-all duration-100">
                    {[bigShoe1, bigShoe2, bigShoe3].map(shoe => {
                        return (
                            <img 
                                key={shoe} 
                                src={shoe} 
                                className={` w-44 max-sm:w-28 max-md:w-36 border-3 border-gray-500 rounded-lg bg-gray-100 cursor-pointer transition duration-100 ease-in-out hover:border-purple-700
                                    ${shoe === activeShoe && 'border-purple-300 shadow-md'} `} 
                                    onClick={() => setShoe(shoe)} 
                            />
                        )
                    }) }
                </div>
            </div>
            
            <div className="text-center mx-2 mt-24 mb-10 space-y-6">
                <h1 
                    className="font-extrabold uppercase transition-all duration-100 md:text-8xl sm:text-6xl max-sm:text-4xl text-gray-800">
                        find your perfect
                        <br />
                        running shoe
                </h1>
                <button className="bg-black px-4 py-2 font-bold rounded-4xl text-white">Find a Store</button>
            </div>
        </section>
    )
}