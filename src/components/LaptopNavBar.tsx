import { Link } from "react-router-dom";
import Logo from "./../../public/logo.png";
import { Button } from "./ui/button";
import { HashLink } from "react-router-hash-link";
const LaptopNavBar = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className=" flex items-center justify-between gap-12">
      <div className=" h-28 ">
        <Link className="" to={"/"}>
          <img src={Logo} alt="LOGO" className=" h-full w-full object-cover" />
        </Link>
      </div>
      <p className=" flex gap-8 inset-x-0 top-100">
        <HashLink
          className="hover:text-[#142c3a] uppercase font-semibold cursor-pointer"
          to={"/"}
          onClick={() => scrollToTop()}
        >
          Home
        </HashLink>
        <HashLink
          className="hover:text-[#142c3a] uppercase font-semibold cursor-pointer"
          to={"/#aboutUs"}
          scroll={(el: any) => {
            const yOffset = -60;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
        >
          About us
        </HashLink>
        <HashLink
          className="hover:text-[#142c3a] uppercase font-semibold cursor-pointer"
          to={"/#program"}
          scroll={(el: any) => {
            const yOffset = -120;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }}
        >
          Our Programs
        </HashLink>

        <Link
          className="hover:text-[#142c3a] uppercase font-semibold cursor-pointer"
          to={"/team"}
        >
          Team
        </Link>
        <Link
          className="hover:text-[#142c3a] uppercase font-semibold cursor-pointer"
          to={"/gallery"}
        >
          Gallery
        </Link>
        <HashLink
          className="hover:text-[#142c3a] uppercase font-semibold cursor-pointer"
          to={"/#contact-us"}
        >
          Contact Us
        </HashLink>
      </p>
      <div className=" flex gap-8">
        <Link className="hover:text-[#142c3a] uppercase font-semibold" to={"/"}>
          <Button className="">Enroll</Button>
        </Link>
      </div>
    </div>
  );
};

export default LaptopNavBar;
