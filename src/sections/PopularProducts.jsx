import { products } from "../constants";
import { PopularProductCard } from '../components'

export default function PopularProducts () {
    return (
        <section className="max-w-6xl mx-auto mt-12">
            <div className="flex flex-col justify-start gap-4">
                <h1 className="text-4xl font-bold">
                    Our <span className="text-red-400">Popular</span> Products
                </h1>
                <p className="lg:max-w-lg mt-2 text-gray-800">
                    Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.
                </p>
            </div>
            <div 
                className="mt-16 grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 max-md:place-content-center max-sm:gap-4 gap-8 "
            >
                {products.map(product => (
                    <PopularProductCard key={product.name} {...product} /> 
                ))}
            </div>
        </section>
    );
}