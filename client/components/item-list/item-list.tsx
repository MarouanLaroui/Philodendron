import { Divider, Grid, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from "react";
import { Box } from "@mui/system";
import ItemRow from "../item-row/item-row";

export default function ItemList(){
  return (
    <Stack direction='column'>    
      <ItemRow></ItemRow>
      <Divider></Divider>
      <ItemRow></ItemRow>
      <Divider></Divider>
      <ItemRow></ItemRow>
    </Stack>
  )
  
}