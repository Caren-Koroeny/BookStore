import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import NavigationMenu from './components/NavBar';
import Categories from './components/Categories';

const App = () => (
  <section className="mainContainer">
    <NavigationMenu />
    <Routes>
      <Route path="/" exact element={<BookList />} />
      <Route path="/category" exact element={<Categories />} />
    </Routes>
  </section>
);

export default App;
