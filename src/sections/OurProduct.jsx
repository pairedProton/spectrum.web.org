import React from "react";
import Product from "../components/Product";
import krishi from '../assets/image/krishi.jpg'
import shuddh from '../assets/image/Shuddh.png'
import setu from '../assets/image/ban2.jpg'
import vikas from '../assets/image/vikash.jpg'
import hero1 from "../assets/images/hero1.webp";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import hero4 from "../assets/images/hero4.png";


const products =[
    {
        img:krishi,
        name:'Spectrum Krishi',
        desc:'We develop climate-smart systems—like contract farming, multilayer cultivation, and agroforestry—that boost yields, enrich soil, and ensurestable incomes for farmers of all scales.',
        imgUrl:krishi,

    },
    {
        img:shuddh,
        name:'Spectrum Shuddh',
        desc:'Organic, eco-friendly processing that transforms farm-fresh produce into premium products—delivering purity, transparency, and globalquality standards for healthconscious consumers.',
        imgUrl:shuddh,
    },
    {
        img:setu,
        name:'Spectrum Setu',
        desc:'A direct B2B platform linking farmers with retailers, FMCGs, and exporters—ensuring fair prices for producers and dependable sourcing for buyers.',
        imgUrl:setu,
    },
     {
        img:vikas,
        name:'Spectrum Vikas',
        desc:'Driving agri-innovation through smart tools, research, and digital solutions—empowering future-ready,resilient rural farming.',
        imgUrl:vikas,
    },
]

const OurProduct = () => {
  return (
    <section className="w-full min-h-screen h-screen flex flex-col  bg-[#F5E1C9] relative">
        <h2 className="heading w-full md:w-auto absolute top-0 left-1/2 -translate-x-1/2 font-[curvyText] text-white  py-5 px-10 z-50 backdrop-blur-lg rounded-2xl" >Our Core Operations</h2>
        <div className="flex w-full h-full flex-col lg:flex-row justify-around  " >
            {
                products.map((e,i)=>(
                    <Product img={e.img} name={e.name} desc={e.desc}  imgUrl={e.imgUrl} key={i} />
                ))
            }
        </div>
    </section>
  );
};

export default OurProduct;
