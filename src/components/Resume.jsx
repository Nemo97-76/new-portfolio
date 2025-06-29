import { Box, Typography } from "@mui/material";
import "../App.css";
const Resume = () => {
  console.log(new Date());
  
  return (
    <div className="Resume" id="Resume">
      <Typography variant="h2">Resume</Typography>
      <Typography className="resume-brief" variant="body1">
        I'm tasneem, a Junior React.js developer with a passion for web
        developing ,I enjoy working on developing user-friendly web apps using
        JavaScript and React.
      </Typography>
<Box className="summary-box">
<Typography variant="h4" >Summary</Typography>
   <Box className="summary-item">
     <Typography variant="body1" >
        Tasneem Youssef
    </Typography>
    <Typography variant="body2">
        Junior React.js Developer
    </Typography>
    <ul className="summary-list">
        <li>Egypt , Alexandria</li>
        <li>+20 100 00 797 61</li>
        <li>tasneemyoussef61@gmail.com</li>
    </ul>

   </Box>
</Box>
    </div>
  );
};
export default Resume;
