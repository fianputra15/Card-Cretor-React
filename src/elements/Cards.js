import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

export default function Cards(props){
    let color,backgroundColor,text,heightCard="";
    let style = {};

    // Selection Card Style
    switch (props.card.name){
        case "A" :
            backgroundColor="#e67e22";
            color="white";
            text = <><Typography variant = "h5" component="h5">
                First Name : {props.data.first ? props.data.first : "Your First Name"}
            </Typography>
                <Typography variant = "h5" component="h5">
                    Last Name : {props.data.last ? props.data.last : "Your Last Name"}
                </Typography>
                <Typography variant = "h5" component="h5">
                    Your City : {props.data.city ? props.data.city : "Your City"}
                </Typography></>;
            break;
        case "B" :
            backgroundColor="#c0392b";
            color="white";
            heightCard="230px";
            text = <><Typography variant = "h5" component="h5">
                Name : {props.data.name ? props.data.name : "Your name"}
                 </Typography>
                <Typography variant = "h5" component="h5">
                    Company : {props.data.company ? props.data.company : "Your Company"}
                </Typography>
                <Typography variant = "h5" component="h5">
                    Role  : {props.data.role ? props.data.role : "Your Role"}
                </Typography>
                <Typography variant = "h5" component="h5">
                    Phone Number  : {props.data.phone ? props.data.phone : "Your Phone Number"}
                </Typography></>;
            break;
        case "C" :
            backgroundColor="#9b59b6";
            color="white";
            text = <><Typography variant = "h5" component="h5">
                Name : {props.data.name ? props.data.name : "Your Name"}
            </Typography>
            <Typography variant = "h5" component="h5">
                Hobby : {props.data.hobby ? props.data.hobby : "Your Hobby"}
            </Typography></>;
            break;
        case "D" :
            backgroundColor="#34495e";
            color="white";
            text = <><Typography variant = "h5" component="h5">
                Name : {props.data.name ? props.data.name : "Your Name"}
            </Typography>
            <Typography variant = "h5" component="h5">
                Status : {props.data.status ? props.data.status : "Your Status"}
            </Typography></>;
            break;
    }

    // Add Style For Cards when user not choose template
    if(props.card.style !== undefined){
        style = props.card.style;
        if(style.color === undefined && style.backgroundColor === undefined){
            style["color"] = color;
            style["backgroundColor"] = backgroundColor;
        }
    }
    // const classes = useStyles();
    return <div>
        <Card style={
           props.card.style ?
               style : {
                marginTop : "90px",
                marginLeft: "-110px",
                height: heightCard === "" ?  "200px" : heightCard,
                width : "521px",
                color:color,
                backgroundColor : backgroundColor
            }
        } onDrop={props.drop.bind(this)} onDragOver={props.dragover.bind(this)}>
            <CardContent>
                <Grid rows="1" columns="2" container>
                    <Typography variant = "h4" component="h4">
                        {props.card.name === "" || props.card.name === "Choose" ? "Choose Template"  :  `Card ${props.card.name}`}
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
