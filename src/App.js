import { Suspense } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { LazyNavbar,LazyAboutUs, LazyProjects, LazySkills, LazyContactMe } from './components/LazyComponents';
function App() {
  return (
   
   <>


    <Suspense fallback={<h1>Loading....</h1>}>
      <LazyNavbar/>
      <LazyAboutUs/>
      <LazyProjects/>
      <LazySkills/>
      <LazyContactMe/>
    </Suspense>
    


   </>
  );
}

export default App;
