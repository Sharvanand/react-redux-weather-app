import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";
class SearchBar extends Component {
  onSubmitHandler = e => {
    e.preventDefault();
    let cityName = this.searchInput.value;
    if (cityName === "") {
      return <div>Please enter the city name</div>;
    }
    this.props.fetchWeather(cityName);
    this.searchInput.value = "";
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.onSubmitHandler}>
            <div className="input-field">
              <input
                type="text"
                id="searchbar"
                ref={searchInput => {
                  this.searchInput = searchInput;
                }}
              />
              <label htmlFor="searchbar">
                Search City For Weather Information
              </label>
            </div>
            <div className="input-field ">
              <button className="btn ">Search City</button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card teal lighten-2">
              <div className="card-content">
                <span>Temperature</span>
                <h5>{this.props.list.temp}&#x2103;</h5>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card teal lighten-2">
              <div className="card-content">
                <span>Feels Like</span>
                <h5>{this.props.list.feels_like}&#x2103;</h5>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card teal lighten-2">
              <div className="card-content">
                <span>Temp Min</span>
                <h5>{this.props.list.temp_min}&#x2103;</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card teal lighten-2">
              <div className="card-content">
                <span>Temp Max</span>
                <h5>{this.props.list.temp_max}&#x2103;</h5>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card teal lighten-2">
              <div className="card-content">
                <span>Pressure</span>
                <h5>{this.props.list.pressure} h Pa</h5>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card teal lighten-2">
              <div className="card-content">
                <span>Humidity</span>
                <h5>{this.props.list.humidity}&#x25;</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.weatherList
  };
};

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
