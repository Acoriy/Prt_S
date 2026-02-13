// data
export const workSlides = {
  slides: [
    {
      title: "Web Development",
      categorySlides: [
        {
          images: [
            {
              title: "Clothify: An online store for men's, women's, and children's clothing.",
              path: "/work9.jpg",
              link: "https://clothify-blush.vercel.app/",
              description: "Clothify is a modern e-commerce platform for men’s, women’s, and children’s fashion, offering a seamless shopping experience with secure payments. Built with React.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Stripe/PayPal integration.",
            },
            {
             title: "A comprehensive ERP platform for managing restaurants and cafes, inspired by the Foodics system.",
             path: "/cover-kiyam.png",
             link: "https://qeaim.sa",
             description: "A full-stack ERP platform for restaurants and cafes, streamlining orders, inventory, team scheduling, and real-time analytics. Built with React, Node.js, Express, MongoDB, and cloud-based updates, fully responsive on desktop, tablet, and mobile.",
           },
            
            {
              title: "Front-End of Noblisa AI Platform for Modern Home Design and Decoration.",
              path: "/work8.jpg",
              link: "https://moblessa-ai.netlify.app/",
              description: "Noblessa AI - AI-powered interior design platform built with React & Tailwind CSS. Upload room photos and instantly visualize modern decor styles for kitchens, living rooms, and offices.",
            },
            {
              title: "Hopnk: A modern financing landing page with a smooth experience and animations",
              path: "/work10.jpg",
              link: "https://landingpage-hobank.netlify.app/",
              description: "I designed and developed HoBank’s modern landing page, offering a sleek, user-friendly interface to explore financial services. Built with React, Tailwind CSS, Framer Motion, and HTML/CSS/JS, it features responsive design, interactive animations, clear CTAs, and organized content to enhance user engagement.",
            },
          ],
        },
        {
          images: [
            {
              title: "SOCORIN-Education Platform",
              path: "/work-7.jpg",
              link: "https://education-landing-page-reactjs.netlify.app",
              description: "SOCORIN - A modern, responsive landing page built with React.js, Tailwind CSS, and Framer Motion. Features smooth animations, mobile-first design, and interactive elements to showcase educational services and courses.",
            },
            // {
            //   title: "Burger Restaurant",
            //   path: "/work1.jpg",
            //   link: "https://burger-burst.netlify.app/",
            //   description: "Food ordering interface",
            // },
            {
              title: "BeatBlitz Products - landing page",
              path: "/work4.jpg",
              link: "https://beatblitz-products.netlify.app/",
              description: "BeatBlitz Products - Modern Bluetooth headphones landing page crafted with React.js, Tailwind CSS, and Framer Motion. Features immersive product showcases, smooth scroll animations, and responsive design that highlights premium audio technology and sleek aesthetics.Tech Stack: React.js • Tailwind CSS • Framer Motio",
            },
            // {
            //   title: "Portfolio Template",
            //   path: "/work2.jpg",
            //   link: "https://portfulio-templet.netlify.app",
            //   description: "Creative portfolio design",
            // },
           
          ],
        },
      ],
    },
    {
      title: "UI/UX Design",
      categorySlides: [
        {
          images: [
            {
              title: "redesign of the Hsabati.com website",
              path: "/Hsabati.png",
              link: "https://www.behance.net/gallery/216390655/Hsabati-Financial-Management-Website-Redesign-UXUI",
              description: "Redesigned Hsabati.com with improved UX/UI, clear navigation, and a modern, user-friendly interface using UI/UX design, Figma, and Photoshop.",
            },
            {
              title: "ThePlatform - UI Kit E-Learning & Online Class تطبيق منصة ",
              path: "/Cover- Thumbnail1.png",
              link: "https://www.figma.com/design/MKIbno5TOIfWHFojA7SQ2K/ThePlatform---UI-Kit-E-Learning---Online-Class-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D9%85%D9%86%D8%B5%D8%A9--Community-?node-id=3-16&t=KKPSDIZQvRtsSVFP-1",
              description: "Taqteb Platform App is a comprehensive application consisting of 30 screens for browsing educational courses. It features both light and dark modes and is completely free. This design includes visual identity, icons, and a design system, all crafted with Figma, UI, and UX, along with interactive prototyping.",
            },
             {
              title: "Petly – Mobile App for Animal Products E-Commerce",
              path: "/Petly.png",
              link: "#",
              description: "Petly – A modern mobile app for animal product shopping, offering a seamless, intuitive, and engaging user experience, designed and prototyped with Figma",
            },
             {
              title: "Online Bike Shopping App",
              path: "/Bike.png",
              link: "https://www.figma.com/design/YavcRY8nyAlgOMsgmDztcL/Online-Bike-Shopping-App?node-id=1-4003&t=RJpEA2ZHwL5J5mCE-1",
              description: "A sleek and user-friendly online bike shopping app designed for seamless browsing, selection, and purchase of bikes. Crafted with attention to UI/UX, Figma, and interactive prototyping for an engaging and intuitive experience.",
            },
           
          ],
        },
        {
          images: [
           
            // {
            //   title: "UI Project 6",
            //   path: "/ui6.jpg",
            //   link: "https://ui6.example.com",
            //   description: "UX research project",
            // },
            // {
            //   title: "UI Project 7",
            //   path: "/ui7.jpg",
            //   link: "https://ui7.example.com",
            //   description: "Mobile app design",
            // },
            // {
            //   title: "UI Project 8",
            //   path: "/ui8.jpg",
            //   link: "https://ui8.example.com",
            //   description: "Design system",
            // },
          ],
        },
      ],
    },
  ],
};

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

// import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      {/* Menu des onglets */}
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-8 justify-start items-center">
        {workSlides.slides.map((item, itemIndex) => {
          return (
            <div
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
              } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 transition-all duration-300`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          );
        })}
      </div>

      {/* Contenu du Swiper pour la catégorie active */}
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[9 00px] sm:h-[600px]"
      >
        {workSlides.slides[index].categorySlides.map(
          (categorySlide, categoryIndex) => {
            // Grouper les images par paires pour afficher 2 cartes par slide
            const chunks = [];
            for (let i = 0; i < categorySlide.images.length; i += 2) {
              chunks.push(categorySlide.images.slice(i, i + 2));
            }

            return chunks.map((pair, pairIndex) => (
              <SwiperSlide key={`${categoryIndex}-${pairIndex}`}>
                <div className="flex gap-4 justify-center w-full h-full ">
                  {pair.map((image, imageIndex) => (
                    <div
                      className="w-1/2 relative rounded-lg overflow-hidden flex flex-col items-center justify-start group"
                      key={imageIndex}
                    >
                      <Link
                        href={image.link}
                        target="_blank"
                        className="w-full"
                      >
                        <div className="flex items-center justify-center relative overflow-hidden group w-full">
                          {/* image */}
                          <Image
                            src={image.path}
                            width={500}
                            height={300}
                            alt={image.title}
                            className="w-full h-48 object-cover"
                          />
                          {/* overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                          {/* title overlay */}
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              <div className="delay-100">LIVE</div>
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                PROJECT
                              </div>
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <BsArrowRight />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>

                      {/* titre et description sous l'image */}
                      <div className="w-full xl:min-h-[250px] px-3 py-3 text-center bg-white dark:bg-gray-800 rounded-b-lg">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-white">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ));
          }
        )}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
