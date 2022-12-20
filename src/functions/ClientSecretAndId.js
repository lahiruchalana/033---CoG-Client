import {decode as base64_decode, encode as base64_encode, encode} from 'base-64';

function GetEncodedClientSecretAndId() {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const encodableSecretAndId = `${clientId}:${clientSecret}`;
    const encodedSecretAndId = base64_encode(encodableSecretAndId);

    return encodedSecretAndId;
}

export default GetEncodedClientSecretAndId;