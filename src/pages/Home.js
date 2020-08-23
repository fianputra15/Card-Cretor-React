import React, {useState, useRef, createRef, useEffect} from "react";
import Wrapper from "../elements/Wrapper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Cards from "../elements/Cards";
import TextField from '@material-ui/core/TextField';
import CardGroup from "../parts/CardGroup";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: '0 1px 8px rgba(0,0,0,.3)',
        position: 'relative',
        zIndex: theme.zIndex.drawer + 100,
        [theme.breakpoints.down('sm')]: {
            position: 'fixed'
        }
    },
    toolBar: {
        paddingLeft: theme.spacing(1) / 2,
        paddingRight: theme.spacing(1) / 2
    },
    branding: {
        display: 'flex',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        margin: 'auto 0',
        marginLeft : 8,
        lineHeight: '50px',
        padding: `0 64px 0 0`
    },
    logo: {
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '80px'
        }
    },
    searchWrapper: {
        flex: '1 1 0%',
        boxSizing: ' border-box'
    },
}));
export default function Home(){
    let [nameCard,setNameCard] = useState({});
    let form;
    switch (nameCard.name){
        case "A" :
            form = <>
                    <TextField id="first" label="First Name" variant="outlined" /><br/><br/>
                    <TextField id="last" label="Last Name" variant="outlined" /><br/><br/>
                    <TextField id="city" label="City" variant="outlined" /><br/><br/>
                </>;
            break;
        case "B" :
            form = <>
                <TextField id="name" label="Name" variant="outlined" /><br/><br/>
                <TextField id="company" label="Company" variant="outlined" /><br/><br/>
                <TextField id="role" label="Role" variant="outlined" /><br/><br/>
            </>;
            break;
        case "C" :
            form = <>
                <TextField id="name" label="Name" variant="outlined" /><br/><br/>
                <TextField id="hobby" label="Hobby" variant="outlined" /><br/><br/>
            </>;
            break;
        case "D" :
            form = <>
                <TextField id="name" label="Name" variant="outlined" /><br/><br/>
                <TextField id="status" label="Status" variant="outlined" /><br/><br/>
            </>;
            break;
    }
    return <Wrapper>
        <Container>
            <Grid
                container
                wrap="wrap"
            >
                <Grid item xs>
                    <Box color="text.primary" width={100}>
                        <br/>
                        <CardGroup setNameCard = {setNameCard}  />
                        {/*<button onClick={() => alert(nameCard.name)}>coba</button>*/}
                    </Box>
                </Grid>
                <Grid item xs >
                    {
                        nameCard.status ? <Cards nameCard = {nameCard} /> :
                            <Card style={{
                                marginTop: "80px",
                                marginLeft: "-87px",
                                alignItems : "center",
                                justify:"center",
                                height: "50%"
                            }}><CardContent>
                                <Typography style={{
                                    textAlign: "center"
                                }} variant="h5" component="h5">Choose Template</Typography>
                            </CardContent>
                            </Card>
                    }
                </Grid>
                <Grid item xs >
                    {/*{*/}
                    {/*    nameCard.status ? <Card style={{*/}
                    {/*        marginTop : "8px",*/}
                    {/*        marginLeft : "16px",*/}
                    {/*        height : "100%"*/}
                    {/*    }}>*/}
                    {/*        <CardContent>*/}
                    {/*            <Typography style={{*/}
                    {/*                textAlign:"center"*/}
                    {/*            }} variant = "h5" component="h5">Choose Template</Typography>*/}
                    {/*        </CardContent>*/}
                    {/*    </Card> : ""*/}
                    {/*}*/}
                    <Card style={{
                        marginTop : "8px",
                        marginLeft : "16px",
                        height : "100%"
                    }}>
                        <CardContent>
                            <Typography style={{
                                textAlign:"center"
                            }} variant = "h5" component="h5">Form</Typography>
                            <br/>
                            {form ? form : ""}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
}
