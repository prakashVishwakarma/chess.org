import { Hero } from '@/components';

const Events = () => {

    const contentUI = <div className='absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-3/5 '>
        {/* <h1 className='sm:text-3xl md:text-4xl'>Checkmate Your Way to Success</h1>
        <p className='text-xs sm:text-xl '>Join a community of chess enthusiasts and masters</p> */}
        <div className='w-full flex justify-between'>
            <div className='w-1/4 bg-gray-950/30 rounded-2xl pt-5 pb-5'>
                <h1 className='text-3xl mt-3'>Event Name</h1>
                <p className='text-sm'>Battle of the Minds</p>
            </div>
            <div className='w-1/4 bg-gray-950/30 rounded-2xl pt-5 pb-5'>
                <h1 className='sm:text-3xl mt-3'>Date and Time</h1>
                <p className='text-lg '>26-8-2024s</p>
                <p className='text-lg '>07:55 PM</p>
            </div>
            <div className='w-1/4 bg-gray-950/30 rounded-2xl pt-5 pb-5'>
                <h1 className='sm:text-3xl mt-3'>Location</h1>
                <p className='text-sm m-3'>Provide the venue details, including address, with an option to view the location on a map.</p>
            </div>
        </div>
        <div className='bg-gray-950/30 rounded-2xl mt-14 p-10'>
            <p className='text-sm m-3'>Overview: A brief description of the event, highlighting what makes it special (e.g., "Join us for the annual Chess Masters Tournament where the best players compete for the grand title").</p>
            <p className='text-sm m-3'>Event Highlights: List any key attractions, such as guest speakers, special rounds, or prizes.</p>
        </div>

    </div>

    return (
        <>
            <Hero content={contentUI} />
        </>
    );
};

export default Events;
