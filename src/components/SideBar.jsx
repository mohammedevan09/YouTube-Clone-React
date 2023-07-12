import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'


const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
        width: { sx: 'auto', md: '200px' },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#00abff',
            color: 'white',
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? 'white' : '#00abff',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.7',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}

export default SideBar
