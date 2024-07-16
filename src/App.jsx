import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card/Card';
import Header from './Header/Header';
import Loader from './Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detailed from './Detailed/Detailed';
import bg from './assets/news-bg.jpg';

function App() {
  const [news, setNews] = useState([]);
  const [status, setStatus] = useState('fetching');
  const [error, setError] = useState('');

  const fetchNews = async () => {
    try {
      const result = await axios.get('https://gnews.io/api/v4/top-headlines?category=general&apikey=5abf4e5d89fb6c7a0032546ed7a6419a');
      if (result.data.articles) {
        console.log(result.data.articles);
        const response = result.data.articles;
        response.forEach((element, index) => {
          element.id = index + 1;
        });
        setNews(response);
        setStatus('success');
      }
    } catch (error) {
      setError(error.response?.data?.errors[0] || 'An error occurred');
      setStatus('failed');
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Router>
      <>
        <Header />
        <div className='container-fluid py-4' style={{ background:'#e5ffbda1'}}>
          <div className="status">
            {status === 'fetching' && <Loader />}
            {status === 'failed' && (
              <div>
                <h1 className='text-center' style={{ fontSize: '35px' }}>😪</h1>
                {error}
              </div>
            )}
          </div>
          <Routes>
            <Route path="/" element={<Card news={news} />} />
            <Route path="/detailed/:id" element={<Detailed news={news} />} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
