const express = require('express');
const movieBL = require('../models/movieBL');

const router = express.Router();

router.get('/',async function(req,resp)
{
  let movies = await movieBL.getMovies();
  return resp.json(movies);
})

router.get('/:id',async function(req,resp)
{
  let id = req.params.id;
  let movie = await movieBL.getMovie(id);
  return resp.json(movie);
})

router.post('/',async function(req,resp)
{
  let obj = req.body;
  let data = await movieBL.addMovie(obj);
  return resp.json(data);
})

router.put('/:id',async function(req,resp)
{
  let obj = req.body;
  let id = req.params.id;
  let status = await movieBL.updateMovie(id,obj);
  return resp.json(status);
})

router.delete('/:id',async function(req,resp)
{

  let id = req.params.id;
  let status = await movieBL.deleteMovie(id);
  return resp.json(status);
})

module.exports = router;