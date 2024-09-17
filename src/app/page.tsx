'use client'
import { Hero } from "@/components/index";
import { routes } from "@/constant";
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  function handleCliekJoin() {
    router.push(`${routes.events}`)
  }

  const contentUI = <div className='absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
    <h1 className='sm:text-3xl md:text-4xl'>Checkmate Your Way to Success</h1>
    <p className='text-xs sm:text-xl '>Join a community of chess enthusiasts and masters</p>
    <button onClick={() => handleCliekJoin()} type="button" className='bg-cyan-50 text-black px-10 py-3 rounded-md sm:mt-5'>JOIN</button>
  </div>

  return (
    <div className="">
      <Hero content={contentUI} />
    </div>
  );
}
