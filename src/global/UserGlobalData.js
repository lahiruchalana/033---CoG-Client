import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({ 
    username: null, 
    password: null, 
    grant_type: "password", 
    user: null, 
    access_token: null, 
    authorize: null, 
    refresh_token: null,
    authList: [],
    categoryList: [],
    itemId: null,
    userId: null
});

export { useGlobalState }
