class Authentication {
  registerSuccessFullogin = (username, password) => {
    console.log("Login Successful");
    sessionStorage.setItem("authenticatedUser", username);
  };

  logout = () => {
    sessionStorage.removeItem("authenticatedUser");
  };

  isUserLoggedIn = () => {
    let user = sessionStorage.getItem("authenticatedUser");
    if (user === null) return false;
    else return true;
  };
}

export default new Authentication();
