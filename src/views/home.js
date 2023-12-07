import React from 'react'

import { Helmet } from 'react-helmet'

import PastedImage from '../components/pasted-image'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Giant Whispered Zebra</title>
        <meta property="og:title" content="Giant Whispered Zebra" />
      </Helmet>
      <PastedImage></PastedImage>
    </div>
  )
}

export default Home
