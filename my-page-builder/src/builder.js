import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Container, Image, ListGroup, Spinner } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import "./profile.css";
// import "../src/profile.css";
import { useHistory } from "react-router-dom";
import Modal from "./modal"
const BuilderComponent = () => {
    const [profileData, setProfileData] = useState([]);
    const [contactform, setcontactform] = useState(false);
    const [showModal, setModal] = useState(false);
    const [showText, setShowText] = useState(false);
    let text = localStorage.getItem("text");
    console.log("text", text);
    let editedText = localStorage.getItem("editedText");
    let Xvalue = localStorage.getItem("Xvalue");
    let Yvalue = localStorage.getItem("Yvalue");
    let fontValue = localStorage.getItem("fontSize");
    let fontWeight = localStorage.getItem("fontWeight");

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        console.log("ondrag", ev.target.id);
        ev.dataTransfer.setData("text", ev.target.id);
    }
    function drop(ev) {
        console.log("showModal")
        setModal(!showModal);
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        /* If you use DOM manipulation functions, their default behaviour it not to 
           copy but to alter and move elements. By appending a ".cloneNode(true)", 
           you will not move the original element, but create a copy. */
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = "newId"; /* We cannot use the same ID */
        ev.target.appendChild(nodeCopy);
        var cursorX;
        var cursorY;
        cursorX = ev.pageX;
        cursorY = ev.pageY;
        localStorage.setItem("Xvalue", cursorX);
        localStorage.setItem("Yvalue", cursorY);
    }
    useEffect(() => {
        if (editedText) {
            var d = document.getElementById('textlabel');
            d.style.border = "none";
            d.style.fontWeight = fontWeight;
            d.style.marginLeft = Xvalue + 'px';
            d.style.marginTop = Yvalue + 'px';
        }

    }, [editedText])
    const dragTextLabel = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    const droptextLabel = (ev) => {
        ev.preventDefault();
        var dataValue = ev.dataTransfer.getData("text");
        var label = document.getElementById("textlabel");
        label.style.width = "50%";
        ev.target.appendChild(document.getElementById(dataValue));
    }
    const allowDropTextlabel = (ev) => {
        ev.preventDefault();
    }
    const ChangeLabelColor = (event) => {
        event.preventDefault();
        var label = document.getElementById("textlabel");
        label.style.border = "5px solid red";
        label.style.width = "50%";
        //handleKeyDown(event);
    }
    const handleKeyDown = (event) => {
        if (event.key === "Delete") {
            var label = document.getElementById("textlabel");
            label.style.display = "none";
            localStorage.setItem("text", "");
            localStorage.setItem("editedText", false);
        }
        // event.preventDefault();
        if (event.key === "Enter") {
            setModal(!showModal);
        }


    }
    return (
        <>
            <div class="w3-sidebar w3-bar-block w3-card" style={{ width: "25%", right: "0", background: "black" }}>
                <h3 className="w3-bar-item" style={{ color: "white" }}>Blocks</h3>
                <div className="drag" id="drag1" draggable="true" onDragStart={(e) => drag(e)} >
                    <span class="w3-bar-item w3-button">Label</span>
                </div>
                <div className="drag" id="drag2" draggable="true" onDragStart={(e) => drag(e)}>
                    <span class="w3-bar-item w3-button">Input</span>
                </div>
                <div className="drag" id="drag3" draggable="true" onDragStart={(e) => drag(e)}>
                    <span class="w3-bar-item w3-button">Button</span>
                </div>
            </div>
            <div>
                {!editedText ?
                    <div className="w3-container">
                        {showModal ? <Modal /> : ""}

                        <div id="div1" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}></div>



                    </div>
                    : <div className="w3-container">
                        <div id="div2" onDrop={(e) => droptextLabel(e)} onDragOver={(e) => allowDropTextlabel(e)}>
                        </div>
                        <input type="text" value={text} id="textlabel" style={{ fontSize: `${fontValue}` + "px" }} draggable="true" onDragStart={(e) => dragTextLabel(e)} onClick={(e) => ChangeLabelColor(e)} onKeyDown={(e) => { handleKeyDown(e) }} readOnly />

                        {showModal ? <Modal /> : ""}
                    </div>}
            </div>

        </>
    )
}
export default BuilderComponent;