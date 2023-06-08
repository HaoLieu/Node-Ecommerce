import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreeen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">My shop</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={< ProductScreen />} />
            <Route path="/" element={<HomeScreeen/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
