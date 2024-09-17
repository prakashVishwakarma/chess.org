import Image from 'next/image'
import img from '@/public/assets/images/chess-hero.jpg'

const Hero = ({content}:{content: JSX.Element }) => {
    
    return (<>
        <div className='relative w-full'>
            <div className="w-[100%] h-screen overflow-hidden absolute">
                <Image
                    src={img}
                    // width={1550}
                    // height={100}
                    layout="fill"  // Use the "fill" layout to fill the container
                    objectFit="cover"  // Ensures the image maintains aspect ratio and covers the container
                    alt="Picture of the hero iamge"
                />
            </div>
            <div className="w-[100%] h-screen bg-cyan-50">
                {content}
            </div>
        </div>
    </>)
}

export default Hero