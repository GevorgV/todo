import React, {useCallback, useState} from 'react';
import FormPost from "./form";
import Post from "./Post";
import {PostTodo} from "../../data";
import getDate from "./date";

function PostIndex(props) {
    const [mypost, setMypost] = useState(PostTodo)
    const [Postval, setPostval] = useState({
        title:''
    })
    return (
        <div className="container">
            <h2 className="display-4 text-center py-1">To-Do App</h2>
            <FormPost
                value={Postval}
                getData={(value) => {
                    setMypost([
                        ...mypost,
                        {
                            id:getDate(),
                            title:value,
                            completed: false
                        }
                    ])
                }}
                getonupdateData={(res) => {
                    setMypost(mypost.map(val=>{
                    if(val.id===Postval.id){
                    val.title=res
                }
                    return val
                }))
                    setPostval({
                    title:''
                })
                }}
            />
            <Post data={mypost}
                  onupdatePost={(res) => setMypost(res)}
                  gethandleEdit={(res)=>    setPostval(mypost.find(val=>val.id===res))} loading={false}/>
        </div>
    );
}

export default PostIndex;