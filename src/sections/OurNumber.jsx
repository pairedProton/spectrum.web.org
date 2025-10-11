import hero5 from "../assets/images/hero5.jpg";
import Numbers from "../components/Numbers";
import Scrollbar from "../components/Scrollbar";



  function percFinder(num,deno) {
    let val = ((num/deno)*100).toFixed()

    return val
  } 

const numbers = [
  {
    num: "1 Lakh",
    text: "farmer community",
    numberAchieved: 11000,
    width: `w-[${percFinder(11000,100000)}]`,
    perc: percFinder(11000,100000),
    // unit:'Lakh'
  },
  {
    num: "3000",
    text: "Team Members",
    numberAchieved: 100,
    width: "w-[50%]",
    perc: percFinder(324,3000),
  },
  {
    num: "15 Cr",
    text: "Company Valuation",
    numberAchieved: 2,
    width: "w-[63%]",
    perc: percFinder(15,100),
  },
  {
    num: "150",
    text: "Districts of establishment",
    numberAchieved: 7,
    width: "w-[70%]",
    perc: percFinder(10,150),
  },
  {
    num: "10000",
    text: "Acres Of Farms Lands",
    numberAchieved: 1500,
    width: "w-[41%]",
    perc: percFinder(2310,10000),
  },
  {
    num: "15",
    text: "Sustainable crop models",
    numberAchieved: 8,
    width: "w-[82%]",
    perc: percFinder(11,15),
  },
];

const OurNumber = () => {



  return (
    <div
      className={`w-full h-auto lg:min-h-screen flex flex-col lg:flex-row gap-6 lg:gap-0 p-10 relative `}
      style={{ backgroundImage: `url(${hero5})`, backgroundPosition: "left" }}
    >
      <div className="w-full absolute top-0 left-0 h-full bg-black/30 z-9"></div>
      <div className="leftNumber w-full relative z-10 lg:w-[50%] text-6xl font-[curvyText] text-white">
        Our Target <br />
        till <span className="italic">2030</span>
      </div>
      <div className="rightNumber w-full relative z-10 lg:w-[50%]  flex flex-col md:flex-row flex-wrap gap-10  justify-center items-center p-4 backdrop-blur-md rounded-lg">
        {numbers.map((e, i) => (
          <Numbers
            num={e.num}
            text={e.text}
            numberAchieved={e.numberAchieved}
            key={i}
            perc={e.perc}
            width={e.width}
          ></Numbers>
        ))}
      </div>
    </div>
  );
};

export default OurNumber;
