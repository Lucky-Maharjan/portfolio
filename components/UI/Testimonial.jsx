import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
// import network from "../../public/images/Connected world.svg";
// import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";
import Javascript from '../../public/skills/javascript.png';
import Html from '../../public/skills/html.png';
import Css from '../../public/skills/css.png';
import Github from '../../public/skills/github1.png';
import Csharp from '../../public/skills/Csharp.png';
import Unity from '../../public/skills/unity.png';
import Python from '../../public/skills/python.png';

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
        <div id='skills' className='w-full '>

          <SectionSubtitle subtitle="My Skills" />
          <br/>
          {/* <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'> */}
        <h2 className='py-2'>Our abilities reflect our knowledge</h2>
        <br/>
        <div className='grid grid-cols-0 lg:grid-cols-3 gap-5'>
          <div className='p-4 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-4 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Csharp} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>C#</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Unity} width='110px' height='65px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Unity</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h2>Github</h2>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h2>Python</h2>
              </div>
            </div>
          </div>
      </div>
      </div>
      {/* </div> */}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
