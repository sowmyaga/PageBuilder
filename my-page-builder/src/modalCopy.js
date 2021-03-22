import React, { useEffect, useState } from "react";
import { Jumbotron, Form, Button, Modal } from 'react-bootstrap';
// import { useSelector, useDispatch } from "react-redux";
// import { Card, Button, Container, Image, ListGroup, Spinner } from 'react-bootstrap';
// import { Redirect } from "react-router-dom";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import "../scss/profile/profile.scss";
// import { useHistory } from "react-router-dom";
// import { getProfileDetails } from '../Actions/profile_action';
// import { GetProfileDetails } from '../profileApi';
const AddContactForm = () => {
    const [show, setShow] = useState(true);
    let XPos = localStorage.getItem("Xvalue");
    let YPos = localStorage.getItem("Yvalue");
    const [showEditedText, setEditedText] = useState(false);
    const handleClose = () => setShow(false);
    const [text, setText] = useState("This is a label");
    const [fontSizeValue, setfontSizeValue] = useState(null);
    const [fontWeightValue, setfontWeightValue] = useState(null);
    const [X, setXValue] = useState(XPos);
    const [Y, setYValue] = useState(YPos);
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("text", text);
        localStorage.setItem("editedText", true);
        localStorage.setItem("fontSize", fontSizeValue);
        localStorage.setItem("fontWeight", fontWeightValue);
        localStorage.setItem("Xvalue", X);
        localStorage.setItem("Yvalue", Y);
        setShow(false);
        window.location.reload();
    }
    // const [profileData, setProfileData] = useState([]);
    // const profileDetails = useSelector((state) => state.profileDetails); //Converted the profileDetailsById to userDetails
    // console.log(profileDetails);
    // const dispatch = useDispatch();
    // const history = useHistory();

    // useEffect(() => {
    //     async function printMousePos() {
    //         var cursorX;
    //         var cursorY;
    //         document.onmousemove = function (e) {
    //             cursorX = e.pageX;
    //             cursorY = e.pageY;
    //             setXValue(cursorX);
    //             setYValue(cursorY)
    //         }
    //     }
    //     printMousePos()
    // }, [show]);
    return (
        <>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit label</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Text</Form.Label>
                            <Form.Control type="text" onChange={(e) => setText(e.target.value)} value={text} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>X</Form.Label>
                            <Form.Control type="number" onChange={(e) => setXValue(e.target.value)} value={X} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Y</Form.Label>
                            <Form.Control type="number" onChange={(e) => setYValue(e.target.value)} value={Y} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Font Size</Form.Label>
                            <Form.Control type="number" onChange={(e) => setfontSizeValue(e.target.value)} value={fontSizeValue} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Font-Weight</Form.Label>
                            <Form.Control type="number" onChange={(e) => setfontWeightValue(e.target.value)} value={fontWeightValue} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                        Save Changes
                  </Button>
                </Modal.Footer>
            </Modal> */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>

        /* <Container>
            <div className="row">
                <div className="col-sm-6 mx-auto" >
                    <Card style={{ margin: "0 auto", height: "400px", 'overflow-y': "scroll" }}>
                        <Card.Header style={{ textAlign: "center" }} >Select an account</Card.Header>
                        {profileUi}
                    </Card>
                </div>
            </div>
        </Container> */
        /* {isRedirect ? (
                    <Redirect
                        to={{
                            pathname: "/profileDetails",
                        }}
                    />
                ) : (
                        ""
                    )} */

        //</div >
    )
}
export default AddContactForm;