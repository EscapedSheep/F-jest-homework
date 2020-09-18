import axios from "axios";
import { register } from "../user";
import { verifyUsername, verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    axios.post.mockResolvedValue(Promise.resolve({ data: "Test" }));
    await expect(register("test", "test")).resolves.toEqual("Test");
    expect(axios.post).toHaveBeenCalled();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyPassword.mockReturnValueOnce(false);
    verifyUsername.mockReturnValueOnce(false);
    await expect(register("test", "test")).rejects.toThrowError();
  });
});
