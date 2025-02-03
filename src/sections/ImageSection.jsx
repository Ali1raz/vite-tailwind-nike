import { boy } from "../assets/images";

export default function ImageSection() {
    return (
        <div className="mt-6 mb-10 relative max-w-6xl mx-auto">
            <img src={boy} alt="boy" className="max-w-6xl w-full mx-auto" />
            <div className="absolute top-8 left-6 max-sm:top-1.5 max-sm:left-1.5">
                <h1 
                    className="font-extrabold mb-6 max-sm:mb-2 uppercase transition-all duration-100 sm:text-6xl max-sm:text-2xl text-white">
                        discover the 
                        <br />
                        evolution of air
                </h1>
                <button className="bg-white px-4 py-2 font-bold rounded-4xl text-black">Find a Store</button>
            </div>
    </div>
    )
}