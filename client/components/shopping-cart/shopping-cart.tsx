import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Stack, Typography } from '@mui/material';
import { fontSize } from '@mui/system';

export default function ShoppingCart(){
  return (
  <Stack 
    direction='row'
    spacing='8px'
    alignItems='center'
    sx={{
      paddingX: '20px',
      paddingY: '15px',
      borderRadius: '15px', 
      backgroundColor: 'primary.main',
      }}>
        
    <Typography color='white'>145 $</Typography>
    <Badge badgeContent={4} sx={{
      "& .MuiBadge-badge": {
        color: "white",
        backgroundColor: "primary.dark"
      }
    }}>
      <ShoppingCartIcon sx={{color:'white', fontSize: '32px'}}/>
    </Badge>
    
    
  </Stack>)
}