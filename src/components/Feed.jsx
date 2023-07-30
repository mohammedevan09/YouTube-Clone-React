import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import Loader from './Loader'

const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New')

  const [videos,setVideos] = useState([])

  // console.log(selectedCategory,videos)

useEffect(() => {
  FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
    if (data) {
      setVideos(data.items)
    }
  })
}, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: 'white' }}
        >
          CopyRight 2023 &#169; Mohammed Evan
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory}
          <span style={{ color: '#00abff' }}> Videos</span>
        </Typography>
        {!videos.length ? <Loader/> : <Videos videos={videos} />}
        {/* <Videos videos={videos}/> */}
      </Box>
    </Stack>
  )
}

export default Feed
