'use client'
import 'swiper/css'
import 'swiper/css/bundle'

import React, { useState } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { type Swiper as SwiperInstance } from 'swiper'
import { Autoplay, Navigation, EffectFade } from 'swiper/modules'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";

const dummyData = [
  {
    id: 1,
    type: "Feature",
    description: "We just released a new AI-powered feature to simplify your workflow.",
    link: "/events/ai-feature",
    btnText: "Learn More"
  },
  {
    id: 2,
    type: "Blog",
    description: "Discover the top 5 productivity hacks for developers in our latest blog.",
    link: "/blog/productivity-hacks",
    btnText: "Read Post"
  },
  {
    id: 3,
    type: "Update",
    description: "Our platform has been updated with performance improvements and bug fixes.",
    link: "/events/update-v2",
    btnText: "Check Update"
  },
  {
    id: 4,
    type: "Webinar",
    description: "Join our live webinar on scaling SaaS applications efficiently.",
    link: "/events/webinar-saas",
    btnText: "Register"
  },
  {
    id: 5,
    type: "Case Study",
    description: "Learn how one startup increased revenue by 3x using our platform.",
    link: "/blog/case-study",
    btnText: "View Story"
  },
  {
    id: 6,
    type: "Feature",
    description: "Introducing dark mode — enhance your user experience at night.",
    link: "/events/dark-mode",
    btnText: "Try Now"
  },
  {
    id: 7,
    type: "Announcement",
    description: "We are expanding to Europe! Exciting opportunities ahead.",
    link: "/events/europe-expansion",
    btnText: "Explore"
  },
  {
    id: 8,
    type: "Blog",
    description: "5 common mistakes developers make when building APIs and how to avoid them.",
    link: "/blog/api-mistakes",
    btnText: "Read Post"
  },
  {
    id: 9,
    type: "Feature",
    description: "Multi-language support is here — build globally with ease.",
    link: "/events/multi-language",
    btnText: "See Feature"
  },
  {
    id: 10,
    type: "Workshop",
    description: "Hands-on workshop on mastering Next.js for production-ready apps.",
    link: "/events/nextjs-workshop",
    btnText: "Join Now"
  }
]

const Events = () => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwiperInit = (swiperInstance: SwiperInstance) => {
    setSwiper(swiperInstance);
    swiperInstance.on('slideChange', () => {
      setCurrentIndex(swiperInstance.realIndex);
    });
  }

  return (
    <div className="bg-[#00684A]">
      <div className="container mx-auto p-2.5 gap-3 flex items-center">
        {/* Slider */}
        <Swiper onSwiper={handleSwiperInit} fadeEffect={{ crossFade: true }} speed={1000} slidesPerView={1} modules={[Autoplay, Navigation, EffectFade]} autoplay effect="fade">
          {dummyData.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={item.link} className="flex w-fit items-center gap-1.5 overflow-hidden">
                <span className="bg-[#B1FF05] text-green-900 text-xs font-bold p-0.5 px-2 mr-1 rounded">{item.type}</span>
                <p className="text-white text-xs w-2/6 sm:w-auto font-mono whitespace-nowrap text-ellipsis overflow-hidden">
                  {item.description}
                </p>
                <p className="text-[12px] font-bold min-w-max text-amber-300 underline">{item.btnText}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <div className="hidden md:flex text-white ml-2.5 gap-2 items-center">
          <button onClick={() => swiper?.slidePrev()} aria-label="Previous">
            <HiChevronLeft className={`cursor-pointer ${currentIndex === 0 ? 'text-white/50' : ''}`} />
          </button>
          <button onClick={() => swiper?.slideNext()} aria-label="Next">
            <HiChevronRight className={`cursor-pointer ${currentIndex === dummyData.length - 1 ? 'text-white/50' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Events
