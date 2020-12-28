import React from 'react';
import { useHistory } from "react-router-dom";
export default function(props){
    let user = localStorage.getItem('USER');
    let history = useHistory();
    if(!user){
        history.replace("/login");
        return null
    }
    return(
        <div>
             {props.children}
        </div>
    )
}