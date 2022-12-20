import { useGlobalState } from '../global/UserGlobalData'

const catalogServiceUrl = process.env.CATALOG_SERVICE_API_URL
const cartServiceUrl = process.env.CART_SERVICE_API_URL

function GetCategories() {
    const getCategoryURL = catalogServiceUrl + "category/all/children";

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

    const getCartUrl = cartServiceUrl + `cart/getByUserId/${userId}`;

    return getCartUrl
}

export { GetCategories, GetItems, GetItemById, GetCartByUserId };