import Image from 'next/image'
import img from '@/public/assets/images/chess-hero.jpg'

const Events = () => {
    return (
        
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
                <div className='absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                    <h1 className='sm:text-3xl md:text-4xl'>Checkmate Your Way to Success</h1>
                    <p className='text-xs sm:text-xl '>Join a community of chess enthusiasts and masters</p>
                    <button type="button" className='bg-cyan-50 text-black px-10 py-3 rounded-md sm:mt-5'>JOIN</button>
                </div>
            </div>
        </div>
    );
};

export default Events;
