const Movie = require('../models/movieModel');

const getMovies = () =>
{
  return Movie.find({})
}

const getMovie = (id) =>
{
  return Movie.findById(id)
}

const addMovie = async (newMovie) =>
{
  const movie = new Movie(newMovie);
  await movie.save();
  return movie._id
}

const updateMovie = async (id,movie) =>
{
  await Movie.findByIdAndUpdate(id, movie)

  return 'Updated succeeded'
}

const deleteMovie = async (id) =>
{
  await Movie.findByIdAndDelete(id)

  return 'Deleted succeeded'
}

module.exports = {getMovies, getMovie,addMovie,updateMovie,deleteMovie}