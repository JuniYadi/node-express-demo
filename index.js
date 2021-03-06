const app = require('express')();
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.set('trust proxy');

app.get('/', (req, res) => {
    res.send({ header: req.headers, ip: req.ip, server: req.hostname });
});

app.get('/env', (req, res) => {
    res.send({ env: process.env });
});


app.get('/webhook', (req, res) => {
    console.log('query', req.query);
    res.status(200).json({ code: 200, message: 'success' });
});

app.post('/webhook', (req, res) => {
    console.log('query', req.query);
    console.log('body', req.body);
    res.status(200).json({ code: 200, message: 'success' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});