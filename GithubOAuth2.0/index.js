const querystring = require('querystring')
const express = require('express')
const axios = require('axios')

const GITHUBCONFIG = require('./config')

const app = express()

app.get('/github/login', async (req, res) => {
  const code = req.query.code

  const tokenResponse = await axios({
    methods: 'POST',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${GITHUBCONFIG.client_ID}&` +
      `client_secret=${GITHUBCONFIG.client_Secret}&` +
      `code=${code}`
  })
  const access_token = querystring.parse(tokenResponse.data).access_token

  if(access_token == undefined){
    res.send(result.error_description)
  }
  const result = await axios({
    method: 'get',
    url: `https://api.github.com/user`,
    headers: {
      accept: 'application/json',
      Authorization: `token ${access_token}`
    }
  });
  console.log(result.data)
  res.send(`You user name is ${JSON.stringify(result.data.name)}`)
})

app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/index.html`)
})

app.listen(8888,function(){
  console.log('listening localhost:8888')
})