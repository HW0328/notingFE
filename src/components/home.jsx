import React, { useState, useEffect } from "react";
import axios from 'axios';

import View from './view'

const Home = ({ be, cp, user }) => { 
    const [memo, setMemo] = useState([]);

    useEffect(() => {
        axios.get(be + '/allMemo/')
            .then(response => {
                setMemo(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [be]);

    return (
        <div id="Home">
          {memo.map((item, index) => (
            <h3 key={index}><li onClick={() => {cp(<View 
              id={index+1} 
              writer={item.writer} 
              title={item.title}
              content={item.content}
              writetime={item.writetime}
              be={be}
              user={user}
            />
            )}} key={index}>{index+1} | {item.title} <span style={
              {
                color: 'gray', 
                opacity: 0.7, 
                fontSize: 13.5
              }
            }>{item.writer}</span></li></h3>
          ))}
        </div>
    );
};

export default Home;
