import { apiInstance } from "../../../utils/config";
const login = async (loginData) => {
  const response = await apiInstance.post("/Login", loginData);
  return response;
};
export default login;
