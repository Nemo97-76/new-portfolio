import { Box, Button } from "@mui/joy"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import InsertDriveFileSharpIcon from '@mui/icons-material/InsertDriveFileSharp';
import CollectionsSharpIcon from '@mui/icons-material/CollectionsSharp';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import "../App.css"
const SideNav = () => {
    return(
        <Box className="side-nav">
<a href="#home">
<Button startDecorator={<HomeSharpIcon/>} className="navBTN"><span className="navBTN-text">Home</span></Button>
    </a> 

<a href="#about">
<Button startDecorator={<PersonSharpIcon/>} className="navBTN"><span className="navBTN-text">About</span></Button>
</a>

<a href="#skills">
<Button startDecorator={<InsertDriveFileSharpIcon/>} className="navBTN"><span className="navBTN-text">Resume</span></Button>
</a>

<a href="#portfolio">
<Button startDecorator={<CollectionsSharpIcon/>} className="navBTN"><span className="navBTN-text">Portfolio</span></Button>
</a>


<a href="#contact">
<Button startDecorator={<MailSharpIcon/>} className="navBTN"><span className="navBTN-text">Contact</span></Button>
</a>
        </Box>
    )
}
export default SideNav;