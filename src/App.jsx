import React from 'react'
import './App.css'
import LandingPage from './stores/pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import AcPage from './stores/pages/AcPage'
import MobilePage from './stores/pages/MobilePage'
import BookPage from './stores/pages/BookPage'
import ComputerPage from './stores/pages/ComputerPage'
import FridgePage from './stores/pages/FridgePage'
import Furniturepage from './stores/pages/Furniturepage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import Speaker from './stores/pages/Speaker'
import TvPage from './stores/pages/TvPage'
import Watchpage from './stores/pages/Watchpage'
import MobileSingle from './stores/singles/MobileSingle'
import AcSingle from './stores/singles/AcSingle'
import BookSingle from './stores/singles/BookSingle'
import ComputerSingle from './stores/singles/ComputerSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import MenSingle from './stores/singles/MenSingle'
import SpeakerSingle from './stores/singles/SpeakerSingle'
import TvSingle from './stores/singles/TvSingle'
import WatchSingle from './stores/singles/WatchSingle'
import WomenSingle from './stores/singles/WomenSingle'
import UserCart from './stores/pages/UserCart'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/mobile' element={<MobilePage/>}/>
        <Route path='/ac' element={<AcPage/>}/>
        <Route path='/book' element={<BookPage/>}/>
        <Route path='/computer' element={<ComputerPage/>}/>
        <Route path='/fridge' element={<FridgePage/>}/>
        <Route path='/furniture' element={<Furniturepage/>}/>
        <Route path='/kitchen' element={<KitchenPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/women' element={<WomenPage/>}/>
        <Route path='/speaker' element={<Speaker/>}/>
        <Route path='/tv' element={<TvPage/>}/>
        <Route path='/watch' element={<Watchpage/>}/>
        <Route path='/mobile/:id' element={<MobileSingle/>}/>
        <Route path='/ac/:id' element={<AcSingle/>}/>
        <Route path='/book/:id' element={<BookSingle/>}/>
        <Route path='/computer/:id' element={<ComputerSingle/>}/>
        <Route path='/fridge/:id' element={<FridgeSingle/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
        <Route path='/men/:id' element={<MenSingle/>}/>
        <Route path='/speaker/:id' element={<SpeakerSingle/>}/>
        <Route path='/tv/:id' element={<TvSingle/>}/>
        <Route path='/watch/:id' element={<WatchSingle/>}/>
        <Route path='/women/:id' element={<WomenSingle/>}/>
        <Route path='/cart' element={<UserCart/>}/>
      </Routes>
      
    </div>
  )
}

export default App