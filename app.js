const express = require('express');
const bodyParser = require('body-parser');
const cloneRepo = require('./utils/cloneRepo');

const app = express();
app.use(bodyParser.json());

app.post('/clone', (req, res) => {
    const repoUrl = req.body.repo;

    // Anonymous function calling vulnerable function
    (function() {
        cloneRepo(repoUrl, (err, result) => {
            if (err) {
                return res.status(500).send('Error cloning repository');
            }
            res.send('Repository cloned: ' + result);
        });
    })();
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
