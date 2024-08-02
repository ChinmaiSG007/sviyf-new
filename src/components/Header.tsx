import LaptopNavBar from "./LaptopNavBar";
import MovingText from "./MovingText";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="relative">
      <div className=" lg:hidden px-4 py-2 lg:px-10 xl:px-24 bg-[#daa86a] sticky top-0 z-40 pattern-nav drop-shadow-lg">
        <NavBar />
      </div>
      <div className=" hidden lg:block px-4 py-2 lg:px-10 xl:px-24 bg-[#daa86a] sticky top-0 z-40 pattern-nav drop-shadow-lg">
        <LaptopNavBar />
      </div>
      <div className="  px-4 py-2 lg:px-10 xl:px-24 bg-[#773e38] z-30 pattern-nav drop-shadow-lg">
        <MovingText />
      </div>
    </div>
  );
};

export default Header;
