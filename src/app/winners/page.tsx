import Image from 'next/image'
import Certificate from '@/public/assets/svgs/Certificate.svg'

const Winners = () => {

    return (
        <>
            <div className='w-full h-auto bg-gradient-reverse-custom flex justify-center pt-20 pb-20 pl-10 pr-10'>

                <Image
                    src={Certificate}
                    width={800}
                    height={100}
                    alt={'Certificate'} />
            </div>
        </>
    );
};

export default Winners;
