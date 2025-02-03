import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";

export default function Footer() {
    return (
        <footer className="w-full  bg-gray-900 p-12 mt-12">
            <div className="flex justify-between items-start max-w-6xl
                gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} alt="logo" width={150}height={46}
                            className='m-0'
                        />
                    </a>
                    <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
                        Get shoes ready for the new term at your nearest Nike store. Find Your perfect size in store. Get Rewards.
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        {socialMedia.map(icon => (
                            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={icon.alt}>
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className='text-2xl leading-normal font-medium mb-6 text-white'>
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        className='mt-3 text-base leading-normal text-white hover:text-slate-gray'
                                        key={link.name}
                                    >
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

        </footer>
    )
}