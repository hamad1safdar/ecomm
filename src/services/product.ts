import axios from "axios";

import { SERVER_URL } from "../CONSTANTS";

const requestURL = SERVER_URL + "/products";

export const getAll = async () => {
  return axios.get(requestURL);
};

export const getById = async (productId: string | number) => {
  if (productId === null || typeof productId === undefined) {
    throw new Error("Invalid product identifier");
  }
  return axios.get(requestURL + "/" + productId);
};

export const remove = async (productId: string | number) => {
  if (productId === null || typeof productId === undefined) {
    throw new Error("Invalid product identifier");
  }
  return axios.delete(requestURL + "/" + productId);
};

export default { getAll, getById, remove };
