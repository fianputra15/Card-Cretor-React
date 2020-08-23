import React, {useState} from "react";
import Wrapper from "../elements/Wrapper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Cards from "../elements/Cards";
import TextField from '@material-ui/core/TextField';
import CardGroup from "../parts/CardGroup";
import CardContent from "@material-ui/core/CardContent";

// const useStyles = makeStyles(theme => ({
//     appBar: {
//         boxShadow: '0 1px 8px rgba(0,0,0,.3)',
//         position: 'relative',
//         zIndex: theme.zIndex.drawer + 100,
//         [theme.breakpoints.down('sm')]: {
//             position: 'fixed'
//         }
//     },
//     toolBar: {
//         paddingLeft: theme.spacing(1) / 2,
//         paddingRight: theme.spacing(1) / 2
//     },
//     branding: {
//         display: 'flex',
//         overflow: 'hidden',
//         textOverflow: 'ellipsis',
//         whiteSpace: 'nowrap',
//         margin: 'auto 0',
//         marginLeft : 8,
//         lineHeight: '50px',
//         padding: `0 64px 0 0`
//     },
//     logo: {
//         margin: 'auto',
//         [theme.breakpoints.down('sm')]: {
//             maxWidth: '80px'
//         }
//     },
//     searchWrapper: {
//         flex: '1 1 0%',
//         boxSizing: ' border-box'
//     },
// }));
export default function Home(){
    let [card,setCard] = useState({});
    let [data,setData] = useState({});
    // let form,data = {};
    let form;
    const handleChange = () => {
        switch (card.name){
            case "A" : setData({
                first : document.querySelector("#first").value,
                last : document.querySelector("#last").value,
                city : document.querySelector("#city").value
            });
            break;
            case "B" : setData({
                name : document.querySelector("#name").value,
                company : document.querySelector("#company").value,
                role : document.querySelector("#role").value
            });
                break;
            case "C" : setData({
                name : document.querySelector("#name").value,
                hobby : document.querySelector("#hobby").value,
            });
                break;
            case "D" : setData({
                name : document.querySelector("#name").value,
                status : document.querySelector("#status").value,
            });
                break;
        }
    }
    switch (card.name){
        case "A" :
            form = <>
                    <TextField id="first" label="First Name" onChange={handleChange} variant="outlined" /><br/><br/>
                    <TextField id="last" label="Last Name" onChange={handleChange} variant="outlined" /><br/><br/>
                    <TextField id="city" label="City" onChange={handleChange} variant="outlined" /><br/><br/>
                </>;
            break;
        case "B" :
            form = <>
                <TextField id="name" label="Name" onChange={handleChange}  variant="outlined" /><br/><br/>
                <TextField id="company" label="Company" onChange={handleChange} variant="outlined" /><br/><br/>
                <TextField id="role" label="Role" onChange={handleChange} variant="outlined" /><br/><br/>
            </>;
            break;
        case "C" :
            form = <>
                <TextField id="name" label="Name" onChange={handleChange} variant="outlined" /><br/><br/>
                <TextField id="hobby" label="Hobby" onChange={handleChange} variant="outlined" /><br/><br/>
            </>;
            break;
        case "D" :
            form = <>
                <TextField id="name" label="Name" onChange={handleChange} variant="outlined" /><br/><br/>
                <TextField id="status" label="Status" onChange={handleChange} variant="outlined" /><br/><br/>
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
                        <CardGroup setCard = {setCard} card={card} />
                        {/*<button onClick={() => alert(nameCard.name)}>coba</button>*/}
                    </Box>
                </Grid>
                <Grid item xs >
                    {
                        card.show ? <Cards card = {card} data={data} /> :
                            <Card style={{
                                marginTop: "90px",
                                marginLeft: "-107px",
                                alignItems : "center",
                                justify:"center",
                                height: "200px",
                                width : "521px"
                            }}><CardContent>
                                <Typography style={{
                                    textAlign: "center"
                                }} variant="h5" component="h5">Choose Template</Typography>
                            </CardContent>
                            </Card>
                    }
                </Grid>
                <Grid item xs >
                    {
                        card.form ? <Card style={{
                            marginTop : "8px",
                            marginLeft : "16px",
                            height : "100%"
                        }}>
                            <CardContent>
                                <Typography style={{
                                    textAlign:"center"
                                }} variant = "h5" component="h5">Please Fill</Typography>
                                <br/>
                                {form ? form : ""}
                            </CardContent>
                        </Card> : ""
                    }
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
}
