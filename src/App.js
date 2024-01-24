
import './App.css';
import Hudini from './components/Hudini';
import Landing from './components/Landing';
import Home from './components/Home';
import { useState } from 'react';

function App() {

  const data = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  }

  const [showpage, setpage] = useState(true)
  const nextPage = function () {
    setpage(!showpage)
  }

  return (
    // eX-1
    /*<Hudini />*/

    /* EX 2-3-4 */
    <div className="App">


      <button onClick={nextPage}>Next Page</button><br></br>
      {showpage ? <Landing data={data} /> : <Home store={data.store} shouldDiscount={data.shouldDiscount} />}


    </div>
  );
}

export default App;
