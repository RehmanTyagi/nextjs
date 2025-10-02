'use client'
import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from 'next/link'

const PencilBanner = () => {
  const dummyData = [
    {
      id: 1,
      type: "Feature",
      description: "We just released a new feature that will blow your mind! Check it out now.",
      link: "/events/feature-release",
      btnText: "Learn More"
    },
    {
      id: 2,
      type: "Blog",
      description: "Learn how to optimize your workflow with our latest blog post.",
      link: "/blog/new-post",
      btnText: "Read Post"
    }
  ]

  const [slide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (slide < dummyData.length - 1) {
      setCurrentSlide(slide + 1)
    }
  }

  const prevSlide = () => {
    if (slide > 0) {
      setCurrentSlide(slide - 1)
    }
  }

  return dummyData.length > 0 ? (
    <div className="bg-[#00684A]">
      <div className="container mx-auto p-2.5 justify-between gap-3 flex items-center overflow-hidden">
        <Link href={dummyData[slide].link} className="flex flex-1 justify-center items-center gap-1.5 overflow-hidden">
          <span className="bg-[#B1FF05] text-xs font-bold text-green-900 p-0.5 px-2 mr-1 rounded">{dummyData[slide].type}</span>
          <p className="text-white text-[10px] font-mono whitespace-nowrap text-ellipsis overflow-hidden">
            {dummyData[slide].description}
          </p>
          <p className="text-[10px] font-bold min-w-max text-amber-300 underline">{dummyData[slide].btnText}</p>
        </Link>
        <div className="hidden md:flex text-white ml-2.5 gap-2 items-center">
          <button disabled={slide === 0} onClick={prevSlide} aria-label="Previous">
            <FaAngleLeft className={`cursor-pointer ${slide === 0 ? 'text-white/50' : ''}`} />
          </button>
          <button disabled={slide === dummyData.length - 1} onClick={nextSlide} aria-label="Next">
            <FaAngleRight className={`cursor-pointer ${slide === dummyData.length - 1 ? 'text-white/50' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  ) : null
}

export default PencilBanner
