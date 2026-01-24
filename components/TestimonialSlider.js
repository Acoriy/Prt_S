// testimonial data
const testimonialSlider = [
   {
    image: '/t-avt-22.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'I highly recommend Sofyane for her exceptional expertise in web development. Her in-depth mastery of programming languages ​​allows her to efficiently solve the most complex challenges. Thank you to her for the realization of my project.',
  },
  {
    image: '/t-avt-11.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'I had the pleasure of working with Sofyane on a Front End development project, and I am impressed by her expertise and professionalism!',
  },
   {
    image: '/t-avt-4.png',
    name: 'Nawaf Chawk',
    position: 'Customer',
    message:
      'Great results with TikTok Ads and Snapchat Ads — strong targeting, higher conversions, and clear ROI. Highly recommended.',
  },
  {
    image: '/t-avt-33.png',
    name: 'Anaïs Rouvière',
    position: 'Customer',
    message:
      'I had the opportunity to work with Sofyane on several missions, and the results were remarkable. I highly recommend!',
  },
   {
    image: '/t-avt-66.png',
    name: 'Dr. Carlos Mendoza',
    position: 'Customer',
    message:
      'Excellent UX design for both the website and clinic management app  intuitive, clean, and perfectly adapted to my medical practice.',
  },
  {
   image: '/t-avt-77.png',
   name: 'Hoda Souffi',
   position: 'Customer',
   message:
     'I’m very satisfied with my WordPress website. The design is clean, easy to use, and matches my brand perfectly. Communication was smooth, deadlines were respected, and the final result exceeded my expectations.',
 },
  {
    image: '/t-avt-55.png',
    name: 'Jonass Moray',
    position: 'Customer',
    message:
      'I highly recommend Sofyane for her exceptional expertise in web development. Her in-depth mastery of programming languages ​​allows her to efficiently solve the most complex challenges. Thank you to her for the realization of my project.',
  },
  {
    image: '/t-avt-88.png',
    name: 'Rebica Mei',
    position: 'Customer',
    message:
      'Professional SEO service that significantly improved my website visibility and organic traffic. Very satisfied with the results.',
  },
  {
    image: '/t-avt-99.png',
    name: 'Michael Johnson',
    position: 'Customer',
    message:
      'Fantastic work on my full-stack e-commerce website. Smooth performance, intuitive design, and everything works perfectly. Highly professional and reliable.',
  },
  {
    image: '/t-avt-10.png',
    name: 'Alexander Carter',
    position: 'Customer',
    message:
      'Outstanding UX/UI design for our travel app — user-friendly, visually engaging, and perfectly tailored to our needs.',
  },
];

// import swiper react component 
import {Swiper , SwiperSlide} from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation = {true}
      pagination = {{ 
        clickable: true
       }}
       modules={[Navigation , Pagination]}
       className='h-[400px]'
     >
       {testimonialSlider.map((person , index)=>{
        return(
          <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
              px-16'>
                {/* avatar , name , position  */}
                 <div className='w-full max-w-[300px] flex flex-col xl:justify-center
                  items-center relative mx-auto xl:mx-0'> 
                   <div className='flex flex-col justify-center text-center'>
                      {/* avatar */}
                      <div className='mb-2 mx-auto'>
                        <Image src={person.image} width={100} height={100} alt=''/>
                      </div>
                      {/* name */}
                      <div className='text-lg'>{person.name}</div>
                      {/* position */}
                      <div className='text-[12px] uppercase font-extralight tracking-widest'>
                        {person.position}
                      </div>
                   </div>
                    
                 </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center 
                 before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
                 xl:before:h-[200px] relative xl:pl-20'>
                  {/* Quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl  text-white/20 mx-auto md:mx-0'/>
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>
                    {person.message}
                  </div>
                </div>
              </div>
          </SwiperSlide>
        );
       })}
    </Swiper>
  );
};

export default TestimonialSlider;

