import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";

function ParentChild() {
    const [message, setMessage] = useState("Hello from Parent");
    const [text, setText] = useState('')



    const handleClick = () => {
        setMessage("data updated from parent click");
    };

    return (
        <section>
            <article className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <h2 className="fs-2">Welcome Parent Component</h2>
                        <input type="text" placeholder="Type text here" className="form-control"
                            onChange={ (e) => setText(e.target.value) } />
                        <Preview text={ text } />
                        <button
                            type="button"
                            onClick={ handleClick }
                            className="btn btn-primary rounded p-4"
                        >
                            Click to Update to Child
                        </button>

                        <Child data={ message } />
                    </div>
                </div>
            </article>
        </section>
    );
}

function Preview({ text }) {
    return (
        <div>
            <h1 className="fs-1">Live Preview Text: { text }</h1>
        </div>
    )
}

function Child({ data }) {
    return (
        <div>
            <h3>Child Component</h3>
            <p>{ data }</p>
        </div>
    );
}

export default ParentChild;
