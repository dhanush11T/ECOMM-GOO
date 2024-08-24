// import updateAddToCartProduct from "../../../backend/controller/user/updateAddToCartProduct";

const backendDomain = "ecomm-goo.vercel.app";
const SummaryApi = {
    signup: {
        url: `${backendDomain}/api/signup`, // Use backticks for template literal
        method: "POST"
    },
    signin:{
        url: `${backendDomain}/api/Login`, // Use backticks for template literal
        method: "POST"
    },
    current_user:{
        url: `${backendDomain}/api/user-details`,
        method:"get",
        credentials: 'include'
       
    },logout_user:{
        url: `${backendDomain}/api/userLogout`,
        method:"get",
        
    }, allUser:{
        url: `${backendDomain}/api/all-user`,
        method:"get",

    },
    updateUser:{
        url: `${backendDomain}/api/update-user`,
        method:"post",
        credentials: 'include'
    },
    uploadProduct:{
        url: `${backendDomain}/api/upload-product`,
        method:"post",
       
    },
    allProduct:{
        url: `${backendDomain}/api/get-product`,
        method:"get",
    },
    updateProduct:{
        url: `${backendDomain}/api/update-product`,
        method:"post",
    },
    categoryProduct:{
        url: `${backendDomain}/api/get-categoryProduct`,
        method:"get",
    },
    categorywiseProduct:{
        url: `${backendDomain}/api/category-Product`,
        method:"post",
    },
    productDetails:{
        url: `${backendDomain}/api/product-details`,
        method:"post",
    },
    addToCartProduct:{
        url: `${backendDomain}/api/addtocart`,
        method:"post",
        // credentials: 'include'
    },
    addToCartProductCount:{
        url: `${backendDomain}/api/countAddToCart`,
        method:"get",
        // credentials: 'include'
    }
    ,
    addToCartProductView:{
        url: `${backendDomain}/api/view-cart-product`,
        method:"get",
        // credentials: 'include'
    },
    updateCartProduct:{
        url: `${backendDomain}/api/update-cart-product`,
        method:"post",
        // credentials: 'include'

    },
    
    deleteCartProduct:{
            url: `${backendDomain}/api/delete-cart-product`,
            method:"post",
            // credentials: 'include'
    
    },
    searchProduct:{
        url: `${backendDomain}/api/searchProduct`,
        method:"get",
    },
    filterProduct : {
        url : `${backendDomain}/api/filter-product`,
        method : 'post'
    }
};
export default SummaryApi;
