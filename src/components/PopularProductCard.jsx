import {star} from '../assets/icons'

export default function PopularProductCard({imgURL, name, price}) {
    console.log(price, name)
    return (
        <div className='flex flex-1 flex-col'>
            <img src={imgURL} alt={name} className='w-full' />
            {/* <img src={imgURL} alt={name} className='w-[282px] h-[282px]' /> */}
            <div className='mt-2 flex justify-start gap-2'>
                <img src={star} alt='rating icon' width={24} height={24} />
                <p className='text-xl leading-normal text-gray-800'>
                    (4.5)
                </p>
            </div>
            <h3 className='mt-1 text-2xl leading-normal font-semibold '>
                {name}
            </h3>
            <p className='mt-1 font-semibold font-montserrat text-gray-800 text-2xl leading-normal'>
                {price}
            </p>
        </div>
    )
}