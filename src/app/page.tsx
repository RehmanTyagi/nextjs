import React from 'react'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Events from '@/components/Events';

export default function Home() {
  return (
    <React.Fragment>
      <Events />
      <Header />
      <Footer />
    </React.Fragment>
  );
}
