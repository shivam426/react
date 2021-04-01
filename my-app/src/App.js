
import React, { Component } from 'react';
import './App.css';
import user from './user.png'
import facebook from './facebook.png'
class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
let url="https://www.facebook.com/";
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1>LOGIN FOR COMPATIBLE-TST</h1><br/>
          <img className="avatar" src={user}/><br/>
          <label>Email-address :- </label>
          <input type="email" className="input-box" data-test="eamil" placeholder="shivam123@gmail.com" value={this.state.username} onChange={this.handleUserChange} /><br/>

          <label>Password :- </label>
          <input type="password" className="input-box" data-test="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange} /><br/>

          <input type="submit" className="sub-btn" value="register" data-test="submit" />

          <h3>login with facebook</h3><br/>

          <a href={url}><img className="App-logo" src={facebook}/></a>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
        </form>
      </div>
    );
  }
}

export default App;
