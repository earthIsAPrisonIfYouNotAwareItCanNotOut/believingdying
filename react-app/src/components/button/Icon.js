import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import IconButton from 'material-ui/IconButton'

export const MenuIconButton = ({ onClick }) => (
  <IconButton
    color="inherit"
    aria-label="Menu"
    onClick={onClick}>
    <MenuIcon />
  </IconButton>
)
export const SearchIconButton = ({ onClick }) => (
  <IconButton
    color="inherit"
    aria-label="Search"
    onClick={onClick}>
    <SearchIcon />
  </IconButton>
)
