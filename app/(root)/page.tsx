import VideoCard from '@/components/VideoCard'
import React from 'react'

const page = () => {
  return (
     <main className="wrapper page">
      <h1 className='text-6xl text-amber-500'>Welcome</h1>
      <VideoCard 
    
              id= "1"
              title="hello"
              thumbnail="/assets/images/video1.png"
              createdAt="10"
             
      
      />
     </main>
  )
}

export default page