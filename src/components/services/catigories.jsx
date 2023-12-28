 
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
export const login = async (formData) => {
  try {
    const res = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/user-login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the request was successful (status code in the range of 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Parse the JSON response
    const data = await res.json();

    // Check the status property in the response data
    if (data.status === 'success') {
      console.log("Login successful");
    } else {
      console.log("Login failed. Server message:", data.message);
    }

    return data;
  } catch (error) {
    console.error('Error in login:', error.message);
    return { status: 'error', message: 'An error occurred during login.' };
  }
}
export const signup = async (formData) => {
  try {
    const res = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/user-register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Check if the request was successful (status code in the range of 200-299)
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Parse the JSON response
    const data = await res.json();

    // Check the status property in the response data
    if (data.status === 'success') {
      console.log("Login successful");
    } else {
      console.log("Login failed. Server message:", data.message);
    }

    return data;
  } catch (error) {
    console.error('Error in login:', error.message);
    return { status: 'error', message: 'An error occurred during login.' };
  }
}

 
// https://custom2.mystagingserver.site/food-stadium/public/api/user-register



export const Contactus = async (formData) => {
  console.log("Contactus"  , formData)
  try {
    const res = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/contact_query', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
console.log("res" , res)
    const data = await res.json();
    console.log("Contactussuccess", data.status);
    return data;
  } catch (error) {
      console.log('Error in Add New Category (service) =>', error);
  }
}
 
// https://custom2.mystagingserver.site/food-stadium/public/api/product_by_store/12




export const Wenderdata = async (wenderId) => {
  console.log(productId)
  try {
    const res = await fetch(`${url}public/api/product_by_store/${wenderId}`, {
      method: 'GET',
    });
    const data = await res.json();
 
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
}

