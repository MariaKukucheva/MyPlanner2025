import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#e5a0ba', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    fontSize: 14,
    button: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 20px',
          fontSize: '1rem',
        },
      },
    },
  },
});

export default LightTheme;
