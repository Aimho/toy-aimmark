import React, { useEffect, useState } from 'react';
import { getMovie } from '../api/exampleApi';

function Movie() {
  const [movie, setMovie] = useState(undefined);

  useEffect(() => {
    async function getApi() {
      await getMovie().then((resp: any) => setMovie(() => resp.RESULT));
    }
    getApi();
  }, []);

  return (
    <div>
      <h1>Movie</h1>
      {movie && JSON.stringify(movie)}
    </div>
  );
}

export default Movie;
