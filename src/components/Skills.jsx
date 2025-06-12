import { Box, Typography } from "@mui/material";
import "../App.css";
import { LinearProgress } from "@mui/joy";
const Skills = () => {
  return (
    <div  className="skills">
      <Typography variant="h2">skills</Typography>
      <Typography>
        <p variant="p" className="skills-p">
          a breif overview of my skills and reusme
        </p>
      </Typography>
      <Box className="skills-container">
        <Box className="skills-box">
          <Typography variant="subtitle1" className="skills-title">
            <Box className="skills-title-box">
              <span>HTML</span>
              <span>100%</span>
            </Box>
            <LinearProgress
              determinate
              size="lg"
              thickness={10}
              variant="soft"
              value={100}
              className="linerProgress"
            />
          </Typography>

          <Typography variant="subtitle1" className="skills-title">
            <Box className="skills-title-box">
              <span>CSS</span>
              <span>95%</span>
            </Box>
            <LinearProgress
              determinate
              size="lg"
              thickness={10}
              variant="soft"
              value={95}
              className="linerProgress"
            />
          </Typography>

          <Typography variant="subtitle1" className="skills-title">
            <Box className="skills-title-box">
              <span>JavaScript</span>
              <span>90%</span>
            </Box>
            <LinearProgress
              determinate
              size="lg"
              thickness={10}
              variant="soft"
              value={90}
              className="linerProgress"
            />
          </Typography>

          <Typography variant="subtitle1" className="skills-title">
            <Box className="skills-title-box">
              <span>React</span>
              <span>90%</span>
            </Box>
            <LinearProgress
              determinate
              size="lg"
              thickness={10}
              variant="soft"
              value={90}
              className="linerProgress"
            />
          </Typography>

          <Typography variant="subtitle1" className="skills-title">
            <Box className="skills-title-box">
              <span>Nextjs</span>
              <span>_____</span>
            </Box>
            <LinearProgress
              size="lg"
              thickness={10}
              variant="soft"
              className="linerProgress"
            />
          </Typography>

          <Typography variant="subtitle1" className="skills-title">
            <Box className="skills-title-box">
              <span>TypeScript</span>
              <span>____</span>
            </Box>
            <LinearProgress
              size="lg"
              thickness={10}
              variant="soft"
              className="linerProgress"
            />
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Skills;
