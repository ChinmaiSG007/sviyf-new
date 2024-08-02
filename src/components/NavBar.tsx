import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { Menu } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex items-center justify-between gap-12">
      <div className=" h-20">
        <Link className="" to={"/"}>
          <img src={Logo} alt="LOGO" className=" h-full w-full" />
        </Link>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>
            <Menu strokeWidth={2.5} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
              <SheetDescription>
                <p className=" grid gap-8 inset-x-0 top-100 text-black">
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
                      const y =
                        el.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
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
                      const y =
                        el.getBoundingClientRect().top +
                        window.scrollY +
                        yOffset;
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
                  <Link
                    className="hover:text-[#142c3a] uppercase font-semibold cursor-pointer"
                    to={"/"}
                  >
                    Enroll
                  </Link>
                </p>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
