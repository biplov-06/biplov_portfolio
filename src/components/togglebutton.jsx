// src/components/Togglebutton.js
import React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: 'gray',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: 'black',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function Togglebutton({ onToggle, isDarkMode }) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='toggle' data-aos="fade-up"
    data-aos-duration="3000">
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch checked={isDarkMode} onChange={onToggle} />}
        label=" "
      />
    </FormGroup>
    </div>
    
  );
}

export default Togglebutton;
