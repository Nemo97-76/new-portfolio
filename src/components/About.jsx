import { Box, Typography } from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
const About=()=>{
    return(
        <div className="about">
<Typography variant="h2" className="about-heading">About</Typography>
<Typography variant="body1" className="about-span" >
    i'm a motivated junir developer widthsolid foundivation in the MERN stack (MongoDB, Express.js,React.js Node.js). Eager to apply my skills in real-world projects, i'm activly seeking opportunities to gain hands-on experience ,contribute to innovative solutions, and grow as a professional in web development. 

</Typography>

<Box className="about-box">
    <div className="about-img"></div>
    <div className="box-details">
        <Typography variant="h4" className="about-title">MERN stack developer</Typography>
        <Typography variant="body2" className="box-span">here is some brief about myself</Typography>
       </div>
</Box>
        </div>
    )
        
}
export default About;