import React from 'react';
import '../App.css';
import { Typography} from "@mui/material";
import NavBar from './SmallNavBar.jsx';
const Portfolio = () => {
    return (
        <div className="portfolio" id="portfolio">
                <Typography variant="h2" className="about-heading">
                    portfolio
                  </Typography>
                  <Typography variant="body1" className="details-span">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                              autem optio accusamus officiis magni similique ratione eum! Voluptas
                              ratione a neque voluptatibus quidem ullam rerum saepe voluptatem,
                              consequatur incidunt error!
                            </Typography>
      <NavBar />
              
        </div>
    )
}
export default Portfolio;