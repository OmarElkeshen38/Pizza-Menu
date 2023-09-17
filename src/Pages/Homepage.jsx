import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Menu from '../Components/Menu';

function Homepage() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default Homepage
