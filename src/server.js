require('dotenv').config();
const app = require('./app');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const filesRoutes = require('./routes/files');
const dbConnection = require('./config/dbConnection');

const PORT = process.env.PORT || 3000;

dbConnection();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(fileUpload({
    useTempFiles : false,
    // tempFileDir : './uploads',
    
}));

// routes
app.use('/sources', filesRoutes);
app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/auth'));
app.use('/sourceDelete', require('./routes/sourceDelete'));
app.use('/userDelete', require('./routes/userDelete'));

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})