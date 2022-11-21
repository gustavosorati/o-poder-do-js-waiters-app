import express from 'express';
import mongoose from 'mongoose';


const app = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => {

    const port = 3002;
    app.listen(port, () => {
      console.log('Server is running on http://localhost:' + port);
    });

  })
  .catch(() => console.log('Erro ao conectar ao mongo'));



