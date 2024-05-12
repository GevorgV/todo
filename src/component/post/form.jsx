import React, {useEffect, useState} from 'react';

function FormPost(props) {
    const [input, setInput] = useState("")

    useEffect(()=>{
        if(props.value){
            setInput(props.value.title)
        }
    },[props])

    function handleupdateSubmit() {
        if (!input.length) {
            return;
        }
        props.getonupdateData(input)
        setInput('')
    }

    function handleAddSubmit() {
        // ... validation code
        if (!input.length) {
            return;
        }
        props.getData(input)
        setInput('')
    }

    return (
        <div className="jumbotron p-3 shadow-sm">
                <div className="d-flex align-items-center">
                    <input autoFocus value={input}
                           onChange={(e)=>{
                        setInput(e.currentTarget.value)
                    }}
                           className="form-control mr-3" type="text"
                           style={{flex: 1}} name={"label"}/>
                    {
                        props.value.title ? (
                            <button className="btn btn-primary"  onClick={handleupdateSubmit}>upadte New Item</button>
                        ) : (
                            <button className="btn btn-primary" onClick={handleAddSubmit}>Add New Item</button>
                        )
                    }
                </div>
        </div>
    );
}

export default FormPost;