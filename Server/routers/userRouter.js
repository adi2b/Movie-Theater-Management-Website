const express = require('express');
const userBL = require('../models/userBL');

const router = express.Router();

router.get('/',async function(req,resp)
{
  let users = await userBL.getUsers();
  return resp.json(users);
})

router.get('/:id',async function(req,resp)
{
  let id = req.params.id;
  let user = await userBL.getUser(id);
  return resp.json(user);
})

router.post('/',async function(req,resp)
{
  let obj = req.body;
  let data = await userBL.addUser(obj);
  return resp.json(data);
})

router.put('/:id',async function(req,resp)
{
  let obj = req.body;
  let id = req.params.id;
  let status = await userBL.updateUser(id,obj);
  return resp.json(status);
})

router.delete('/:id',async function(req,resp)
{

  let id = req.params.id;
  let status = await userBL.deleteUser(id);
  return resp.json(status);
})

module.exports = router;
