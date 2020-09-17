import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        autoplay: true,
        speed: 4000,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

     const bannerSlide = () => {

        fetch(`https://api.themoviedb.org/3/trending/all/day??api_key=${this.apiKey}&language=pt-BR`)
        .then(data => data.json())
        .then(data => {
          this.setState({ moviesBanner: data.results})
          console.log(data);
        })
      }
    
    return (
        <div className="container" style={{ marginBottom: "40px" }} >
            <Slider {...settings}>
                {console.log(1)}
                <div>
                    <h3>1</h3>
                </div>

                <div>
                    <h3>2</h3>        
                </div>

                <div>
                    <h3>3</h3>
                </div>

                <div>
                    <h3>4</h3>
                </div>

                <div>
                    <h3>5</h3>
                </div>

                <div>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default Banner;