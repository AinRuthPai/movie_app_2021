import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Card, Row, Col} from 'react-bootstrap';

function Movie({year, title, summary, poster, genres}) { 
    return (
       <div className="movie">
            <div className="movie__data">
                <Row>
                    <Col>
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={poster} alt={title} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                            <h5 className="movie__year">{year}</h5>
                            <ul className="genres">{genres.map((genre, index) => 
                                <li key={index} className="genres__genre">{genre}</li> )}
                            </ul>
                            <p className="movie__summary">{summary}</p>
                            </Card.Text>                
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>    
            </div>
        </div>
    )}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;