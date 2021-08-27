import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Movie = ({ movie }) => {
    return (
        <div>
<Link to={`/movie/${movie.ID}`}>
        <Card style={{ width: '18rem' }}>
  <Card.Img alt={movie.name} variant="top" src={movie.posterurl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>{movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 
</Link>   
        </div>
    )
}
