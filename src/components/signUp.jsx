<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";


const SignUp = ({ be }) => {
    const [id, setId] = useState('');
    const [pw1, setPw1] = useState('');
    const [pw2, setPw2] = useState('');

    const signup = async (e) => {
        e.preventDefault(); // 폼 제출 방지
        
        if (id === '' | pw1 === '' | pw2 === ''){
            alert('Please fill out all input fields')
            setId('');
            setPw1('');
            setPw2('');
        } else if (pw1 !== pw2) {
            alert('Two passwords do not match');
            setPw1('');
            setPw2('');
        } else {
            const data = {
                id: id,
                pw: pw1
            }

            try {
                await axios.post(be + "/sign_up/", data)
                .then(res => {
                        if (res.data.err === 'None') { 
                            window.location.href = '/'
                        } else {
                            alert(res.data.err)
                        }
                    }
                )

            } catch (error) {
                console.error(error);
                // 여기서 에러 처리 로직 추가 가능
            }
        }
    }


    return (
        <div>
            <form method="POST" onSubmit={signup} id="new">
                
                <input type="text" name="id" id="signup" placeholder="Please insert name." 
                value={id} 
                onChange={(e) => setId(e.target.value)}/>
                
                <br />
                <input type="password" name="pw" id="signup" placeholder="Please insert password."
                value={pw1} 
                onChange={(e) => setPw1(e.target.value)}
                /><br />
                <input type="password" name="pw" id="signup" placeholder="Please insert your password again"
                value={pw2} 
                onChange={(e) => setPw2(e.target.value)}
                /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

=======
import React, { useEffect, useState } from "react";
import axios from "axios";


const SignUp = ({ be }) => {
    const [id, setId] = useState('');
    const [pw1, setPw1] = useState('');
    const [pw2, setPw2] = useState('');

    const signup = async (e) => {
        e.preventDefault(); // 폼 제출 방지
        
        if (id === '' | pw1 === '' | pw2 === ''){
            alert('Please fill out all input fields')
            setId('');
            setPw1('');
            setPw2('');
        } else if (pw1 !== pw2) {
            alert('Two passwords do not match');
            setPw1('');
            setPw2('');
        } else {
            const data = {
                id: id,
                pw: pw1
            }

            try {
                await axios.post(be + "/sign_up/", data)
                .then(res => {
                        if (res.data.err === 'None') { 
                            window.location.href = '/'
                        } else {
                            alert(res.data.err)
                        }
                    }
                )

            } catch (error) {
                console.error(error);
                // 여기서 에러 처리 로직 추가 가능
            }
        }
    }


    return (
        <div>
            <form method="POST" onSubmit={signup} id="new">
                
                <input type="text" name="id" id="signup" placeholder="Please insert name." 
                value={id} 
                onChange={(e) => setId(e.target.value)}/>
                
                <br />
                <input type="password" name="pw" id="signup" placeholder="Please insert password."
                value={pw1} 
                onChange={(e) => setPw1(e.target.value)}
                /><br />
                <input type="password" name="pw" id="signup" placeholder="Please insert your password again"
                value={pw2} 
                onChange={(e) => setPw2(e.target.value)}
                /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

>>>>>>> origin/master
export default SignUp;