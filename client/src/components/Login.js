import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/colors");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>

        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="type user"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="type password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default Login;
