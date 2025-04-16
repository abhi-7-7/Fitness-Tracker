import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(path === '/' ? 'home' : path.slice(1));
  }, []);

// First, it checks if the current path is the root path ('/') using path === '/'
// Then it uses a ternary operator (? :) to:
// If the path is '/', set currentPage to 'home'
// If the path is not '/', it takes the path and removes the first character (the '/') using path.slice(1)

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'blog':
        return <Blog />;
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}
export default App;
