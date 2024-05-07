<<<<<<< HEAD
import React, { useState } from "react";
import axios from "axios";

const Login = ({ be }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${be}/log_in/`, {
                id: username,
                pw: password
            });
            console.log(response.data.isLogined); // 로그인 성공 시 데이터 출력
            
            if (response.data.isLogined === 1) {
                const login_data = { 
                    id : username,
                    pw : password    
                }
                localStorage.setItem('login_data', JSON.stringify(login_data))
                window.location.href = '/';
                // 가져오기 : JSON.parse(localStorage.getItem('login_data'));
            } else {
                alert('The ID or password does not match.')
                setUsername('');
                setPassword('');
            }
            
        } catch (error) {
            if (error.response) {
                setError(error.response.data); // 서버에서 반환한 오류 메시지 설정
            } else {
                setError('Network error'); // 네트워크 오류 발생 시 메시지 설정
            }
        }
    };

        return (
            <div>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
=======
import React, { useState } from "react";
import axios from "axios";

const Login = ({ be }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${be}/log_in/`, {
                id: username,
                pw: password
            });
            console.log(response.data.isLogined); // 로그인 성공 시 데이터 출력
            
            if (response.data.isLogined === 1) {
                const login_data = { 
                    id : username,
                    pw : password    
                }
                localStorage.setItem('login_data', JSON.stringify(login_data))
                window.location.href = '/';
                // 가져오기 : JSON.parse(localStorage.getItem('login_data'));
            } else {
                alert('The ID or password does not match.')
                setUsername('');
                setPassword('');
            }
            
        } catch (error) {
            if (error.response) {
                setError(error.response.data); // 서버에서 반환한 오류 메시지 설정
            } else {
                setError('Network error'); // 네트워크 오류 발생 시 메시지 설정
            }
        }
    };

        return (
            <div>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
>>>>>>> origin/master
