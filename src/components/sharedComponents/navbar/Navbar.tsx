
const Navbar = () => {
    return (<>
        <nav className="w-full bg-black	text-white sm:flex  ">
            <div className="sm:w-3/12 flex	items-center justify-center text-4xl p-4">
                <h1>Chess</h1>
            </div>
            <div className="sm:w-9/12 ">
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