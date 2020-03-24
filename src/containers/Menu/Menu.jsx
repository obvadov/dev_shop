import React from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import ListItemLink from "../../components/ListItemLink/ListItemLink";

function Menu() {
    const [open, setOpen] = React.useState(false);

    const handleCategoriesClick = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const categories = [
        <ListItemLink primary="Category 1"/>,
        <ListItemLink primary="Category 2"/>
    ];

    return (
        <nav>
            <List>
                <div>
                   <Typography>
                       Super Shop
                   </Typography>
                </div>
                <Divider/>
                <ListItem button onClick={handleCategoriesClick}>
                    <ListItemText primary="Categories"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                    <List disablePadding>{categories}</List>
                </Collapse>
            </List>
        </nav>
    );
}

export default Menu;