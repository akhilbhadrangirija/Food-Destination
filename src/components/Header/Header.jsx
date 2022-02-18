import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar,Toolbar,Typography,InputBase,Box } from "@material-ui/core";
// import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@mui/icons-material/Search';
import { Search } from "@material-ui/icons";
import useStyles from './styles'


const Header=()=>{
const classes=useStyles();
return(
<AppBar position="static">
    <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
            Travel Advisory

        </Typography>
        <Box display="flex">
            <Typography variant="h6" className={classes.title}>
                Explore New Places
            </Typography>
            {/* <Autocomplete> */}
                <div display="flex" className={classes.search}>
                    <div className={classes.SearchIcon}>
                     <Search/>

                        
                    </div>
                    <InputBase placeholder="Search..." classes={{root:classes.inputRoot,input:classes.InputInput}} />
                </div>

                {/* </Autocomplete> */}
        </Box>

    </Toolbar>
</AppBar>
)
}

export default Header;