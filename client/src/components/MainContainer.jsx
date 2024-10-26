import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
  const movie = useSelector((store)=> store.movies?.nowPlayingMovies);
  if(!movie) return;
  console.log(movie)

  const {overview, id, title} = movie[3];
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id}  />
    </div>
  )
}

export default MainContainer