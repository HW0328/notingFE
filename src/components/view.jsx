import React from "react";
import ViewComments from "./view-comments";

const View = ({ id, writer, title, content, writetime, be, user }) => {
    return (
        <div id="Home">
            <h1>{title}</h1>
            <h3>{writer} | {writetime}</h3>
            <h2>{content}</h2>
            <hr />
            <ViewComments postId={id} be={be} user={user}/>
        </div>
    )
}

export default View;