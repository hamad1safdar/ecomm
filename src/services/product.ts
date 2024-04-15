import axios from "axios";

import { SERVER_URL } from "../CONSTANTS";

const requestURL = SERVER_URL + "/products";

export const getAll = async ({ page = 1, perPage = 10 }) => {
  return (await axios.get(requestURL + `?_page=${page}&_per_page=${perPage}`))
    .data;
};

export const getById = async (productId: string | number) => {
  if (productId === null || typeof productId === undefined) {
    throw new Error("Invalid product identifier");
  }
  return (await axios.get(requestURL + "/" + productId)).data;
};

export const remove = async (productId: string | number) => {
  if (productId === null || typeof productId === undefined) {
    throw new Error("Invalid product identifier");
  }
  return (await axios.delete(requestURL + "/" + productId)).data;
};

export default { getAll, getById, remove };
