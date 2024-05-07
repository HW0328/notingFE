import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewComments = ({ be, postId, user }) => {
    console.log('hi')
    console.log(user)
    // def vals
    const [comments, SetComments] = useState([]);
    const [writer, SetWriter] = useState(user);
    const [content, SetContent] = useState('');
    const [writeComment, SetWriteComment] = useState('');

    // view 기능
    useEffect(()=>{
        axios.get(be+`/comments/${postId}`)
        .then(res => {
            console.log(JSON.stringify(res.data.cmt))
            SetComments(res.data.cmt)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }, [be])
    

    // write 기능
    const upload = async (e) => {
        e.preventDefault();
        console.log(writer, content)
        if (writer === '' | content === ''){
            alert("Please insert name and content.")
            window.location.href = window.location.href;

        } else {
        const data = {
            writer : writer,
            content : content,
            postId: postId
        }

        try {
            await axios.post(be+"/uploadComment/", data);
            window.location.href = '/'
        } catch(error) {
            console.error(error)
        }
    }
    }

    useEffect(() => {
        if (user !== '') {
            SetWriteComment(
                <div id="cmt_write">
                    <form onSubmit={upload} method="POST">
                        <input type="text" placeholder="Please input content." onChange={(e) => SetContent(e.target.value)} value={content} /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        } else {
            SetWriteComment(null); // 댓글 작성창을 숨김
        }
    }, [user]);

    return (
        <div>
            {/* 댓글 view */}
            <div id="cmt_view">
                {comments.map((comment, index) => (
                    <div key={index}>
                        <h3>{comment.writer} : {comment.content}</h3>
                    </div>
                ))}
            </div>

            {/* 댓글 write */}
            <div>
                {writeComment}
            </div>

        </div>
    )
}

export default ViewComments;