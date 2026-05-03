"use client"

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {Navigation,Autoplay} from "swiper/modules"

export default function Hero(){

return(
<div className="w-full">

<Swiper navigation modules={[Navigation,Autoplay]} autoplay={{delay:2500}} loop={true}>

<SwiperSlide>
<div className="relative h-[180px] sm:h-[250px] md:h-[350px] w-full">
<img src="/images/web.avif" className="w-full h-full object-cover"/>
<div className="absolute inset-0 bg-black/40 flex items-center">
<div className="text-white px-4 sm:px-8">
<h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Upgrade Your Skills 🚀</h2>
<p className="text-sm sm:text-base mt-2">Learn from industry experts</p>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="relative h-[180px] sm:h-[250px] md:h-[350px] w-full">
<img src="/images/python.png" className="w-full h-full object-cover"/>
<div className="absolute inset-0 bg-black/40 flex items-center">
<div className="text-white px-4 sm:px-8">
<h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Master Programming</h2>
<p className="text-sm sm:text-base mt-2">Start your journey today</p>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="relative h-[180px] sm:h-[250px] md:h-[350px] w-full">
<img src="/images/dsa.jpg" className="w-full h-full object-cover"/>
<div className="absolute inset-0 bg-black/40 flex items-center">
<div className="text-white px-4 sm:px-8">
<h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Crack Interviews</h2>
<p className="text-sm sm:text-base mt-2">DSA made easy</p>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="relative h-[180px] sm:h-[250px] md:h-[350px] w-full">
<img src="/images/react.png" className="w-full h-full object-cover"/>
<div className="absolute inset-0 bg-black/40 flex items-center">
<div className="text-white px-4 sm:px-8">
<h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Take Your Development Further</h2>
<p className="text-sm sm:text-base mt-2">Upgrade Your Front-End</p>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="relative h-[180px] sm:h-[250px] md:h-[350px] w-full">
<img src="/images/ai.jpeg" className="w-full h-full object-cover"/>
<div className="absolute inset-0 bg-black/40 flex items-center">
<div className="text-white px-4 sm:px-8">
<h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Conquer the Future</h2>
<p className="text-sm sm:text-base mt-2">Automize Your Life</p>
</div>
</div>
</div>
</SwiperSlide>

<SwiperSlide>
<div className="relative h-[180px] sm:h-[250px] md:h-[350px] w-full">
<img src="/images/uiux.avif" className="w-full h-full object-cover"/>
<div className="absolute inset-0 bg-black/40 flex items-center">
<div className="text-white px-4 sm:px-8">
<h2 className="text-xl sm:text-3xl md:text-4xl font-bold">Make Tempting Designs</h2>
<p className="text-sm sm:text-base mt-2">Bring Magic In Your Designs</p>
</div>
</div>
</div>
</SwiperSlide>

</Swiper>

</div>
)
}