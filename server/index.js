const express = require('express');


const router = express.Router();

const server = express();

router.get('/create', (req, res) => {
    res.status(200).json({hello: 'world'});
});

server.use('/api', router);

server.listen(5050, () => {
    console.log('Server started on port 5050!');
});