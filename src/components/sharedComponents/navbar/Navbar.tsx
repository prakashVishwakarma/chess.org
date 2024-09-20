'use client'
import { routes } from "@/constant"
import { useState } from "react"
import brandLogo from "@/public/assets/svgs/Logo-dca-jc-square.svg"
import Image from "next/image"

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(true)

    return (<>
        <nav className="w-full bg-black	text-white sm:flex  ">
            <div className="sm:w-3/12 flex	items-center justify-between text-4xl p-4">
                <a href={`${routes.home}`} className="md:ml-[20%]" >
                    <Image className="rounded-[50%]" src={brandLogo} width={50} height={100} alt={'BrandLogo'} />
                </a>
                <div onClick={() => setToggle(!toggle)} className="sm:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>
            <div id='navbar' className={`sm:w-9/12 ${toggle ? 'hidden' : 'block'} sm:block `}>
                <div className="sm:flex [&>*]:pt-8 [&>*]:pb-8 [&>*]:pl-[4%] [&>*]:pr-[4%] justify-end [&>*]:text-center " >
                    <a href={`${routes.events}`} className="hover:bg-gray-700 block"><p> Events </p> </a>
                    <a href={`${routes.winners}`} className="hover:bg-gray-700 block"><p> Winners </p> </a>
                    <a href={`${routes.about}`} className="hover:bg-gray-700 block"><p > About </p></a>
                    <a href={`${routes.testimonials}`} className="hover:bg-gray-700 block"><p > Testimonials </p></a>
                    <a href={`${routes.contact_us}`} className="hover:bg-gray-700 block"><p > Contact </p></a>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar