import { Suspense } from 'react'
import './App.css'
import Countries from './component/countries/Countries'

// all countries data loader
const countriesPromies = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json()) 

function App() {
 
  return (
    <>
      <Suspense fallback={<p>Data comming sooon...</p>}>
        <Countries countriesPromies={countriesPromies}></Countries>
      </Suspense>
    </>
  );
}

export default App
