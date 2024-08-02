import React, { FC, useEffect } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgShare from "lightgallery/plugins/share";
import lgHash from "lightgallery/plugins/hash";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

import "./../GalleryStyles.css";

import Image1 from "./../../public/TEAM/Gallery/GalleryImg (1).webp";
import Image2 from "./../../public/TEAM/Gallery/GalleryImg (2).webp";
import Image3 from "./../../public/TEAM/Gallery/GalleryImg (3).webp";
import Image4 from "./../../public/TEAM/Gallery/GalleryImg (4).webp";
import Image5 from "./../../public/TEAM/Gallery/GalleryImg (5).webp";
import Image6 from "./../../public/TEAM/Gallery/GalleryImg (6).webp";
import Image7 from "./../../public/TEAM/Gallery/GalleryImg (7).webp";
import Image8 from "./../../public/TEAM/Gallery/GalleryImg (8).webp";
import Image9 from "./../../public/TEAM/Gallery/GalleryImg (9).webp";
import Image10 from "./../../public/TEAM/Gallery/GalleryImg (10).webp";
import Image11 from "./../../public/TEAM/Gallery/GalleryImg (11).webp";
import Image12 from "./../../public/TEAM/Gallery/GalleryImg (12).webp";
import Image13 from "./../../public/TEAM/Gallery/GalleryImg (13).webp";
import Image14 from "./../../public/TEAM/Gallery/GalleryImg (14).webp";
import Image15 from "./../../public/TEAM/Gallery/GalleryImg (15).webp";
import Image16 from "./../../public/TEAM/Gallery/GalleryImg (16).webp";
import Image17 from "./../../public/TEAM/Gallery/GalleryImg (17).webp";
import Image18 from "./../../public/TEAM/Gallery/GalleryImg (18).webp";
import Image19 from "./../../public/TEAM/Gallery/GalleryImg (19).webp";

export const GalleryPage: FC<{ name: string }> = () => {
  useEffect(() => {
    // Ensure the DOM element exists
    const container = document.querySelector<HTMLElement>(
      ".masonry-gallery-demo"
    );
    if (container) {
      // Initialize Masonry
      const msnry = new Masonry(container, {
        itemSelector: ".gallery-item",
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });

      // Use imagesLoaded with Masonry
      imagesLoaded(container).on("progress", function () {
        // Layout Masonry after each image loads
        if (msnry) {
          msnry.layout!();
        }
      });
    }
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <LightGallery
        elementClassNames={"masonry-gallery-demo"}
        plugins={[lgZoom, lgShare, lgHash]}
        speed={500}
      >
        <div className="grid-sizer flex "></div>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image1}
        >
          <img
            alt="Yoga Day"
            className="img-responsive h-full w-full"
            src={Image1}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image2}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image2}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image3}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image3}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image4}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image4}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image5}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image5}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image6}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image6}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image7}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image7}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image8}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image8}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image9}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image9}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image10}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image10}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image11}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image11}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image12}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image12}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image13}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image13}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image14}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image14}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image15}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image15}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image16}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image16}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image17}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image17}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image18}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image18}
          />
        </a>
        <a
          data-lg-size="1600-1067"
          className="gallery-item w-full md:w-1/3 p-4 bg-gray-300/70"
          data-src={Image19}
        >
          <img
            alt="Yoga Day"
            className="img-responsive  h-full w-full"
            src={Image19}
          />
        </a>
      </LightGallery>
    </div>
  );
};

const HeaderComponent: React.FC = () => (
  <div>
    <h1 className="text-4xl mb-6 p-4 text-center bg-gray-50/70">
      Gallery Page
    </h1>
  </div>
);

export default GalleryPage;
