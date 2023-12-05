import axios from "axios";
axios.defaults.baseURL = "https://custom2.mystagingserver.site/food-stadiumpublic";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};

export default http;
const GetAllProducts = async () => {
  const result = await http.get(` /api/all_product`);
  return result.data;
};
export { GetAllProducts };