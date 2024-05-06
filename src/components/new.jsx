import React, { useState } from "react";
import axios from 'axios';
import Login from "./login";

const New = ({ be, cp, user })=>{

    const [writer, setWriter] = useState(user)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const upload = async (e) => {
        e.preventDefault();
        if (writer === '' | title === '' | content === ''){
            alert("Please insert name, title and content.")
            window.location.href = window.location.href;

        } else {
        const data = {
            writer : writer,
            title : title,
            content : content,
        }

        try {
            await axios.post(be+"/uploadPost/", data);
            window.location.href = '/'
        } catch(error) {
            console.error(error)
        }
    }
    }
    return(
        <div>
            <form method="POST" onSubmit={upload} id="new">
                
                {/* <input type="text" name="writer" id="writer" placeholder="Please insert name." 
                value={writer} 
                onChange={(e) => setWriter(e.target.value)}/> */}
                
                <br />
                <input type="text" name="title" id="title" placeholder="Please insert title."
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                /><br />
                <textarea type="text" name="content"id="content"
                rows={5}
                cols={40} 
                placeholder="Please insert content."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default New;