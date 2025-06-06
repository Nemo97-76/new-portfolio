import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton, List, ListItem } from "@mui/joy";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import FolderSpecialRoundedIcon from "@mui/icons-material/FolderSpecialRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
const About = () => {
  //TODO:"fix email p width in small screen"
  return (
    <div className="about" id="about">
      <Typography variant="h2" className="about-heading">
        About
      </Typography>
      <Typography variant="body1" className="about-span">
        i'm a motivated junior developer widthsolid foundivation in the MERN
        stack (MongoDB, Express.js,React.js Node.js). Eager to apply my skills
        in real-world projects, i'm activly seeking opportunities to gain
        hands-on experience ,contribute to innovative solutions, and grow as a
        professional in web development.
      </Typography>

      <Box className="about-box">
        <div className="about-img"></div>
        <div className="box-details">
          <Typography variant="h4" className="about-title">
            MERN stack developer
          </Typography>
          <Typography variant="body2" className="box-span">
            here is some brief about myself
          </Typography>
          <div className="detials-lists">
            <Box>
              <List>
                <ListItem
                  startAction={
                    <IconButton size="sm">
                      <ArrowForwardIosIcon sx={{ color: "#ef6367" }} />
                    </IconButton>
                  }
                >
                  <Typography
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "700",
                      wordBreak: "break-all",
                    }}
                  >
                    Birthday :
                  </Typography>
                  <Typography component="p" sx={{ fontSize: "1rem" }}>
                    16 december 1997
                  </Typography>
                </ListItem>

                <ListItem
                  startAction={
                    <IconButton size="sm">
                      <ArrowForwardIosIcon sx={{ color: "#ef6367" }} />
                    </IconButton>
                  }
                >
                  <Typography sx={{ marginLeft: "20px", fontWeight: "700" }}>
                    Age :
                  </Typography>
                  <Typography component="p" sx={{ fontSize: "1rem" }}>
                    26
                  </Typography>
                </ListItem>

                <ListItem
                  startAction={
                    <IconButton size="sm">
                      <ArrowForwardIosIcon sx={{ color: "#ef6367" }} />
                    </IconButton>
                  }
                >
                  <Typography sx={{ marginLeft: "20px", fontWeight: "700" }}>
                    city :
                  </Typography>
                  <Typography component="p" sx={{ fontSize: "1rem" }}>
                    Alexandria
                  </Typography>
                </ListItem>
              </List>
            </Box>
            <Box>
              <List>
                <ListItem
                  startAction={
                    <IconButton size="sm">
                      <ArrowForwardIosIcon sx={{ color: "#ef6367" }} />
                    </IconButton>
                  }
                >
                  <Typography sx={{ marginLeft: "20px", fontWeight: "700" }}>
                    phone :
                  </Typography>
                  <Typography component="p" sx={{ fontSize: "1rem" }}>
                    +20 1000079761
                  </Typography>
                </ListItem>

                <ListItem
                  startAction={
                    <IconButton size="sm">
                      <ArrowForwardIosIcon sx={{ color: "#ef6367" }} />
                    </IconButton>
                  }
                >
                  <Typography
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "700",
                      wordBreak: "break-all",
                    }}
                  >
                    Email :
                  </Typography>
                  <Typography
                  className="email-details"
                    component="p"
                    
                  >
                    tasneemyoussef61@gmail.com
                  </Typography>
                </ListItem>

                <ListItem
                  startAction={
                    <IconButton size="sm">
                      <ArrowForwardIosIcon sx={{ color: "#ef6367" }} />
                    </IconButton>
                  }
                >
                  <Typography sx={{ marginLeft: "20px", fontWeight: "700" }}>
                    Freelance :
                  </Typography>
                  <Typography component="p" sx={{ fontSize: "1rem" }}>
                    Available
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </div>
          <Typography component="p" className="details-span">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            autem optio accusamus officiis magni similique ratione eum! Voluptas
            ratione a neque voluptatibus quidem ullam rerum saepe voluptatem,
            consequatur incidunt error!
          </Typography>
        </div>
      </Box>

      <Box className="counters">
        <Box className="counter-holder">
          <div className="counter">
            <SentimentSatisfiedAltRoundedIcon className="counter-icon" />
          </div>
          <Typography variant="h4">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              end={43}
              duration={7}
              className="counter-number"
            />
          </Typography>
          <Typography variant="span" className="counter-span">
            Happy Clients
          </Typography>
        </Box>

        <Box className="counter-holder">
          <div className="counter">
            <HeadsetMicRoundedIcon className="counter-icon" />
          </div>
          <Typography variant="h4">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              end={35}
              duration={7}
              className="counter-number"
            />
          </Typography>
          <Typography variant="span" className="counter-span">
            Hours of support
          </Typography>
        </Box>

        <Box className="counter-holder">
          <div className="counter">
            <FolderSpecialRoundedIcon className="counter-icon" />
          </div>
          <Typography variant="h4">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              end={2}
              duration={7}
              className="counter-number"
            />
          </Typography>
          <Typography variant="span" className="counter-span">
            Years of Experience
          </Typography>
        </Box>

        <Box className="counter-holder">
          <div className="counter">
            <PeopleRoundedIcon className="counter-icon" />
          </div>
          <Typography variant="h4">
            <CountUp
              enableScrollSpy={true}
              scrollSpyOnce={true}
              end={12}
              duration={7}
              className="counter-number"
            />
          </Typography>
          <Typography variant="span" className="counter-span">
            Hard Workers
          </Typography>
        </Box>
      </Box>

    </div>
  );
};
export default About;
