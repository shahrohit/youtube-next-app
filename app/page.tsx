import { Video } from '@/data'
import { fetchFromApi } from '@/fetchFromApi'
import { Inter } from '@next/font/google'
import Category from './components/Category'
// import Feed from './components/Feed'
import VideoCard from './components/VideoCard'
const inter = Inter({ subsets: ['latin'] })
const fetchData=async()=>{
  const res=await fetchFromApi(`search?part=snippet&q=All`);
  return res.items;
}


export default async function Home() {
  const videos:[Video]= await fetchData()
  return (
    <div className='w-full'>
    <div className='fixed border z-20 bg-white w-full p-2'>
      <Category/>
    </div>
    {/* <Videos videos={videos}/> */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5   w-full p-0 sm:p-3 relative top-11' >
      {
        videos?.map((video)=>{
         return <div key={video.id.videoId}>
            {
              <VideoCard  singleVideo={video}/>
              // <div>a</div>
            }
            {/* {video.id.channelId&& <ChannelCard channel={video}/>} */}
         </div>
        })
      }
    </div>

  </div>
  )
}
