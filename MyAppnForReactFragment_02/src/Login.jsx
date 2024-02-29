import React from "react";
function Login()
{
    return(
        <React.Fragment>
        <h1>WELCOME TO LOGIN PAGE </h1>
        UserName : <input type="text" name="uname" ></input><p></p>
        Password : <input type="password" name="password"></input><p></p>
        <input type="submit" value="Login"></input>
        </React.Fragment>
    )

}
export default Login;