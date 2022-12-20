import React from "react";
import Header from "../../components/header/Header";

function Cart() {

    // useEffect(() => {   
    //     axios.get(, {},).then((response) => {
    //         var categoryData = eval('(' + (response.data.data) + ')');
    //         setCategoryArray(categoryData);
    //         setCategoryList(categoryData);
    //         console.log("Response: ", categoryData);
    //     })
    //     .catch(function (error) {
    //         if (error.response) {
    //             console.log("error.response.data", error.response.data);
    //             console.log("error.response.status", error.response.status);
    //         } else if (error.request) {
    //             console.log("error.request", error.request);
    //         } else {
    //             console.log("error.message", error.message);
    //         }
    //     })

    // }, [getCategoryURL, categoryArray.length])

    return (
        <div>
            <Header/>
        </div>
    )

}

export default Cart;