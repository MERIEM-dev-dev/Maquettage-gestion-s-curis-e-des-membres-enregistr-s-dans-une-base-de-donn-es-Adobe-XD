import React, {useContext,useState} from 'react'
import {MyContext} from '../contexts/MyContext'
import image from '../person.svg'

function Register(){
    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            name:'',
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
        file:null
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
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
    
    // Show Message on Success or Error
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
            <h1>Sign Up</h1>
            <form onSubmit={submitForm} noValidate>
                <div className="form-control">
                    <label>Full Name</label>
                    <input className="input" name="name" required type="text" value={state.userInfo.name} onChange={onChangeValue} placeholder="Enter your name"/>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input className="input" name="email" required type="email" value={state.userInfo.email} onChange={onChangeValue} placeholder="Enter your email"/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input  className="input" name="password" required type="password" value={state.userInfo.password} onChange={onChangeValue} placeholder="Enter your password"/>
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-control">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <div className="_navBtn">
                <button  onClick={toggleNav}>Login</button>
            </div>
        </div>
    );
}

export default Register;