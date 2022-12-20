import { useGlobalState } from '../global/UserGlobalData'

function PostUserLoginData() { // user login request, receive tokens and authorizations 
    const [username, setUsername] = useGlobalState('username');
    const [password, setPassword] = useGlobalState('password');
    const [grantType, setGrantType] = useGlobalState('grant_type');

    const userLoginURL = `http://localhost:2002/api/v5/token?grant_type=${grantType}&username=${username}&password=${password}`

    return userLoginURL;
}

function PostUserRegistration() {
    const userRegistrationURL = "http://localhost:2002/api/v5/oauth/user/customer/registration";

    return userRegistrationURL;
}

export { PostUserLoginData, PostUserRegistration };