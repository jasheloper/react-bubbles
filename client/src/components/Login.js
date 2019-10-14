import React from "react";


class Login extends React.Component {

  state = {
    credentials: {
      username: "",
      password: ""
    }
  }


  render() {
    return (
<>
      <h1>Welcome to the Bubble App!</h1>
      
      
      <form>
        <input type="text" name="username" placeholder="username" />
        <input type="password" name="password"placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </>
    )
  }
}



export default Login;
