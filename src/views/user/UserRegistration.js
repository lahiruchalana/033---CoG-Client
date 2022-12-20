import React, { useEffect } from "react";
import axios from "axios";
import GetEncodedClientSecretAndId from "../../functions/ClientSecretAndId";

import Registration from "../../components/registration/Registration";
import { useGlobalState } from '../../global/UserGlobalData'
import { PostUserRegistration } from '../../requests/PostRequests'


function UserRegistration() {
    const [user, setUser] = useGlobalState('user');
    const userRegistrationURL = PostUserRegistration();
    const encodedSecretAndId = GetEncodedClientSecretAndId();

    useEffect(() => {   // register user, make sure to add unique username and email         
        axios.post(userRegistrationURL, user, {
            headers: {
                'Authorization': `Basic ${encodedSecretAndId}` 
            }
        }).then((response) => {
            console.log(response.status)
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

    }, [user])

    return(
        <div>
            <Registration />
        </div>
    )
}

export default UserRegistration;