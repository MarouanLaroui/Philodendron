import { Grid, Typography } from "@mui/material";

export default function HeaderMobile(){
  return (
    <Grid 
      container 
      paddingY='30px' 
      paddingX='10px'
      justifyContent='flex-start'
      sx={{backgroundColor:'primary.main'}}
      >
        <Typography variant="h5" color='white'>Test</Typography>
    </Grid>
  )
}