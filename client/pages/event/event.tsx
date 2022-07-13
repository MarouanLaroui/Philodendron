import { Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ItemList from "../../components/item-list/item-list";
import SelectItemModal from "../../components/select-item-modal/select-item-modal";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";

export default function Event(){
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <React.Fragment>
      <SelectItemModal onClose={()=> {return {}}} open={isModalOpen}/>
      <Stack direction='column' paddingY='20px' paddingX='20px'>

        <Grid container justifyContent='flex-end'>
          <ShoppingCart/>
        </Grid>
        
        <Typography marginY='20px' sx={{typography: {xs:"h5",md:'h5',lg:"h4"}}}>
          Soirée jeux de société
          </Typography>

        <ItemList></ItemList>

        <Button onClick={()=>{setModalOpen(true)}}>open</Button>
      </Stack>
    </React.Fragment>
    
  )
}