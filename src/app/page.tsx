import React from "react"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Events from "@/components/Events"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <React.Fragment>
      <Events />
      <Header />
      <Hero />
      <Footer />
    </React.Fragment>
  )
}
