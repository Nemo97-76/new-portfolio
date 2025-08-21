import { Button } from "@mui/material"
import All from "./tabs/All";
import MiniProjects from "./tabs/mini projects";
import React ,{useState} from "react";
import Previous from "./tabs/Previous";
import "../App.css"
const NavBar=()=>{
    const [tab, setTab] = useState("All");
return(
<>
<div className="nav-bar">
    <Button className={tab==="All"?"smallnavBTN":""} onClick={()=>setTab("All")}>All</Button>
    <Button className={tab==="mini projects"?"smallnavBTN":""} onClick={()=>setTab("mini projects")}>mini projects</Button>
    <Button className={tab=="previous"?"smallnavBTN":""} onClick={()=>setTab("previous")}>previous</Button>
</div>
    {tab === "All"? <All /> : tab === "mini projects" ? <MiniProjects /> : <Previous />}
</>
)
}
export default NavBar;