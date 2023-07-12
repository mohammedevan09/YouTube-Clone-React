import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Typography, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Videos from './Videos'
import { FetchFromAPI } from '../utils/FetchFromAPI'
import Loader from './Loader'
import { SpaRounded } from '@mui/icons-material'

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const [seeMore, setSeeMore] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    FetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items[0])
    )

    FetchFromAPI(`search?part=snipper&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    )
  }, [id])

  if (!videoDetail) return <Loader />

  const {
    snippet: { title, channelId, channelTitle, description } = {},
    statistics: { viewCount, likeCount } = {},
  } = videoDetail || {}

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail && title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#fff' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                >
                  {videoDetail && channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail && parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetail && parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Stack
              sx={{ color: 'white', mx: '25px', display: 'flex' }}
              onClick={() => setSeeMore((prev) => !prev)}
            >
              {videoDetail && seeMore
                ? description
                : description.substr(0, 130)}
              {seeMore ? (
                <span style={{ color: 'grey' }}> ...hide</span>
              ) : (
                <span style={{ color: 'grey' }}> see more...</span>
              )}
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails
