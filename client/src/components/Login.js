import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

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

        <form>
          <input 
          type="text" 
          name="username" 
          placeholder="type user" 
          />


          <input 
          type="password" 
          name="password" 
          placeholder="type password" 
          />


          <button 
          type="submit">
            Login
            </button>


        </form>
      </>
    );
  }
}

export default Login;
