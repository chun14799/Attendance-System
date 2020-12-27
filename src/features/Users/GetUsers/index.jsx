import React, { useEffect, useState} from 'react';
import UserList from './UserDetails/UserList';
import './style.scss';
import Header from '../../../components/Header';
import InfoBar from '../../../components/InfoBar';
import userApi from '../../../api/userApi';

function GetUser(props) {
    const [data, setData] = useState([]);

    useEffect(() =>{
        const fetchData = async ()=>{
            const result = await userApi.GetAll();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header/>
            <h2 className="status">User</h2>
            <InfoBar/>
            <UserList listUser={data}/>
        </div>
    );
}

export default GetUser;