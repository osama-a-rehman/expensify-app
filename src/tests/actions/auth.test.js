import { login, logout } from "../../actions/auth";

test("set login action object", () => {
  const uid = "1234";
  const action = login(uid);

  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("set logout action object", () => {
  const action = logout();

  expect(action).toEqual({
    type: "LOGOUT"
  });
});
