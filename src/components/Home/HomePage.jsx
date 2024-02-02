import React from "react"

import iphone from "../../assets/iphone-14-pro.webp"
import mac from "../../assets/mac-system-cut.jfif"
import HeroSection from "./HeroSection"
import FeaturedProducts from "./FeaturedProducts"

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most Pro camera ever."
        link="/product/65bc82c2986a35b4011026d1"
        image={iphone}
      />

      <FeaturedProducts />

      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched Magic accessories to your bag after configure your Mac mini."
        link="/product/65bc82c2986a35b4011026d1"
        image={mac}
      />
    </div>
  )
}

export default HomePage