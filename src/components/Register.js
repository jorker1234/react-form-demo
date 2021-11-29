import React from "react";

class Register extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    sex: "",
    username: "",
    password: "",
    email: "",
    address: "",
    country: "",
    city: "",
    zipcode: "",
    interests: [],
  };

  onFirstnameChange = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };

  onLastnameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  onSexChange = (e) => {
    this.setState({
      sex: e.target.value,
    });
  };

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  onAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  onCountryChange = (e) => {
    this.setState({
      country: e.target.value,
    });
  };
  onCityChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  onZipcodeChange = (e) => {
    this.setState({
      zipcode: e.target.value,
    });
  };

  onInterestChange = (e) => {
    const value = e.target.value;
    let interests = this.state.interests;
    if(e.target.checked) {
      interests.push(e.target.value);
    }else {
      interests = interests.filter(interest => interest !== value);
    }
    this.setState({
      interests // interests: interests
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render = () => {
    return (
      <div className="container">
        <h3 className="mb-3">Register</h3>
        <form onSubmit={this.onSubmit}>
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={this.state.firstname}
                onChange={this.onFirstnameChange}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={this.state.lastname}
                onChange={this.onLastnameChange}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Sex</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="male"
                    value="male"
                    onChange={this.onSexChange} 
                    checked={this.state.sex === 'male'}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sex"
                    id="female"
                    value="female"
                    onChange={this.onSexChange}
                    checked={this.state.sex === 'female'}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  onChange={this.onUsernameChange}
                  value={this.state.username}
                />
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={this.onPasswordChange}
                value={this.state.password}
              />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Emai
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                onChange={this.onEmailChange}
                value={this.state.email}
              />
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                rows="5"
                onChange={this.onAddressChange}
                value={this.state.address}
              ></textarea>
            </div>
            <div className="col-md-5">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select
                className="form-select"
                id="country"
                onChange={this.onCountryChange} 
                value={this.state.country}
              >
                <option value="thai">Thailand</option>
                <option value="usa">United States</option>
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select
                className="form-select"
                id="city"
                onChange={this.onCityChange}
                value={this.state.city}
              >
                <option value="bkk">Bangkok</option>
                <option value="nst">Nakorn Sri</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="zipcode" className="form-label">
                Zipcode
              </label>
              <input
                type="text"
                className="form-control"
                id="zipcode"
                maxLength="5"
                onChange={this.onZipcodeChange}
                value={this.state.zipcode}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Interesting</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="gaming"
                  id="gaming"
                  onChange={this.onInterestChange}
                  checked={this.state.interests.indexOf('gaming') > -1 }
                />
                <label className="form-check-label" htmlFor="gaming">
                  Gaming
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="traveling"
                  id="traveling"
                  onChange={this.onInterestChange}
                  checked={this.state.interests.indexOf('traveling') > -1 }
                />
                <label className="form-check-label" htmlFor="traveling">
                  Traveling
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="programing"
                  id="programing"
                  onChange={this.onInterestChange}
                  checked={this.state.interests.indexOf('programing') > -1 }
                />
                <label className="form-check-label" htmlFor="gaming">
                  programing
                </label>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div>{JSON.stringify(this.state)}</div>
      </div>
    );
  };
}

export default Register;
