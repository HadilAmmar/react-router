import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'


export const MovieScreen = ({ movies }) => {
    const params=useParams();
    const movie=movies.find((el)=> el.id == params.id)
    return (
        <div >
            <Container >
                <Row>
                    <Col>
                <img src={movie.posterurl} alt="kgky"/>
                    </Col>
                    <Col>
                    <h1> {movie.name}  </h1>
                  <p> {movie.description} </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
