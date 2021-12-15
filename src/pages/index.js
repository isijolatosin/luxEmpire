import React from "react"
import Main from "../components/Main"
import Login from "../components/Login"
import Layout from "../components/Layout"
import { selectLogin } from "../../slices/appSlices"
import { useSelector } from "react-redux"
import SpasLists from "../components/SpasLists"

export default function Home() {
  const login = useSelector(selectLogin)
  return (
    <Layout>
      <div className="main-page">
        <Main />
        {login && (
          <div className="main-page-login">
            <Login />
          </div>
        )}
        {!login && <SpasLists />}
      </div>
    </Layout>
  )
}
