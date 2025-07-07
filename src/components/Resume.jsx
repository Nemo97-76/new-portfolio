import { Box, Typography ,Divider} from "@mui/material";
import "../App.css";
const Resume = () => {
  
  return (
    <div className="Resume" id="Resume">
      <Typography variant="h2">Resume</Typography>
      <Typography className="resume-brief" variant="body1">
        I'm tasneem, a Junior React.js developer with a passion for web
        developing ,I enjoy working on developing user-friendly web apps using
        JavaScript and React.
      </Typography>
<Box className="summary-box">
<div>
  <Typography variant="h4" >Summary</Typography>
   <Box className="summary-item">
     <Typography variant="body1"  className="summary-title">
        Tasneem Youssef
    </Typography>
    <Typography variant="body2" className="summary-list">
        Junior React.js Developer
    </Typography>
    <Typography variant="body2" className="summary-list">
      <ul className="summary-list">
        <li>Egypt , Alexandria</li>
        <li>+20 100 00 797 61</li>
        <li>tasneemyoussef61@gmail.com</li>
    </ul>
    </Typography>
   </Box>

<Typography variant="h4" >Education</Typography>
   <Box className="summary-item">
     <Typography variant="body1"  className="summary-title">
        front-end web development diploma
    </Typography>
    <Typography variant="body1"  className="summary-title">
2023    </Typography>
    <Typography variant="body2" className="summary-list">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consectetur mollitia tempora quidem dolorem natus quod quia distinctio et tenetur pariatur ipsa! Facere ea obcaecati architecto quidem soluta neque voluptas?
    </Typography>
   </Box>
</div>

<div>
     <Box className="summary-item">
     <Typography variant="body1"  className="summary-title">
      Back-end (Nodejs) web development diploma

    </Typography>
    <Typography variant="body1"  className="summary-title">
2023    </Typography>
    <Typography variant="body2" className="summary-list">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consectetur mollitia tempora quidem dolorem natus quod quia distinctio et tenetur pariatur ipsa! Facere ea obcaecati architecto quidem soluta neque voluptas?
    </Typography>
   </Box>
    
   <Box className="summary-item">
     <Typography variant="body1"  className="summary-title">
Bachelor's degree in Physics / Alexandria university
    </Typography>
    <Typography variant="body1"  className="summary-title">
2023    </Typography>
    <Typography variant="body2" className="summary-list">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, consectetur mollitia tempora quidem dolorem natus quod quia distinctio et tenetur pariatur ipsa! Facere ea obcaecati architecto quidem soluta neque voluptas?
    </Typography>
   </Box>
</div>
</Box>
    </div>
  );
};
export default Resume;
