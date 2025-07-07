import React ,{useState,useEffect} from 'react';
import "../App.css"
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { Button } from '@mui/material';
const BackToTop=()=>{
const [visible, setVisible] = useState(false);
     useEffect(()=>{
        const handleScroll=()=>{
            setVisible(window.scrollY>100)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
     },[]);

     const scrollToTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
     }
     if (!visible) return null;
    return(
   <Button className='back-to-top' onClick={scrollToTop}>
<KeyboardArrowUpRoundedIcon/>
   </Button> 
    )
}
export default BackToTop;