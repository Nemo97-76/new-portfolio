import React from 'react';
import "../App.css";
import { Box, Typography } from '@mui/joy';
import Typed from "typed.js"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Typer=()=>{
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['MERN-stack developer', 'Front-end Developer', 'Back-end Developer'],
            typeSpeed: 80,
            backSpeed: 70,
            startDelay: 300,
            loop: true,
            smartBackspace: true,
            showCursor: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className="typer">
            I'm <span style={{textDecoration:"underline",textDecorationThickness:"0.15rem",textUnderlineOffset:"8px",textDecorationColor:"#c87573"}} ref={el} />
        </div>
    );
}


const Home=()=>{
    return(
        <>
        <div className="home">
<Box className="homeBox" >
    <Typography id="myName" level="h1">
        Tasneem Youssef
    </Typography>
    <Typography id="myTitle"  level="h2" sx={{ fontSize: '3rem', fontWeight: '300'}}>
        <Typer />
    </Typography>
    <Box className="homeBox2">
<a href='https://www.facebook.com/tasn13eem/'><FacebookRoundedIcon className='icon'/></a>
<a href="https://www.linkedin.com/in/tasneem-youssef-770708278/">
<LinkedInIcon className='icon'/>
</a>

<a href="https://github.com/Nemo97-76">
<GitHubIcon className='icon'/>
</a>
    
    </Box>
</Box>
        </div>
        </>
    )
}
export default Home;