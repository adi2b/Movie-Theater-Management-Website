const express = require('express');
const memberBL = require('../models/memberBL');

const router = express.Router();

router.get('/',async function(req,resp)
{
  let members = await memberBL.getMembers();
  return resp.json(members);
})

router.get('/:id',async function(req,resp)
{
  let id = req.params.id;
  let member = await memberBL.getMember(id);
  return resp.json(member);
})

router.post('/',async function(req,resp)
{
  let obj = req.body;
  let data = await memberBL.addMember(obj);
  return resp.json(data);
})

router.put('/:id',async function(req,resp)
{
  let obj = req.body;
  let id = req.params.id;
  let status = await memberBL.updateMember(id,obj);
  return resp.json(status);
})

router.delete('/:id',async function(req,resp)
{

  let id = req.params.id;
  let status = await memberBL.deleteMember(id);
  return resp.json(status);
})

module.exports = router;