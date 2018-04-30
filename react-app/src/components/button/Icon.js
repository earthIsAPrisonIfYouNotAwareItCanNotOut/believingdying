import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import ClearIcon from '@material-ui/icons/Clear'
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
export const KeyboardBackspaceIconButton = ({ onClick }) => (
  <IconButton
    color="gray"
    aria-label="KeyboardBackspace"
    onClick={onClick}>
    <KeyboardBackspaceIcon />
  </IconButton>
)
export const ClearIconButton = ({ onClick }) => (
  <IconButton
    color="gray"
    aria-label="KeyboardBackspace"
    onClick={onClick}>
    <ClearIcon />
  </IconButton>
)
