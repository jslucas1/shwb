const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const buildPath = path.join(__dirname, '..', 'build');
console.log(buildPath);

app.use(express.static(path.join(buildPath)));

app.get('/*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
})

app.listen(port, () => {
    console.log('Server is up!');
});