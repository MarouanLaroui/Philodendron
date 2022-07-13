import { Box, Divider, Grid, Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ItemRow from '../components/item-row/item-row'
import styles from '../styles/Home.module.css'
import Event from './event/event'

const Home: NextPage = () => {
  return (
    <Event></Event>
  )
}

export default Home
