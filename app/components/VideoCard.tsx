import { Video } from '@/data'
import Link from 'next/link'
import React from 'react'

type Props = {
    singleVideo:Video,
}

const VideoCard = ({singleVideo:{id:{videoId},snippet}}: Props) => {
  return (
    <div className=''>
      <Link href={videoId? `/video/${videoId}`:""} className='flex flex-col justify-start '>
        <img src={snippet.thumbnails?.medium.url} alt={snippet.description}  className=" object-cover sm:rounded-2xl"/>
        <div className='flex justify-between'>
          <div className='w-5 h-5 rounded-full border'></div>
          <div className='text-sm'>{snippet.title}</div>
          <div className=' bg-gray-200  rounded-[50%] h-10 w-10'>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 font-bold">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
          </svg>
          </div>



        </div>
      </Link>
    </div>
  )
}

export default VideoCard