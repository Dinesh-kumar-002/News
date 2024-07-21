import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import noImage from '../assets/no-image.png'; 


const Card = ({ news }) => {
  

  return (
    <div className="row">

      
      {news && news.map((item, index) => 
        (
        <div className="col-12 col-md-6 col-lg-4" key={index} >
              <div  className="card mb-3" style={{background: '#d2d2bf',border: '0'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                <Link className='text-decoration-none' to={`/detailed/${item.id}`}> 
                    <img src={item.image?item.image:noImage} className="full-image" alt="..." />
                </Link>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                    <Link className='text-decoration-none' to={`/detailed/${item.id}`}> 
                      <h3 className="card-title text-decoration-none">{item.title}</h3>
                    </Link> 
                      <p className="card-text text-decoration-none">{item.description}</p>
                      <div className="d-flex justify-content-between">
                        <p className="card-publisher"><small className="text-body-light text-decoration-none">{item.publishedAt}</small><small className='text-success'> / <a href={item.source.url} >{item.source.name}</a></small></p>
                        <span className='anchor text-decoration-underline text-underline-offset-1'>Read more <i class="fa-solid fa-arrow-right"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
            </div> 
            </div>
              
            ))}
            </div>
   
    
  );
};

export default Card;
