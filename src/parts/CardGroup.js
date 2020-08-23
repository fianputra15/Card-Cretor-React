import React, {useState,useImperativeHandle, useRef, forwardRef} from "react";
import CardContent from "@material-ui/core/CardContent";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "@material-ui/icons/Add";
import { createGlobalState } from 'react-hooks-global-state';

const show = { show: false };
const { useGlobalState } = createGlobalState(show);

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
    const [showCard,setShowCard] = useGlobalState('show');
    const handleShowCard = () => setShowCard(false);

    return <div>
            <Card className={classes.root}>
                <Grid container>
                    <Grid item xs={10}>
                        <Card style={{
                            backgroundColor:"#e67e22",
                            minWidth:"50px",
                            color:"white"
                        }}  onClick={props.setNameCard.bind(this,{
                            name : "A",
                            status : true
                        })}>
                            <CardContent>
                                <Typography variant = "h4" component="h4">
                                    Card A
                                </Typography>
                            </CardContent>
                        </Card><br/>
                        <Card style={{
                            backgroundColor:"#c0392b",
                            minWidth:"50px",
                            color:"white"
                        }} onClick={props.setNameCard.bind(this,{
                            name : "B",
                            status : true
                        })}>
                            <CardContent>
                                <Typography variant = "h4" component="h4">
                                    Card B
                                </Typography>
                            </CardContent>
                        </Card><br/>
                        <Card style={{
                            backgroundColor:"#9b59b6",
                            minWidth:"50px",
                            color:"white"
                        }}  onClick={props.setNameCard.bind(this,{
                            name : "C",
                            status : true
                        })}>
                            <CardContent>
                                <Typography variant = "h4" component="h4">
                                    Card C
                                </Typography>

                            </CardContent>
                        </Card><br/>
                        <Card style={{
                            backgroundColor:"#34495e",
                            minWidth:"50px",
                            color:"white"
                        }}  onClick={props.setNameCard.bind(this,{
                            name : "D",
                            status : true
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
                        }} onClick={handleShowCard}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </div>;
}

export default function FloatingButton(props){
    const [showCard,setShowCard] = useGlobalState('show');
    const handleShowCard = () => setShowCard(true);
    return <div >
        {
            showCard ? <CardGroup {...props} /> : <Fab onClick={handleShowCard} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        }
    </div>
}

