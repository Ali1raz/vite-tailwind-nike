import { headerLogo } from "../assets/images";

export default function Header () {
    return (
        <header className="flex flex-col w-full bg-gray-100 text-gray-800">
            <nav className="px-10 py-2 max-sm:hidden text-sm font-semibold flex justify-end items-center gap-3 divide-x divide-black">
                <span className="pr-3">Find a Store</span>
                <span className="pr-3">Help</span>
                <span className="pr-3">Join us</span>
                <span className="pr-3">Sign in</span>
            </nav>
            <nav className="flex items-center p-4 bg-white">
                <div className="">
                    <img src={headerLogo} alt='logo' />
                </div>
                <div className="grow flex items-center justify-around">
                    <div className="space-x-8 font-bold"><span>Find a Store</span>
                    <span>About Us</span></div>
                </div>
            </nav>
            <div className="bg-gray-100 py-6"></div>
        </header>
    )
}