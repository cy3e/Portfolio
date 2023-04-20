import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carrousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/985659106796929095/1010674833576710144/unknown.png?width=720&height=283"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/985659106796929095/1010675128813764698/unknown.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.discordapp.net/attachments/985659106796929095/1010675218534117376/unknown.png?width=720&height=405"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p>
                
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

