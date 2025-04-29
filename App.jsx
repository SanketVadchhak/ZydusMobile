import React from 'react'
import './App.css'
import ZydusNav from './Components/ZydusNav/ZydusNav'
import BannerSlider from './Components/BannerSlider/BannerSlider'
import DiseaseOverview from './Components/DiseaseOverview/DiseaseOverview'
import RecipeShowcase from './Components/RecipeShowcase/RecipeShowcase'
import HealthTools from './Components/HealthTools/HealthTools'
import SuccessStories from './Components/SuccessStories/SuccessStories'
import SiteFooter from './Components/SiteFooter/SiteFooter'
import ZydusButton from './Components/ZydusButton/ZydusButton'


function App() {

  return (
    <>
      <ZydusNav />
      <BannerSlider />
      <DiseaseOverview />
      <RecipeShowcase />
      <HealthTools />
      <SuccessStories />
      <SiteFooter />
      <ZydusButton />
    </>
  )
}

export default App
