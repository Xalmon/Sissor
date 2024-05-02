import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/index'

const Login = () => {
  return (
    <>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Login
