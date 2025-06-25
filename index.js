require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 
const gihubdata = {
    "login": "rishika353git",
    "id": 187747790,
    "node_id": "U_kgDOCzDNzg",
    "avatar_url": "https://avatars.githubusercontent.com/u/187747790?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rishika353git",
    "html_url": "https://github.com/rishika353git",
    "followers_url": "https://api.github.com/users/rishika353git/followers",
    "following_url": "https://api.github.com/users/rishika353git/following{/other_user}",
    "gists_url": "https://api.github.com/users/rishika353git/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rishika353git/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rishika353git/subscriptions",
    "organizations_url": "https://api.github.com/users/rishika353git/orgs",
    "repos_url": "https://api.github.com/users/rishika353git/repos",
    "events_url": "https://api.github.com/users/rishika353git/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rishika353git/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-11-08T09:50:40Z",
    "updated_at": "2025-05-13T06:48:09Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/git', (req, res) => {
    res.json(gihubdata)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
