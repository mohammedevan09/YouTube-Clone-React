import React from 'react'
import { Stack, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: 'black',
        top: '0',
        justifyContent: 'space-between',
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="LOGO" height={45} />
        </Link>
        <Typography
          color={'white'}
          variant="h4"
          fontWeight={'bold'}
          className="box-shadow"
        >
          Youtube<span style={{ color: '#00abff' }}> 2.0</span>
        </Typography>
      </Box>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
