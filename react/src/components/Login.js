import React, {useContext, useState} from 'react'
import {MyContext} from '../contexts/MyContext'
import image from '../person.svg'

function Login(){

    const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
        file:null
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    const fileOnchange2=event=>{
        var r=new FileReader();
        r.onload=(e)=>{
            setState({
                ...state,
                file:e.target.result
            });
        }
        r.readAsDataURL(event.target.files[0]);
    }

    // On Submit Login Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }



    return(   
        <div className="_loginRegister">
        <div className="upload">
            <img src={state.file ? state.file : image} alt=""/>
        
        <div className="round">
          <input type="file" onChange={fileOnchange2} />
          <i className="fa fa-camera" style={{color: '#fff'}} />
        </div>
        </div>
            <h1>Login</h1>
            <form  onSubmit={submitForm} noValidate>
                <div className="form-control">
                    <label>Email</label>
                    <input className="input" name="email" type="email" required placeholder="Enter your email" value={state.userInfo.email} onChange={onChangeValue} />
                </div>
                <div className="form-control">
                    <label>PassWord</label>
                    <input className="input" name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onChangeValue} />
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-control">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="_navBtn">
                <button onClick={toggleNav}>Register</button>
            </div>
        </div>
    );
}

export default Login;