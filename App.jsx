import React from 'react';
import Header from './Components/Header';
import MenuItems from './MenuItems';
import Toprest from './Toprest';
import OnlineDelivery from './OnlineDelivery';

const App = () => {
  return (
    <div >
      <Header/>
      <MenuItems/>
      <Toprest/>
      <OnlineDelivery/>
    </div>
  );
}

export default App;
