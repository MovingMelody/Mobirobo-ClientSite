import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import MobileBrands from "./components/Brands/mobileBrands";
import WhyChooseUs from "./components/WhyChooseUs/whyChooseUs";
import GlobalStyle from "./styles/Global";
import Footer from "./components/Footer/footer";
import SwiperSlider from "./components/ImageSlider/swiperSlider";
import Issues from "./components/WhyChooseUs/issuesWeSolve";
import ProductsCategory from "./components/Products/productsCategories";
class App extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <div>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <SwiperSlider />
        <div className="site-wrapper">
          <Issues />
          <div style={{ margin: "30px" }}></div>
          <ProductsCategory />
          <WhyChooseUs />
          <div style={{ margin: "30px" }}></div>
          <MobileBrands />
          <div style={{ margin: "30px" }}></div>
        </div>
        <Footer />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
