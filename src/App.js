import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Nav from './routes/navigation/Nav';
import SignIn from './routes/sign-in/Sign-in';

const Shop = () => {
  return (
    <div>
      <h1>This page Shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="/Sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
