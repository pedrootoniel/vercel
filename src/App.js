import React, { Fragment } from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Global from './global'


// import { Container } from './styles';

function src() {
  return (

    <Fragment>
      <Header />
      <Home />
      <Footer />
      <Global />
    </Fragment>

  )
}

export default src;