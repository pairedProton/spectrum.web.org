
import hero5 from "../assets/images/hero5.jpg";
import Numbers from "../components/Numbers";

const numbers = [
  { num: "11032", text: "farmer community" },
  {
    num: "324",
    text: "Team Members",
  },
  { num: "15 Cr", text: "Company Valuation" },
  { num: "10+", text: "Districts of establishment" },
  { num: "2310", text: "Acres Of Farms Lands" },
  { num: "11", text: "Sustainable crop models" },
];

const OurNumber = () => {
  return (
    <div className={`w-full h-auto lg:h-screen flex flex-col lg:flex-row gap-6 lg:gap-0 p-10 relative `}  style={{ backgroundImage: `url(${hero5})`,backgroundPosition:'left' }}>
      <div className="leftNumber w-full  lg:w-[50%] text-6xl font-[curvyText] text-white">
        Our Target <br />
        till <span className="italic">2030</span>
      </div>
      <div className="rightNumber w-full  lg:w-[50%]  flex flex-col md:flex-row flex-wrap gap-10  justify-center items-center p-4 backdrop-blur-md rounded-lg">
        {numbers.map((e, i) => (
          <Numbers num={e.num} text={e.text} key={i}></Numbers>
        ))}
      </div>
    </div>
  );
};

export default OurNumber;
