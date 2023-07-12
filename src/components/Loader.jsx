import React from 'react'
import { Box,CircularProgress,Stack,Typography } from '@mui/material'

const Loader = () => {
  return (
    <Box minHeight="95vh">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
        <Typography color={"white"} variant='h6' fontWeight={"bold"} mt={"40px"}>If Api Request is full then the page won't load</Typography>
      </Stack>
    </Box>
  )
}

export default Loader