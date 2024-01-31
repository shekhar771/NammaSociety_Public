import React from "react";
import { Typography, Box , AppBar, Toolbar} from "@mui/material";
import Style from '../Css/Toolbar.module.css'

function TopBar (){
    return(
            <AppBar position="static">
            <Toolbar className={Style.navbar}>
              <div className={Style.IconBox} >
              </div>
                <text className={Style.font}>
                  Namma Society
                </text>
            </Toolbar>
            </AppBar>
    )
}
export default TopBar;
