import { Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import { Box } from "@mui/system";

export default function ItemRow(){
  return (
    <Grid 
      container 
      alignItems='center' 
      paddingY='7px'
      sx={{":hover":{
        transition: "transform .2s",
        transform: "scale(1.02)"
      }}}
    >
      <Box 
        width="30px"
        height="30px"
        marginRight='10px'
        sx={{
          border:"1px", 
          borderRadius:"8px", 
          backgroundColor:"lightgray",
          opacity:"0.5"
        }}
      >
      </Box>
      <Stack direction='column'>
        <Typography fontWeight='bold'>Chips nature</Typography>
        <Typography variant="caption" color='gray'>4 unités</Typography>
      </Stack>
      <Grid item xs/>
      <Typography fontWeight='bold'>$ 6.5</Typography>

      <Box paddingLeft='10px'>
        <ArrowForwardIosIcon fontSize='small'/>
      </Box>
      
    </Grid>
  )
  
}