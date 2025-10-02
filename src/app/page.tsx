import React from 'react'

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PencilBanner from '@/components/PencilBanner';

export default function Home() {
  return (
    <React.Fragment>
      <PencilBanner />
      <Header />
      <Footer />
    </React.Fragment>
  );
}
