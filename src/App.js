import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import BookList from './components/BookList';
import NavigationMenu from './components/NavBar';
import Categories from './components/Categories';

const App = () => (
  <section className="mainContainer">
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/category" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </section>
);

export default App;
