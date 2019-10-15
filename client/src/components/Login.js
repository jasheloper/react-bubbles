import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import '../custom.css'

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
      <div className="login">
        <h1>Welcome to the Bubble App!</h1>

        <form onSubmit={this.login} className="form">
          <input
            type="text"
            name="username"
            placeholder="type user"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            className="input"
          />

          <input
            type="password"
            name="password"
            placeholder="type password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            className="input"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
