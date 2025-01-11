import React from 'react'
import { Outlet } from 'react-router-dom'

function About() {
  return (
    <div style={
      {
        margin: "200px"
      }
    }>
      <div>
      about
      </div>
      <Outlet/>
    </div>
  )
}

export default About
