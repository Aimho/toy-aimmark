import React, { useEffect, useState } from 'react';
import { getApi } from '../api/exampleApi';

function ExampleAxios() {
  const [state, setState] = useState(undefined);

  useEffect(() => {
    async function fetch() {
      await getApi().then((resp: any) => setState(() => resp.RESULT));
    }
    fetch();
  }, []);

  return (
    <div>
      <h1>Example Axios</h1>
      {state && JSON.stringify(state)}
    </div>
  );
}

export default ExampleAxios;
