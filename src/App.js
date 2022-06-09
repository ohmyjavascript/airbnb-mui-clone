import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';
import OptionsTab from 'components/OptionsTab';
import Container from '@mui/material/Container';
import LocationCards from 'components/LocationCards';
import React from 'react';
import './App.css';
import Footer from 'components/Footer';
import FooterMenu from 'components/FooterMenu';
import { displayOnDesktop } from 'themes/commonStyles';
import MobileFooter from 'components/MobileFooter';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: 100,
            overflowY: 'scroll',
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <FooterMenu />
        </Box>
        <Box sx={displayOnDesktop}>
          <Footer />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;
