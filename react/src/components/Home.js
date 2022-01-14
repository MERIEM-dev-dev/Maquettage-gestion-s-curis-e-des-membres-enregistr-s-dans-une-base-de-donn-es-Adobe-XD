import React, { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'

import Login from './Login'
import Register from './Register'

import { Provider } from "./../contexts/Context";
import Form from "./Form";
import UserList from "./UserList";
import { Actions } from "./../Actions";

function Home() {

    const data = Actions();

    const { rootState, logoutUser } = useContext(MyContext);
    const { isAuth, theUser, showLogin } = rootState;


    if (isAuth) {
        return (
            <>
                <div className="userInfo">
                    <h1>{theUser.name}</h1>
                    <div className="_email"><span>{theUser.email}</span></div>
                    <button onClick={logoutUser}>Logout  <i class="fas fa-sign-out-alt"></i> </button>
                </div>
                <Provider value={data}>
                    <div className="App">
                        <h1>Gestion des personnelles</h1>
                        <div className="wrapper">
                            <section className="left-side" className="g-col-6">
                                <Form />
                            </section>
                            <section className="right-side" className="g-col-6">
                                <UserList />
                            </section>
                        </div>
                    </div>
                </Provider>
            </>
        )
    }

    else if (showLogin) {
        return <Login />;
    }
    else {
        return <Register />;
    }
}
export default Home;