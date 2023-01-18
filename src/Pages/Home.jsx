import React from 'react'
import Hero from '../Hero/Hero'
import Layout from '../Layout/Layout'
import AddPost from '../Layout/Posts/AddPost'
import Posts from '../Layout/Posts/Posts'
import Login from '../Users/Login/Login'
import Regi from '../Users/Regi/Regi'

function Home() {
  return (
    <>
     <Layout >
            <Login/>
            <Regi/>
            <Posts/>
            <Hero/>
            <AddPost/>
    </Layout>
    </>
  )
}

export default Home