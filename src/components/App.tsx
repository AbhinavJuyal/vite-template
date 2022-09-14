import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "components/Navbar"

import { Provider } from "react-redux"
import { store } from "redux/store"
import React from "react"

const Home = React.lazy(() => import("pages/Home"))
const Posts = React.lazy(() => import("pages/Posts"))
const Post = React.lazy(() => import("pages/Post"))

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  </Router>
)

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper
