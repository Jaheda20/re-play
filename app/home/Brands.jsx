"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-4">
        {brands.map((brand) => (
          <div key={brand.id} className="embla_slide flex-shrink-0 w-1/6 p-4">
            <Image
              src={brand.logo}
              width={128}
              height={128}
              alt="brand logo"
              className="w-32 h-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
