import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
import { Navbar, Container, Nav } from 'react-bootstrap';

class App extends React.Component { 
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const {isLoading, movies} = this.state;
    return (<section className="container">
      <div className="header">
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="#home">React & Bootstrap tutorial</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="container__main">
      {isLoading ? 
      (<div className="loader">
        <span className="loader__text">Loading...</span>
      </div>) : 
      (<div className="movies">
        {movies.map(movie =>         
          <Movie
          key={movie.id}
          id={movie.id} 
          year={movie.year} 
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />      
        )}
      </div>
      )}
      </div>
    </section>
    );
  }
};

export default App;
