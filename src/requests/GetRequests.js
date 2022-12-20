import { useGlobalState } from '../global/UserGlobalData'

function GetCategories() {
    const getCategoryURL = "http://localhost:9095/api/v5/category/all/children";

    return getCategoryURL
}

function GetItems() {
    const getCategoryURL = "http://localhost:9095/api/v5/item/all";

    return getCategoryURL
}

function GetItemById() {
    const [itemId, setItemId] = useGlobalState('itemId');

    const getItemURL = `http://localhost:9095/api/v5/item/items/${itemId}`;

    return getItemURL
}

export { GetCategories, GetItems, GetItemById };