import React from 'react'
import { MovieList } from './MovieList'

export const Home = ({movies}) => {
    return (
        <div>
            <h1>This is Home page</h1>
            <MovieList movies={movies} />
        </div>
    )
}
