import { Grid, Typography } from "@mui/material";

export default function HeaderMobile(){
  return (
    <Grid 
      container 
      paddingY='30px' 
      paddingX='15px'
      justifyContent='flex-start'
      sx={{backgroundColor:'primary.main'}}
      >
        <Typography variant="h5" color='white'>Événement</Typography>
    </Grid>
  )
}