import React from 'react';


function Post(props) {
    return (
        <>
            {props.data.length ? (
                <>
                    <ul className="list-group pb-5">
                        {
                            props.data.map(value => (
                                <li key={value.id} className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                                <span className="item-text"> {value.id} </span>
                                <span className="item-text"> {value.title} </span>
                                    <div>
                                        <button className="edit-me btn btn-secondary btn-sm mr-1"
                                                onClick={
                                            ()=>{
                                                    props.gethandleEdit(value.id)
                                                }
                                        }>Edit</button>
                                        <button className="delete-me btn btn-danger btn-sm"
                                                onClick={
                                            () =>{
                                            props.onupdatePost(props.data.filter(res => res.id !== value.id))
                                        }
                                        }
                                        >Delete</button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </>
            ) : (
                <>
                    <h4>product not defined</h4>
                </>
            )
            }
        </>
    );
}

export default Post;
