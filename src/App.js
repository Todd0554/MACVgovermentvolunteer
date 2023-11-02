import './App.css';
import React from 'react'
import { 
    BrowserRouter, 
    Route, 
    Routes 
// eslint-disable-next-line
  } from "react-router-dom";
  import { router } from './router/index';
import Nav from './component/Nav';
import Spinner from './component/Spinner';
// import Top from './component/Top';
import Footer from './component/Footer';

function App() {
  return (
    // eslint-disable-next-line
    <div className="App">
      
      <Spinner />
      <BrowserRouter>
      {/* <Top /> */}
      <Nav />
        <React.Suspense>
          <Routes>
              {router.map((e,i) => (
                <Route path={e.path} element={<e.element/>} key={i} ></Route>
              )
              )}
              /
          </Routes>
         
        </React.Suspense>
       
      </BrowserRouter>
     
      <Footer />

      
      <a href="#top" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
  );
}
export default App;
