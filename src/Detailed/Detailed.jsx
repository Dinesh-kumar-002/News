import React, { useEffect, useState } from "react";
import "./Detailed.css";
import Header from "../Header/Header";
import { useParams, Link } from "react-router-dom";
import noImage from '../assets/no-image.png';

function Detailed({ news }) {
  const [newsItem, setNewsItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const data = news.find(item => item.id === parseInt(id));
    setNewsItem(data);
  }, [id, news]);

  if (!newsItem) {
    return (
      null
    );
  }

  // const publishedAt = new Date(newsItem.publishedAt).toLocaleDateString();

  return (
    <>
      
      <section>
        <div className="container my-5">
          <div className="heading mb-3">
            <div className="d-flex justify-content-between">
              <div className="title">
                <h1>{newsItem.title}</h1>
                <ul className="breadcrums">
                  <li>{newsItem.publishedAt}</li>
                  <li><a className="text-decoration-none" href={newsItem.source.url}>{newsItem.source.name}</a></li>
                </ul>
                <a href={newsItem.url} className="text-decoration-none text-success d-block my-1">Reference</a>
              </div>
              <div className="share-buttons">
                <button className="p-1 bg-success text-white ms-1">
                  <i className="fab fa-whatsapp"></i>
                </button>
                <button className="p-1 bg-primary text-white ms-1">
                  <i className="fab fa-facebook"></i>
                </button>
                <button className="p-1 bg-dark text-white ms-1">
                  <i className="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          </div>
          <a href={newsItem.image ? newsItem.image : noImage}>
            <img src={newsItem.image ? newsItem.image : noImage} className="img-fluid w-100" alt='news-image' />
          </a>
          <div className="new-content mt-4">
            <p>{newsItem.content}</p>
          </div>
          <Link to="/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', textDecoration: 'none' }}>
            <i className="fas fa-arrow-circle-left fs-3 me-2"></i> Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default Detailed;
