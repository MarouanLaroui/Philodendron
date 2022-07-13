import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme  = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#32B17C',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
}))