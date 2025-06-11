import { Box, Typography } from "@mui/material";
import "../App.css";
import { LinearProgress } from "@mui/joy";
const Skills = () => {
  return (
    <div id="skills" className="skills">
<Typography variant="h2" >
  skills
</Typography>
<Typography >
  <p variant="p" className="skills-p">
  a breif overview of my skills and reusme
</p>
</Typography>
<Box className="skills-box">
  <LinearProgress determinate value={60} className="linerProgress"/>
  <LinearProgress determinate value={60} className="linerProgress"/>
  <LinearProgress determinate value={60} className="linerProgress"/>
  <LinearProgress determinate value={60} className="linerProgress"/>
  <LinearProgress determinate value={60} className="linerProgress"/>
  <LinearProgress determinate value={60} className="linerProgress"/>
</Box>
    </div>
  );
};
export default Skills;
