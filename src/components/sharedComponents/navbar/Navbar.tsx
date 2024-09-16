'use client'
import { useState } from "react"

const Navbar = () => {

    const [toggle, setToggle] = useState<boolean>(true)

    return (<>
        <nav className="w-full bg-black	text-white sm:flex  ">
            <div className="sm:w-3/12 flex	items-center justify-between text-4xl p-4">
                <h1>Chess</h1>
                <div onClick={() => setToggle(!toggle)} className="sm:hidden cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

            </div>
            <div id='navbar' className={`sm:w-9/12 ${toggle ? 'hidden' : 'block'} sm:block `}>
                <div className="sm:flex [&>*]:p-7 justify-end [&>*]:text-center " >
                    <a href="events" className="hover:bg-gray-700 block"><p> Events </p> </a>
                    <a href="about" className="hover:bg-gray-700 block"><p > About </p></a>
                    <a href="testimonials" className="hover:bg-gray-700 block"><p > Testimonials </p></a>
                    <a href="contact" className="hover:bg-gray-700 block"><p > Contact </p></a>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar