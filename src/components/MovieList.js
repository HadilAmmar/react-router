import React from 'react'
import { Movie } from './Movie'

export const MovieList = ({ movies }) => {
    return (
        <div className="movie_list">
            {movies.map((el)=>(
            <Movie movie={el} />))}
        </div>
    )
}
