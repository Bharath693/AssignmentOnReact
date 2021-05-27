import React, {useState} from 'react'
import { Card } from 'react-bootstrap'
import {Button, Label, Input, Form, FormGroup} from 'reactstrap'
function MobileDetails(){
    const [mobileDetails , setMobileDetails] = useState({})
    const [list , setList] =useState([])
    function handleInput(e){
        setMobileDetails({
            ...mobileDetails,
            [e.target.name]:e.target.value
        })
        // console.log(mobileDetails)
        setList([...list,mobileDetails])
        // console.log(list)
    }
    
//    let array=["apple" , "banana" , "cat"]
//    localStorage.setItem("ele" , JSON.stringify(array))
//    const ele=(localStorage.getItem("ele"))
//    console.log(ele)

    function postData(){      
     localStorage.setItem("details", JSON.stringify(list))
    }
    function handleSubmit(event){
        event.preventDefault()
        postData()
        alert("data is added succesfully")
        afterPost()
    } 

    function afterPost(){
        setMobileDetails({
            MobileName:"",
            Brand:"",
            Price:"",
            Color:"",
            Ram:""
        })
    }
    // console.log(localStorage.clear("details"))
    return(
        <>
          <Card align="left">
            <Card.Header as ='h2' align="center">
                MobileDetails
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for ="MobileName">Mobile Name</Label>
                            <Input type="text"
                                   placeholder="Mobilename"
                                   value={mobileDetails.MobileName}
                                   name="MobileName"
                                   onChange={handleInput}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Brand">Brand</Label>
                            <Input type="text"
                                   placeholder="Brand"
                                   value={mobileDetails.Brand}
                                   name="Brand"
                                   onChange ={handleInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Price">Price</Label>
                            <Input type="number"
                                    placeholder="Price"
                                    value={mobileDetails.Price}
                                    name="Price"
                                    onChange = {handleInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Color">Color</Label>
                            <Input type="text"
                                   placeholder="Color"
                                   value={mobileDetails.Color}
                                   name="Color"
                                   onChange ={handleInput}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="Ram">Ram</Label>
                            <Input type="text"
                                   placeholder="Ram"
                                   value={mobileDetails.Ram}
                                   name="Ram"
                                   onChange ={handleInput}/>
                        </FormGroup>

                        <br></br>
                        <Button color="primary" size="lg" type="submit">Submit</Button>
                    </Form>
                </Card.Text>
            </Card.Body>
          </Card>
        </>
    )
}

export default MobileDetails