import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Stack, Typography } from '@mui/material';
import { fontSize } from '@mui/system';

export default function ShoppingCart(){
  return (
  <Stack 
    direction='row'
    spacing='8px'
    sx={{
      paddingX: '20px',
      paddingY: '15px',
      borderRadius: '15px', 
      backgroundColor: 'blue',
      opacity:'0.6'
      }}>
    <Typography color='white'>145 $</Typography>
    <Badge badgeContent={4} color="secondary">
      <ShoppingCartIcon sx={{color:'white', fontSize: '30px'}}/>
    </Badge>
    
    
  </Stack>)
}