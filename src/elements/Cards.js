import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        flexGrow: 10,
        backgroundColor:"#ffc107",
        textAlign : "left",
        color : "white"
    },
});

export default function Cards(props){
    let color,backgroundColor,text;
    switch (props.nameCard.name){
        case "A" :
            backgroundColor="#e67e22";
            color="white";
            text = <><Typography variant = "h5" component="h5">
                First Name : {props.first}
            </Typography>
                <Typography variant = "h5" component="h5">
                    Last Name : {props.last}
                </Typography>
                <Typography variant = "h5" component="h5">
                    Your City : {props.city}
                </Typography></>;
            break;
        case "B" :
            backgroundColor="#c0392b";
            color="white";
            text = <><Typography variant = "h5" component="h5">
                Name : {props.name}
            </Typography>
                <Typography variant = "h5" component="h5">
                    Company : {props.company}
                </Typography>
                <Typography variant = "h5" component="h5">
                    Role  : {props.role}
                </Typography></>;
            break;
        case "C" :
            backgroundColor="#9b59b6";
            color="white";
            text = <><Typography variant = "h5" component="h5">
                Name : {props.name}
            </Typography>
            <Typography variant = "h5" component="h5">
                Hoby : {props.hoby}
            </Typography>
            <Typography variant = "h5" component="h5">
                University : {props.university}
            </Typography></>;
            break;
        case "D" :
            backgroundColor="#34495e";
            color="white";
            text = <><Typography variant = "h5" component="h5">
                Name : {props.name}
            </Typography>
            <Typography variant = "h5" component="h5">
                Status : {props.statuss}
            </Typography></>;
            break;
    }
    const classes = useStyles();
    return <div>
        <Card style={{
            marginTop : "80px",
            marginLeft : "-85px",
            height : "50%",
            color:color,
            backgroundColor : backgroundColor
        }}>
            <CardContent>
                <Grid rows="1" columns="2" container>
                    <Typography variant = "h4" component="h4">
                        Card {props.nameCard.name}
                    </Typography>
                    <Grid item xs={12} style = {{
                        padding:"10px",
                        marginTop:"10px"

                    }} >
                        {text}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    </div>;
}
