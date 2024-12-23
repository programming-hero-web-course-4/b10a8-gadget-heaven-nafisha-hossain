const getStoreCartList = () =>{

    const StorageListStr = localStorage.getItem('cart-list')
    if(StorageListStr){
        const storeList = JSON.parse(StorageListStr);
        return storeList

    }
    else{
        return [];

    }


}
const getStoreWishList = () =>{

    const StorageListStr = localStorage.getItem('wish-list')
    if(StorageListStr){
        const storeList = JSON.parse(StorageListStr)
        return storeList

    }
    else{
        return [];

    }


}

const addToStoreCartList =(id)=>{

    const storeList = getStoreCartList()
    if(storeList.includes(id)){
        console.log(id,'already exixt in the cart list')
    }

    else{
        storeList.push(id)
        const storListedStr = JSON.stringify(storeList)
        localStorage.setItem('cart-list', storListedStr)
    }

}


const addToStoreWishList =(id)=>{

    const storeList = getStoreWishList()
    if(storeList.includes(id)){
        console.log(id,'already exist in the read list')
    }

    else{
        storeList.push(id)
        const storListedStr = JSON.stringify(storeList)
        localStorage.setItem('wish-list', storListedStr)
    }

}

export {getStoreCartList, addToStoreCartList, getStoreWishList, addToStoreWishList}



