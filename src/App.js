import React from 'react';
import Header from './component/header/Header';
import Footer from './component/Footer/Footer';
import Layout from './component/layout/Layout';
import Quotes from './component/layout/Quotes';
import Last from './component/layout/Last';
import Sign from './component/layout/Sign';

function App() {
  return (
    <div>
      <Header />
      <Layout />
      <Quotes />
      <Last />
      <Sign />
      <Footer /> 
    </div>
  );
}

export default App;
