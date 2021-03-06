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

export default function Home(){
    //State For Selection Card and show/hidden form & Card
    let [card,setCard] = useState({});
    // State For Collect Value From Form
    let [data,setData] = useState({});
    let form;

    // Function for drag in CardGroup
    const ondrag = (e) => {
        e.dataTransfer.setData("name",e.target.id);
    };

    // Function for drag over in Cards Components
    const ondragover = (e) => {
        e.preventDefault();
    };

    // Function for on drop in Cards Components
    const ondrop = (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("name");
        setCard({
            name : data,
            status : true,
            show : true,
            form : true
        })
    };

    // Function OnChange from form
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
                role : document.querySelector("#role").value,
                phone : document.querySelector("#phone").value
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

    // Selection and fill form with textfield
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
                <TextField id="phone" label="Phone Number" onChange={handleChange} variant="outlined" /><br/><br/>
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
                        <CardGroup drag={ondrag}  setCard = {setCard} card={card} />
                        {/*<button onClick={() => alert(nameCard.name)}>coba</button>*/}
                    </Box>
                </Grid>
                <Grid item xs >
                    {
                        card.show ? <Cards drop={ondrop}  dragover={ondragover} card = {card} data={data} /> :
                            <Cards drop={ondrop} dragover={ondragover} class="droptarget" card={{name : "Choose"}} />
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
