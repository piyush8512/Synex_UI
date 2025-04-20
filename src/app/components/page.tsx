import React from 'react'

const page = () => {
  return (
    <section className='flex flex-col justify-center gap-15 min-h-screen px-5 py-12'>
      <h1 className='text-4xl md:text-6xl font-bold'>Componets</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto'>
        <div className='h-80 w-60 bg-zinc-800 rounded-2xl'><h1>BAdmassh</h1></div>
        <div className='h-80 w-60 bg-zinc-800 rounded-2xl'></div>
        <div className='h-80 w-60 bg-zinc-800 rounded-2xl'></div>
        <div className='h-80 w-60 bg-zinc-800 rounded-2xl'></div>
        <div className='h-80 w-60 bg-zinc-800 rounded-2xl'></div>
        <div className='h-80 w-60 bg-zinc-800 rounded-2xl'></div>
      </div>
    </section>
  )
}

export default page
