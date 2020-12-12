import server from './server';

const port = parseInt(process.env.PORT || '4000');

const starter = new server()
  .start(port)
  .then((actualPort: number) => console.log(`Running on port ${actualPort}`))
  .catch((error: Error) => {
    console.log(error);
  });

export default starter;
