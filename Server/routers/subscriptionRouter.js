const express = require('express');
const subscriptionBL = require('../models/subscriptionBL');

const router = express.Router();

router.get('/',async function(req,resp)
{
  let subscriptions = await subscriptionBL.getSubscriptions();
  return resp.json(subscriptions);
})

router.get('/:id',async function(req,resp)
{
  let id = req.params.id;
  let subscription = await subscriptionBL.getSubscription(id);
  return resp.json(subscription);
})


router.post('/',async function(req,resp)
{
  let obj = req.body;
  let data = await subscriptionBL.addSubscription(obj);
  return resp.json(data);
})

router.put('/:id',async function(req,resp)
{
  let obj = req.body;
  let id = req.params.id;
  let status = await subscriptionBL.updateSubscription(id,obj);
  return resp.json(status);
})

router.delete('/:id',async function(req,resp)
{

  let id = req.params.id;
  let status = await subscriptionBL.deleteSubscription(id);
  return resp.json(status);
})

module.exports = router;