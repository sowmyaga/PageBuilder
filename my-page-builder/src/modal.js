import React, { useEffect, useState } from "react";
import "./modal.css";
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
    useEffect(() => {
        OpenModal();
    }, [])
    const OpenModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    const closeModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    return (
        <>
            {/* <button id="myBtn" onClick={OpenModal}>Open Modal</button> */}
            <div id="myModal" class="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div>
                        <form>
                            <label htmlFor="Text">Text</label>
                            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />

                            <label htmlFor="X">X</label>
                            <input type="number" onChange={(e) => setXValue(e.target.value)} value={X} />
                            <label htmlFor="Y">Y</label>
                            <input type="number" onChange={(e) => setYValue(e.target.value)} value={Y} />
                            <label htmlFor="fontSize">Font Size</label>
                            <input type="number" onChange={(e) => setfontSizeValue(e.target.value)} value={fontSizeValue} />
                            <label htmlFor="fontWeight">Font-Weight</label>
                            <input type="number" step="100" onChange={(e) => setfontWeightValue(e.target.value)} value={fontWeightValue} />
                            <button className="saveBtn" onClick={handleSubmit}>Save Changes</button>
                        </form>
                    </div>
                </div>

            </div>
        </>


    )
}
export default AddContactForm;