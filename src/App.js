import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon } from 'antd';

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
    value_1: 0,
    value_2: 0,
    value_3: 0,
    value_4: 0,
    value_5: 0,
    value_6: 0,
    value_7: 0,
    value_8: 0,
    value_9: 0,
    value_10: 0,
  };

  handleInputBrand = (brand_id, event) => {
    this.setState({
      [brand_id]: event.target.value
    });
  }
  handleInputBrandValue = (value_id, event) => {
    this.setState({
      [value_id]: +1
    });
  }
  addOne = (value_id, event) => {
    this.setState(prevState => {
      return {[value_id]: prevState[value_id] + 1 }
   });
  }

  removeOne = (value_id, event) => {
    this.setState(prevState => {
      return {[value_id]: prevState[value_id] - 1 }
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
          <p>hello</p>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
        </header>
        <div className="container">
          <form>
            <br />
            <div className="row">
            <button className="button" onClick={this.saveFile}>Sauvegarde</button>
            </div>          
            <br />
            <div className="row">
              <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_1", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_1", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_1}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_1", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_2", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_2", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_2}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_2", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_3", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_3", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_3}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_3", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_4", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_4", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_4}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_4", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_5", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_5", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_5}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_5", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_6", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_6", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_6}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_6", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_7", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_7", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_7}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_7", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_8", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_8", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_8}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_8", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_9", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_9", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_9}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_9", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
            <div className="row">
            <input className="col-6" type="text" onChange={(e) => this.handleInputBrand("brand_10", e)} />
              <Button className="col-2" type="dashed" onClick={(e) => this.removeOne("value_10", e)}>
                    <Icon type="minus" />
              </Button>
              <p className="col-2" type="dashed">{this.state.value_10}</p>
              <Button className="col-2" type="dashed" onClick={(e) => this.addOne("value_10", e)}>
                    <Icon type="plus" />
              </Button>
            </div>
            <br />
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
