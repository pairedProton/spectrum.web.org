import React from "react";
import Product from "../components/Product";
import krishi from '../assets/images/krishi.png'
import shuddh from '../assets/images/shuddh.png'
import setu from '../assets/images/setu.png'
import vikas from '../assets/images/vikas.png'



const products =[
    {
        img:krishi,
        name:'Spectrum Krishi',
        desc:'We develop climate-smart systems—like contract farming, multilayer cultivation, and agroforestry—that boost yields, enrich soil, and ensurestable incomes for farmers of all scales.'
    },
    {
        img:shuddh,
        name:'Spectrum Shuddh',
        desc:'Organic, eco-friendly processing that transforms farm-fresh produce into premium products—delivering purity, transparency, and globalquality standards for healthconscious consumers.'
    },
    {
        img:setu,
        name:'Spectrum Setu',
        desc:'A direct B2B platform linking farmers with retailers, FMCGs, and exporters—ensuring fair prices for producers and dependable sourcing for buyers.'
    },
     {
        img:vikas,
        name:'Spectrum Vikas',
        desc:'Driving agri-innovation through smart tools, research, and digital solutions—empowering future-ready,resilient rural farming.'
    },
]

const OurProduct = () => {
  return (
    <section className="w-full h-screen flex flex-col gap-6 p-10 bg-[#F5E1C9]">
        <h2 className="text-6xl font-[curvyText] text-[#50653e]" >Our Core Operations</h2>
        <div className="flex justify-around gap-10 " >
            {
                products.map((e,i)=>(
                    <Product img={e.img} name={e.name} desc={e.desc} key={i} />
                ))
            }
        </div>
    </section>
  );
};

export default OurProduct;
