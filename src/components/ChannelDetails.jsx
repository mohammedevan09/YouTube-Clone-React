import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { FetchFromAPI } from '../utils/FetchFromAPI'


const ChannelDetails = () => {
  const [channelDetail, setChannelDetail] = useState()
  
  const [videos, setVideos] = useState()
  console.log(channelDetail,videos)
  
  const { id } = useParams()
  
  useEffect(() => {
    const fetchResults = async () => {
      const data = await FetchFromAPI(`channels?part=snippet&id=${id}`)

      setChannelDetail(data?.items[0])

      const videosData = await FetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      )

      setVideos(videosData?.items)
    }

    fetchResults()
  }, [id])
    return (
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              height: '300px',
              background:
                'linear-gradient(135deg, rgba(19,24,57,1) 11%, rgba(37,42,96,0.8631827731092436) 49%, rgba(12,15,46,1) 100%)',
              zIndex: 10,
            }}
          />
          <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
        </Box>
        <Box display="flex" p="2">
          {/* <Box sx={{ mr: { sm: '100px' } }} /> */}
          {!videos ? "" : <Videos videos={videos} />}
        </Box>
      </Box>
    )
};

export default ChannelDetails
