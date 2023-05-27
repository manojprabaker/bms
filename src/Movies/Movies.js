import React, { Component } from "react";
import Slider from "react-slick";
import "./Movies.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MoviesList from "./MoviesList.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="recom-movies">
        <Container sx={{ maxWidth: "95%" }} maxWidth={false}>
          <h2 className="title"> Recommended Movies </h2>
          <Slider {...settings}>
            {MoviesList.map((ml) => {
              return (
                <Grid className="box">
                  <div className="img-box">
                    <img src={ml.src} alt="movies" />
                  </div>
                  <div className="rating">
                    {ml.star}
                    <span>{ml.ratings}</span> <span> {ml.votes}</span>
                  </div>
                  <div className="name-genre">
                    <h3 className="name">{ml.name}</h3>
                    <p className="genre">{ml.genre}</p>
                  </div>
                </Grid>
              );
            })}
          </Slider>
          {/* -----------slider-end---------------- */}
          <div className="stream-movie">
            <img
              src={
                "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
              }
            />
          </div>
        </Container>
      </div>
    );
  }
}
