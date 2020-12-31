import React, {useState, useEffect} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import MainHome from './MainHome/index';
import ListEmployee from './Employee/ListEmployee';
import EditEmployee from './Employee/EditEmployee';
import AddEmployee from './Employee/addEmployee';
import AttendancesAdd from './Attendances/AttendancesAdd'
import AttendancesEdit from './Attendances/AttendancesEdit'
import AttendancesHistory from './Attendances/AttendancesHistory';
import AttendancesUser from './Attendances/AttendancesHistoryUser';
import ForGotConfirm from './User/ForgotConfirm';
import Login from './User/Login';
import ForGotPassWord from './User/Forgot';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../context/UserContext'
import axios from "axios";

export default function RouterApp (){
    const [userData, setUserData]=useState({
        token: undefined,
        user: undefined
    })

    useEffect(()=>{
        const checkLoggedIn = async()=>{
            let token = localStorage.getItem("auth-token")
            if(token==null) {
                localStorage.setItem("auth-token","")
                token=""
            }
            let tokenRes = ""
            tokenRes = await axios.post('http://localhost:5000/users/tokenisvalid', null, {headers:{"x-auth-token":token}})
            if(tokenRes.data){
                const userRes = await axios.get('http://localhost:5000/users/', {headers: { "x-auth-token": token }})
                setUserData({
                    token,
                    user: userRes.data
                })
            }
        }
        checkLoggedIn()
    },[])

    return(
        <div> 
            <BrowserRouter>
                <UserContext.Provider value={{userData, setUserData}}>
                    <Switch>
                        <Route path="/" exact component={ MainHome} />
                        <Route path="/employee" exact component={ ListEmployee} />
                        <Route path="/employee/edit/:id" exact component={EditEmployee} />
                        <Route path="/employee/add" exact component={AddEmployee} />
                        <Route path="/attendances/add" exact component={AttendancesAdd} />
                        <Route path="/attendances/edit" exact component={AttendancesEdit} />
                        <Route path="/attendances/history" exact component={AttendancesHistory} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/forgot-password" exact component={ForGotPassWord} />
                        <Route path="/forgot-confirm" exact component={ForGotConfirm} />
                        <Route path="/attendances/user" exact component={AttendancesUser} />
                    </Switch>
                </UserContext.Provider>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss                    
                draggable
                pauseOnHover
            />
        </div>
    )
}