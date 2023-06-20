// material-ui
import { useTheme } from '@mui/material/styles';


 import logo from 'assets/images/logomercor.png';
 

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    
     <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
     <img src={logo} alt="logo" width="40" height='40' style={{marginTop:'9.5px', marginRight:'4px'}}/>
    <p style={{marginTop:'17.5px', fontSize:'20px', color:'black',
fontWeight: 600
}}>Project M.</p>
     </div>
    
  );
};

export default Logo;
