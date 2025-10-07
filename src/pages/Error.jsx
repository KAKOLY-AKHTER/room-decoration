import React from 'react'
import Nav from '../component/Nav'
import { useRouteError } from 'react-router'
import Footer from '../component/Footer'

const Error = () => {
 const error= useRouteError()
  return (
    <div>
      <Nav></Nav>
      <div>{error.massage}
      </div>
      <Footer></Footer>


    </div>
  )
}

export default Error