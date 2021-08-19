import React, {useState} from 'react';

const LoginForm = () => {
    const [userdata,setUserdata] = useState({})
    const [message, setMessage] = useState('')
    const login =(e)=>{
        e.preventDefault()
       if (userdata.username === 'admin' && userdata.password === 'admin'){
           setMessage('Welcome')
       }else {
           setMessage('Error')
       }
       setUserdata({username: '', password: ''})

    }

    const changeInput =(e)=>{
        setUserdata({...userdata,[e.target.name]: e.target.value})
    }

    return (
        <div>
            <form>
                <label htmlFor="username" >Username</label>
                <input type="text" id="username" value={userdata.username}  onChange={changeInput} />

                <label htmlFor="password" >Password</label>
                <input type="password"  id="password" value={userdata.password} onChange={changeInput} />

                <button onClick={login}>Login</button>
                <div>{message}</div>

            </form>
        </div>
    );
};

export default LoginForm;