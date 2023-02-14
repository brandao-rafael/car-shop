import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3001;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => `Running server on port: ${PORT}`);
  })
  .catch((error) => {
    console.log(error);
    throw new Error(error.message);
  });
