import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { selectMovies, fetchMovies } from "../../redux/reducers/moviesReducer";

export default function Posts() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);

  // useEffect(() => {
  //   dispatch(fetchMovies());
  // }, [dispatch]);

  console.log("movies: ", movies);

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get("/get/movies");
  //     console.log(response.data);
  //     setData(response.data);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center">
        {movies
          ? movies.movies.map((post, index) => (
              <Grid key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {post.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
}
