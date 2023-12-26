 
const url = 'https://custom2.mystagingserver.site/food-stadium' 
 
 

export const Get_all_product = async() => {
  
  try {
    const res = await fetch(`${url}/public/api/all_product`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
  
}
 
export const filterProducts = async (selectedCatigoryId ) => {
 
  try {
 

    const response = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/filter_product?category_id=${selectedCatigoryId}`, {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT, DELETE'
   }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
 
    return data;
  } catch (error) {
      throw error;  
  }
};

// filterDietary
export const filterMenu = async (selectedMenuId ) => {
 
  try {
 

    const response = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/filter_product?menu_id=${selectedMenuId}`, {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT, DELETE'
   }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
 
    return data;
  } catch (error) {
    console.error('Error in filtering products =>', error);
    throw error;  
  }
};








export const filterPrice = async (minPrice , maxPrice) => {
 console.log("minPrice", minPrice)
//  console.log("maxPrice", maxPrice)
  try {
 

    const response = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/filter_product?min_price=${minPrice}&max_price=${maxPrice}`, {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT, DELETE'
   }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
console.log("datafil" , data?.data)
    return data;
  } catch (error) {
    console.error('Error in filtering products =>', error);
    throw error;  
  }
};







export const filterDietary = async (dietary) => {
 
  try {
 

    const response = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/filter_product?dietary_id=${dietary}`, {
      method: 'GET',
      
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Headers':'*',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT, DELETE'
   }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
console.log("datafil" , data?.data)
    return data;
  } catch (error) {
    console.error('Error in filtering products =>', error);
    throw error;  
  }
};





 

export const Get_all_product_detail = async (productId) => {
  console.log(productId)
  try {
    const res = await fetch(`${url}/public/api/product_detail/${productId}`, {
      method: 'GET',
    });
    const data = await res.json();
 
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
}


 
export const Popular_product = async () => {
  try {
    const res = await fetch(`${url}/public/api/popular_product`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
} 
 

 

 
 
export const Menu_listing =async () => {
  try {
    const res = await fetch(`${url}/public/api/menu_listing`, {
      method: 'GET',
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
}

 
export const Get_all_catigories = async () => {
  try {
    const res = await fetch(`${url}/public/api/category_listing`, {
      method: "GET",
      
  });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
}


 
 

export const Dietary_listing = async () => {
  try {
    const res = await fetch(`${url}/public/api/dietary_listing`, {
      method: "GET",
      
  });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
}



 
 

export const Trending_product = async () => {
  try {
    const res = await fetch(`${url}/public/api/trending_product`, {
      method: "GET",
      
  });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
}





 





export const Order_Placed = async (formData) => {
  console.log("formData"  , formData)
  try {
    const res = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/order_placed', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
console.log("res" , res)
    const data = await res.json();
    console.log("success", data.status);
    return data;
  } catch (error) {
      console.log('Error in Add New Category (service) =>', error);
  }
}
 


 