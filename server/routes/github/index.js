const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:owner/*', async (req, res) => {
  try {
    const { owner, '0': rootPath } = req.params;
    const pathArr = rootPath.split('/');
    const repo = pathArr.slice(0, 1)[0];
    const path = pathArr.slice(1).join('/');
    const { data } = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });
    res.send(data);
  } catch(e) {
    res.send({
      error: e
    });
  }
});

module.exports = router;
