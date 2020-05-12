import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './component/Header';
import PageContainer from './page';

function App() {
  return (
    <BrowserRouter>
      <h1>menus</h1>
      <Header />

      <hr />

      <React.StrictMode>
        <PageContainer />
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;

/**
 * 참고
 * React.StrictMode https://ko.reactjs.org/docs/strict-mode.html
 */
