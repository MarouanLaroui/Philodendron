import { Box, Divider, Grid, Stack, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import BottomNavigationMobile from '../components/footer/bottom-navigation/bottom-navigation-mobile'
import HeaderMobile from '../components/header/header-mobile'
import ItemRow from '../components/item-row/item-row'
import styles from '../styles/Home.module.css'
import Event from './event/event'
import {theme} from '../theme/theme'

const Home: NextPage = () => {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
    <ThemeProvider theme={theme}>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <HeaderMobile/>
      </Box>
      <Event/>
      <Box sx={{ display: { xs: 'block', sm: 'none',position: 'fixed', bottom: 0, left: 0, right: 0 } }} width='100%'>
        <BottomNavigationMobile/>
      </Box>
    </ThemeProvider>

    </>

  )
}

export default Home
