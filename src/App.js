import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  state = {
    brand_1: '',
    brand_2: '',
    brand_3: '',
    brand_4: '',
    brand_5: '',
    brand_6: '',
    brand_7: '',
    brand_8: '',
    brand_9: '',
    brand_10: '',
    value_1: '',
    value_2: '',
    value_3: '',
    value_4: '',
    value_5: '',
    value_6: '',
    value_7: '',
    value_8: '',
    value_9: '',
    value_10: '',
  };

  handleInputBrand = (brand_id, event) => {
    this.setState({
      [brand_id]: event.target.value
    });
  }
  handleInputBrandValue = (value_id, event) => {
    this.setState({
      [value_id]: event.target.value
    });
  }
  saveFile = () => {
    // this.setState({ isSynchronizing: true });
    const data = 
    `${this.state.brand_1}: ${this.state.value_1}
    ${this.state.brand_2}: ${this.state.value_2}
    ${this.state.brand_3}: ${this.state.value_3}
    ${this.state.brand_4}: ${this.state.value_4}
    ${this.state.brand_5}: ${this.state.value_5}
    ${this.state.brand_6}: ${this.state.value_6}
    ${this.state.brand_7}: ${this.state.value_7}
    ${this.state.brand_8}: ${this.state.value_8}
    ${this.state.brand_9}: ${this.state.value_9}
    ${this.state.brand_10}: ${this.state.value_10}
    `;
    // Create blob from response data
    const blob = new Blob([data], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `data.txt`,
    );
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  render() {

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        </header>
          <div className="container">
            <form>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_1", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_1", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_2", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_2", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_3", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_3", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_4", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_4", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_5", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_5", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_6", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_6", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_7", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_7", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_8", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_8", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_9", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_9", e)} />
              </div>
              <br />
              <div className="row">
                <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_10", e)} />
                <div className="col-2" />
                <input className="col-4" type="number" step="1" onChange={(e) => this.handleInputBrandValue("value_10", e)} />
              </div>
              <br />
              <button className="button" onClick={this.saveFile}>Sauvegarder</button>
            </form>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
          </div>
      </div >

    );
  }
}

export default App;
