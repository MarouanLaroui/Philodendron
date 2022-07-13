import { Divider, Stack, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function EventCard(){
  return (
    <Stack 
      direction='column' 
      justifyContent="flex-start" 
      
      borderRadius='10px'
      paddingX='20px'
      paddingY='15px'
      sx={{ boxShadow: 2 }}
      >
      <Stack direction='row' spacing='20px'>
        <Typography fontWeight='bold' color='primary'>22 Mai 2022</Typography>
        <Typography color='gray'>19:30</Typography>
      </Stack>
      <Typography variant="h6" fontWeight='bold'>
        Anniversaire marouan
      </Typography>

      <Typography>
        Soirée pizza
      </Typography>

      <Divider sx={{marginY:'15px'}}/>

      <Stack direction='row' spacing='5px' alignItems='center'>
        <LocationOnIcon color="primary"/>
        <Typography variant="caption" sx={{color:'gray'}}>145 Impasse de la voie romaine, Montpellier 34090</Typography>
      </Stack>
    </Stack>
  )
}