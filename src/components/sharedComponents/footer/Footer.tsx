import { routes } from "@/constant"

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-black	text-white lg:flex">
                <div className="lg:w-9/12 ">
                    <div className="lg:flex [&>*]:p-7 justify-start [&>*]:text-center " >
                        <a target="_blank" href={`${routes.facebook}`} className="hover:bg-gray-700 block"><p> Facebook </p> </a>
                        <a target="_blank" href={`${routes.instagram}`} className="hover:bg-gray-700 block"><p > Instagram </p></a>
                        <a target="_blank" href={`${routes.twitter}`} className="hover:bg-gray-700 block"><p > Twitter </p></a>
                        <a target="_blank" href={`${routes.linkedIn}`} className="hover:bg-gray-700 block"><p > LinkedIn </p></a>
                    </div>
                </div>
                <div className="lg:w-9/12 ">
                    <div className="lg:flex [&>*]:p-7 justify-end [&>*]:text-center " >
                        <a href={`${routes.about}`} className="hover:bg-gray-700 block"><p>  Service </p> </a>
                        <a href={`${routes.about}`} className="hover:bg-gray-700 block"><p > About Us </p></a>
                        <a href={`${routes.privacy_policy}`} className="hover:bg-gray-700 block"><p > Privacy Policy </p></a>
                        <a href={`${routes.contact_us}`} className="hover:bg-gray-700 block"><p > Contact Us </p></a>
                    </div>
                </div>
            </footer>
            <div className="w-full bg-slate-950 p-2	text-white text-center">{`copyright @ ${new Date().getFullYear()}`}</div>
        </>
    )
}

export default Footer