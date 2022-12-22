import { useGlobalState } from '../global/UserGlobalData'

let catalogServiceUrl = process.env.REACT_APP_CATALOG_SERVICE_API_URL;
let cartServiceUrl = process.env.REACT_APP_CART_SERVICE_API_URL;

function GetCategories() {
    const getCategoryURL = "http://localhost:9095/api/v5/category/all/children"; // set this to a env variable

    return getCategoryURL
}

function GetItems() {
    const getCategoryURL = catalogServiceUrl + "item/all";

    return getCategoryURL
}

function GetItemById() {
    const [itemId, setItemId] = useGlobalState('itemId');

    const getItemURL = catalogServiceUrl + `item/items/${itemId}`;

    return getItemURL
}

function GetCartByUserId() {
    const [userId, setUserId] = useGlobalState('userId');

    const getCartByUserIdUrl = `http://localhost:2000/api/v5/cart/getByUserId/${userId}`;

    return getCartByUserIdUrl
}

export { GetCategories, GetItems, GetItemById, GetCartByUserId };