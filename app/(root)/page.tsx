import VideoCard from '@/components/VideoCard'
import React from 'react'

const page = () => {
  return (
     <main className="wrapper page">
      
      <VideoCard 
    
              id= "1"
              title="hello"
              thumbnail="/assets/images/video1.png"
              createdAt= '30'
             
      
      />
     </main>
  )
}

export default page