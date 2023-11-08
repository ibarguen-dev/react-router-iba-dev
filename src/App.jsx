import { Suspense, lazy } from 'react'
import {Router} from './Router.jsx'
import Pages404 from './pages/404.jsx'
import {Route} from './Route.jsx'
import './App.css'



const HomePage = lazy(() => import('./pages/homePages.jsx'))
const AboutPage = lazy(() => import('./pages/aboutPages.jsx'))
const SearchPages = lazy(() => import('./pages/searchPages.jsx'))
function App() {

  
  return (
    <main>
      <Suspense fallback={<div>loadin...</div>}>
        <Router  defaultComponent={Pages404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage}/>
          <Route path='/search/:query' Component={SearchPages}/>
        </Router>
      </Suspense>
    </main>

  )
}

export default App
