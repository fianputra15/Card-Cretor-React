import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
export default function FloatingButton(){

    return <div>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </div>
}
