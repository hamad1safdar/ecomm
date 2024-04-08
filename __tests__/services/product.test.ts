import axios from "axios";

import { getAll, getById, remove } from "../../src/services/product";
import { SERVER_URL } from "../../src/CONSTANTS";

jest.mock("axios");

describe("product.service.ts", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  //getAll
  test("getAll()", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
      () => Promise.resolve({})
    );
    await getAll();
    expect(axios.get).toHaveBeenCalledWith(`${SERVER_URL}/products`);
  });

  //getById
  test("getById(10)", async () => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockImplementation(
      () => Promise.resolve({})
    );
    await getById(10);
    expect(axios.get).toHaveBeenCalledWith(`${SERVER_URL}/products/10`);
  });

  //remove
  test("remove(10)", async () => {
    (axios.delete as jest.MockedFunction<typeof axios.get>).mockImplementation(
      () => Promise.resolve({})
    );
    await remove(10);
    expect(axios.get).toHaveBeenCalledWith(`${SERVER_URL}/products/10`);
  });
});
