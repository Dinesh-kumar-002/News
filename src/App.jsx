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

  const fetchNews = async (val) => {
    let result;
  
      try {

        if(val){
       result = await axios.get(`https://gnews.io/api/v4/search?q=${val}&lang=ta&country=in&apikey=868207df6f77c941aa8bd9b68f0f5d66`);
       
        }
        else{
          result = await axios.get('https://gnews.io/api/v4/top-headlines?category=general&lang=ta&country=in&max=25&apikey=868207df6f77c941aa8bd9b68f0f5d66');
        
        }

        if(result.length==0){
          setStatus("empty");
        }
        else if (result.data.articles) {
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
        <Header fetchNews={fetchNews}/>
        <div className='container-fluid py-4 main-container'>
          <div className="status">
            {status === 'fetching' && <Loader />}
            {status === 'empty' &&  <div><h1 className='text-center' style={{ fontSize: '35px' }}>No result found</h1></div>}
            {status === 'failed' && (<div><h1 className='text-center' style={{ fontSize: '35px' }}>😪</h1>{error}</div>)}
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
