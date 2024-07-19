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
          <Link className='text-decoration-none' to={`/detailed/${item.id}`}> 
              <div  className="card mb-3" style={{background:'#dcdcdc',background: '#d2d2bf',border: '0'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={item.image?item.image:noImage} className="full-image rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-decoration-none">{item.title}</h3>
                      <p className="card-text text-decoration-none">{item.description}</p>
                      <div className="d-flex justify-content-between">
                        <p className="card-publisher"><small className="text-body-secondary text-decoration-none">{item.publishedAt}</small></p>
                        <span className='anchor text-decoration-underline text-underline-offset-1'>Read more <i class="fa-solid fa-arrow-right"></i></span>
                      </div>
                    </div>
                  </div>
                </div>
            </div> 
            </Link>
            </div>
              
            ))}
            </div>
   
    
  );
};

export default Card;
