const app = require('express')();
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.set('trust proxy');

app.get('/', (req, res) => {
    res.send({ header: req.headers, ip: req.ip, server: req.hostname });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);
});