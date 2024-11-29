import { useEffect } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function SwipleftButton({ isDarkMode }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='center'data-aos="fade-up"
    data-aos-duration="3000">
      <Button  
        variant="contained" 
        sx={{ 
          backgroundColor: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
          '&:hover': { backgroundColor: isDarkMode ? '#f0f0f0' : '#333333' },

        }}
      >
        Explore
      </Button>
    </div>
  );
}
