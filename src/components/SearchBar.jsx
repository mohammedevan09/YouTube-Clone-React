import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      className="box-shadow"
      sx={{
        borderRadius: 20,
        border: '2px solid rgb(0, 171, 255)',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        bgcolor: 'black',
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search here...."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ background: 'black', color: 'white' }}
      />
      <IconButton type="submit" sx={{ color: '#00abff' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
