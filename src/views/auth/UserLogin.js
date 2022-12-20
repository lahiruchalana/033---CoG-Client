import React, { useState, useEffect } from "react";
import GetEncodedClientSecretAndId from "../../functions/ClientSecretAndId";
import { PostUserLoginData } from "../../requests/PostRequests";

import Login from "../../components/login/Login";
import axios from 'axios';
import GetAuthorization from "../../functions/SetAuthorization";
import Roles from "../../enums/Enums";
import { useGlobalState } from '../../global/UserGlobalData'
import { useNavigate } from "react-router-dom";


function UserLogin() {
    const [response, setResponse] = useState(null);
    const [username, setUsername] = useGlobalState('username');
    const [password, setPassword] = useGlobalState('password');
    const [authList, setAuthList] = useGlobalState('authList');
    const navigate = useNavigate();
    const userLoginURL = PostUserLoginData();
    const encodedSecretAndId = GetEncodedClientSecretAndId();
    const authorization = GetAuthorization();
    var authArray = [];
    if (authorization != null) {
        authArray = authorization.split(', '); // when a user has a one role, we can't use ', ' anymore
    }

    console.log(authorization);

    console.log(authArray);
    
    useEffect(() => {
        authArray.forEach(target => {
            switch(target) {
            case Roles.Admin:   
                navigate("/admin_home");
            case Roles.Operator:
                navigate("/operator_home");
            case Roles.Editor:
                navigate("/editor_home");
            case Roles.User:
                navigate("/user_home");
            case Roles.Vendor:
                navigate("/vendor_home");
            case Roles.Che:
                navigate("/che_home");
            case Roles.Owner:
                navigate("/owner_home");
            default:
                navigate("/login")
            }
        })
    }, [authorization])

    useEffect(() => {   // user login,receive tokens and authorizations
        if (password != null && username != null) {
            axios.post(userLoginURL, {}, {
                headers: {
                    'Authorization': `Basic ${encodedSecretAndId}` 
                }
            }).then((response) => {
                setResponse(response.data);
                sessionStorage.setItem("authorize_key", response.data.authorize);
                console.log(response.data.authorize)
                sessionStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
                console.log(response);
            })
            .catch(function (error) {
                if (error.response) {
                  console.log(error.response.data);
                  console.log(error.response.status);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log(error.message);
                }
            })
        }

    }, [userLoginURL])


    
    return(
        <div>
            <Login />
        </div>
    )
}

export default UserLogin;