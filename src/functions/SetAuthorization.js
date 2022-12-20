import { useGlobalState } from '../global/UserGlobalData'
import {decode as base64_decode, encode as base64_encode, encode} from 'base-64';

function GetAuthorization() {
    const [authorize, setAuthorize] = useGlobalState('authorize');
    const authorizeKey = sessionStorage.getItem("authorize_key");
    console.log(authorizeKey)
    setAuthorize(base64_decode(authorizeKey));

    console.log(authorize)
    return authorize;
}

export default GetAuthorization;