import './App.css';
import { Route, Routes } from "react-router-dom";
import $ from 'jquery';
import Home from './pages/home/Home';
import Work from './pages/work/Space';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homeData: {}
    };
  }

  getHomeData() {
    $.ajax({
      url: "/js/HomeData.json", 
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ homeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getHomeData();
  }

 render() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home data={this.state.homeData} />} />
        <Route path="/work" element={<Work />} />
     </Routes>
    </div>
  );
 }
}

export default App;
