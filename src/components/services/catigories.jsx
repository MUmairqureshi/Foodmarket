 
const url = 'https://custom2.mystagingserver.site/food-stadium'
// https://custom2.mystagingserver.site/food-stadiumpublic/api/all_product

export const Get_all_product = async() => {
  
  try {
    const res = await fetch(`${url}/public/api/all_product`, {
      method: 'GET',
    });
    const productData = await res.json();
    const data = productData
    return data;
  } catch (error) {
    console.log('Error in getting all products (service) =>', error)
  }
}

 
 


export const Get_all_product_detail = async (productId) => {
  console.log(productId)
  try {
    const res = await fetch(`${url}/public/api/product_detail/${productId}`, {
      method: 'GET',
    });
    const data = await res.json();
    console.log(data)
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
// const [data, setData] = useState([]);
// const [filteredData, setFilteredData] = useState([]);
// const [categoryID, setCategoryID] = useState(1); // Set initial category ID
// const [menuID, setMenuID] = useState(3); // Set initial menu ID
// const [dietaryID, setDietaryID] = useState(1); // Set initial dietary ID

// useEffect(() => {
//   // Make initial API call or fetch data
//   // For example:
//   // fetch(`${apiUrl}/public/api/filter_product/?category_id=${categoryID}&menu_id=${menuID}&dietary_id=${dietaryID}`)
//   //   .then(response => response.json())
//   //   .then(data => setData(data));
// }, [categoryID, menuID, dietaryID]);

// const handleFilterChange = ({ minPrice, maxPrice }) => {
//   // Filter data based on min and max price values
//   fetch(`${apiUrl}/public/api/filter_product/?category_id=${categoryID}&menu_id=${menuID}&dietary_id=${dietaryID}&min_price=${minPrice}&max_price=${maxPrice}`)
//     .then(response => response.json())
//     .then(filteredData => setFilteredData(filteredData));
// };

 
export const Filter_product = async() => {
  try {
    // fetch(`${url}/public/api/filter_product/?category_id=${categoryID}&menu_id=${menuID}&dietary_id=${dietaryID}&min_price=${minPrice}&max_price=${maxPrice}`)
    const res = await fetch(`${url}/public/api/filter_product/?category_id=1&menu_id=3&dietary_id=1&min_price=20&max_price=40`, {
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

