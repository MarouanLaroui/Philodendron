import { Box, Divider, Grid, Stack, ThemeProvider } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ItemRow from '../components/item-row/item-row'
import styles from '../styles/Home.module.css'
import Event from './event/event'
import {theme} from '../theme/theme'

const Home: NextPage = () => {
  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
    <ThemeProvider theme={theme}>
      <Event/>
    </ThemeProvider>

    </>
        
  )
}

export default Home
