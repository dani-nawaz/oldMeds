import React from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Reviews } from '../components/Reviews'
// import { Header } from '../components/Header'
import Treatment from '../components/Treatment'
import DocBanner from '../components/BannerContainer'
import Slider from '../components/Slider'
import Card from '../components/Cards'
import Header from '../components/Header'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { SubMenu } from '../components/SubMenu'
import { useGlobalContext } from '../context/context'
import NavBar2 from '../components/Navbar/Navbar2'
import SearchBar from '../components/SearchBar'
import SideBar from '../components/Navbar/SideBar'
import Sstepper from '../components/Sstepper'
export const Home = () => {
  const { closeSubMenu } = useGlobalContext()
  const matches = useMediaQuery('(max-width:786px)')
  return (
    <div>
      {/* <Header /> */}
      {/* <SearchBar />  */}
      {/* {matches && <SideBar />} */}

      {/* <NavBar2 /> */}
      <SubMenu />
      {/* <Slider /> */}
      <Sstepper />
      {/* <Treatment /> */}
      {/* <Card /> */}
      <About />
      <DocBanner />
      <Contact />
      <Reviews />
    </div>
  )
}
