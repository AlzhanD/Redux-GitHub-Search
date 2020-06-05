import React from 'react'
import { Route } from 'react-router-dom'
import Main from './mainMenu'
import ReadMe from './readme'
import RepoList from './repoList'
import Header from './header1'
import Footer from './footer'
import './main.scss'

const Home = () => {
  return (
    <div className="homeCss">
      <Header />
      <div className="container page-wrap mx-auto pt-20 pb-8">
        <div>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/:userName" component={() => <RepoList />} />
          <Route exact path="/:userName/:repositoryName" component={() => <ReadMe />} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
