import React from 'react'
import { Stack,Box } from '@mui/material'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import Loader from './Loader'



const Videos = ({videos,direction}) => {
    // console.log(videos)
    if (!videos) return <Loader />
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item,index)=>(
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos