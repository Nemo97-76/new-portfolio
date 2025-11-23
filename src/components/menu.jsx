import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "../App.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { useState } from "react";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import CollectionsSharpIcon from "@mui/icons-material/CollectionsSharp";
import MailSharpIcon from "@mui/icons-material/MailSharp";
const ListMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const DrawerList = (
    <Box className="drawer-box">
      <Button  onClick={() => setSidebarOpen(false)} className="menu">
          <ClearRoundedIcon className="menu-icon"/>
      </Button>
      <List className="drawer-list">
        <ListItem>
          <a href="#home">
            <Button onClick={()=>{setSidebarOpen(false)}} className="listitemBTN">
              <ListItemIcon>
                <HomeSharpIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText className="listitemtext">home</ListItemText>
            </Button>
          </a>
        </ListItem>

        <ListItem>
          <a href="#about">
            <Button onClick={()=>{setSidebarOpen(false)}} className="listitemBTN">
              <ListItemIcon>
                <PersonSharpIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText className="listitemtext">about</ListItemText>
            </Button>
          </a>
        </ListItem>

        <ListItem>
          <a href="#Resume">
            <Button onClick={()=>{setSidebarOpen(false)}} className="listitemBTN">
              <ListItemIcon>
                <InsertDriveFileSharpIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText className="listitemtext">Resume</ListItemText>
            </Button>
          </a>
        </ListItem>

        <ListItem>
          <a href="#portfolio">
            <Button onClick={()=>{setSidebarOpen(false)}} className="listitemBTN">
              <ListItemIcon>
                <CollectionsSharpIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText className="listitemtext">Portfolio</ListItemText>
            </Button>
          </a>
        </ListItem>

        <ListItem>
          <a href="#contact">
            <Button onClick={()=>{setSidebarOpen(false)}} className="listitemBTN">
              <ListItemIcon>
                <MailSharpIcon className="listitemicon" />
              </ListItemIcon>
              <ListItemText className="listitemtext">Contact</ListItemText>
            </Button>
          </a>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Button className="menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MenuRoundedIcon className="menu-icon"/>
      </Button>
      <Drawer
        anchor="right"
        className="drawer"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      >
      
        {DrawerList}
        <Typography variant="h1">
            Tasneem youssef
        </Typography>
      </Drawer>
    </>
  );
};
export default ListMenu;
