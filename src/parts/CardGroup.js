import React from "react";
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "@material-ui/icons/Add";
import {Droppable, Draggable} from 'react-beautiful-dnd';

// import { createGlobalState } from 'react-hooks-global-state';


//Init Global State
// const show = { show: false };
// const { useGlobalState } = createGlobalState(show);

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        // flexGrow: 10,
        // backgroundColor:"#ffc107",
        color : "white",
        padding:"8px",
    },
    cards :{
        marginBottom : "8px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function CardGroup(props){
    const classes = useStyles();
    // Global State
    // const [showCard,setShowCard] = useGlobalState('show');
    // const handleShowCard = () => setShowCard(false);
    let color,backgroundColor;

    return <div>
            <Card className={classes.root}>
                <Grid container>
                    <Grid item xs={10}>
                        <Card id ="A" style={{
                            backgroundColor:"#e67e22",
                            minWidth:"50px",
                            color:"white",

                        }} draggable="true" onDragStart={props.drag.bind(this)} onClick={props.setCard.bind(this,{
                            name : "A",
                            status : true,
                            show : true,
                            form : true
                        })}>

                            <CardContent>
                                <Typography variant = "h4" component="h4">
                                    Card A
                                </Typography>
                            </CardContent>
                        </Card><br/>
                        <Card id ="B" style={{
                            backgroundColor:"#c0392b",
                            minWidth:"50px",
                            color:"white"
                        }}  draggable="true" onDragStart={props.drag.bind(this)} onClick={props.setCard.bind(this,{
                            name : "B",
                            status : true,
                            show : true,
                            form : true
                        })}>
                            <CardContent>
                                <Typography variant = "h4" component="h4">
                                    Card B
                                </Typography>
                            </CardContent>
                        </Card><br/>
                        <Card id ="C" style={{
                            backgroundColor:"#9b59b6",
                            minWidth:"50px",
                            color:"white"
                        }}   draggable="true" onDragStart={props.drag.bind(this)} onClick={props.setCard.bind(this,{
                            name : "C",
                            status : true,
                            show : true,
                            form : true
                        })}>
                            <CardContent>
                                <Typography variant = "h4" component="h4">
                                    Card C
                                </Typography>
                            </CardContent>
                        </Card><br/>
                        <Card id ="D" style={{
                            backgroundColor:"#34495e",
                            minWidth:"50px",
                            color:"white"
                        }}   draggable="true" onDragStart={props.drag.bind(this)} onClick={props.setCard.bind(this,{
                            name : "D",
                            status : true,
                            show : true,
                            form : true
                        })}>
                            <CardContent>
                                <Typography variant = "h4" component="h4">
                                    Card D
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton style={{
                            marginTop:"10.8rem"
                        }} onClick={props.setCard.bind(this,{
                            name : props.card.name ? props.card.name : "" ,
                            status : false,
                            show : true,
                            form : props.card.name ? true : false,
                            style : {
                                width : "800px",
                                height : "500px",
                                marginTop : "40px",
                                marginLeft: "-107px",
                            }
                        })}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </div>;
}

export default function FloatingButton(props){
    // Global State
    // const [showCard,setShowCard] = useGlobalState('show');
    // const handleShowCard = () => setShowCard(true);
    return <div >
        {
            props.card.status ? <CardGroup {...props} /> : <Fab onClick={props.setCard.bind(this,{
                status : true,
                show : false,
                form : false
            })} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        }
    </div>
}

