<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";

const Lunch = ({ be, cp }) => {
    const [lunch, setLunch] = useState('');

    useEffect(() => {
        axios.get(be + '/lunch/')
            .then(response => {
                console.log(JSON.stringify(response.data))
                if (response.data.lunch === 'None'){
                  setLunch('오늘 급식은 어ㅄ어요');
                } else {
                  setLunch(response.data.lunch);
                }

                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [be]);

    function requestPermission() {
        console.log("권한 요청 중...");
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("알림 권한이 허용됨");
      
            // FCM 메세지 처리
          } else {
            console.log("알림 권한 허용 안됨");
          }
        });
      }
      

    return(
        <div>
            {lunch}
        </div>
    )
}

=======
import React, { useEffect, useState } from "react";
import axios from "axios";

const Lunch = ({ be, cp }) => {
    const [lunch, setLunch] = useState('');

    useEffect(() => {
        axios.get(be + '/lunch/')
            .then(response => {
                console.log(JSON.stringify(response.data))
                if (response.data.lunch === 'None'){
                  setLunch('오늘 급식은 어ㅄ어요');
                } else {
                  setLunch(response.data.lunch);
                }

                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [be]);

    function requestPermission() {
        console.log("권한 요청 중...");
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("알림 권한이 허용됨");
      
            // FCM 메세지 처리
          } else {
            console.log("알림 권한 허용 안됨");
          }
        });
      }
      

    return(
        <div>
            {lunch}
        </div>
    )
}

>>>>>>> origin/master
export default Lunch;