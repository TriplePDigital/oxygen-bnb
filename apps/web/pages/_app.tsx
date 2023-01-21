// import { Layout } from '../components/Layout'
import "../styles/globals.css"
import { Navigation } from "ui"
import React from "react"
import { Layout } from "ui/components/Layout"

export const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps
}): JSX.Element => {
  return (
    <>
      <Navigation />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

type AppProps = {
  Component: React.ComponentType
  pageProps: any
}

export default MyApp
