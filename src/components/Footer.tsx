import whatsappLogo from "/whatsapp-icon.svg";
import phoneLogo from "/phone-icon.svg";
import igLogo from "/ig-icon.svg";
import mailIcon from "/mail-icon.svg";
import adIcon from "/address-icon.svg";
import ytLogo from "/yt-icon.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className=" px-4 py-4 lg:px-24 text-gray-100  bg-[#1d3b4d] pattern-footer border-t-4 border-[#daa86a] shadow-[rgba(0,0,0,0.3)_10px_-5px_20px_2px]">
      <div className="flex max-lg:flex-col max-sm:items-center  justify-between gap-8 sm:gap-12 md:gap-20">
        <div className="flex max-sm:flex-col gap-8 sm:gap-12 md:gap-20 sm:justify-between sm:px-6">
          {/* contact-us */}
          <div id="contact-us">
            <p className="text-xl font-bold mb-4">Contact Us :</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img src={phoneLogo} alt="" className="size-6" />
                <p>: 8123663880</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={whatsappLogo} alt="" className="size-6" />
                <p>: 7779969949</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={mailIcon} alt="" className="size-6" />
                <p>
                  <span> : </span>
                  <a
                    className="hover:underline"
                    href="mailto:swamivivekanandaiyf@gmail.com"
                  >
                    swamivivekanandaiyf@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex gap-2 items-top">
                <img src={adIcon} alt="" className="size-6" />
                <div className="flex gap-2">
                  <p>:</p>
                  <div>
                    <p>1st floor # 43, 17th Cross</p>
                    <p>MC Layout, Vijayanagar</p>
                    <p>Bangalore, Karnataka</p>
                    <p>560040</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <p>Social Media :</p>
                <div className="flex gap-6">
                  <img src={whatsappLogo} alt="" className="size-6" />
                  <img src={igLogo} alt="" className="size-6" />
                  <img src={ytLogo} alt="" className="size-7" />
                </div>
              </div>
            </div>
          </div>
          {/* quick links */}
          <div>
            <p className="text-xl font-bold mb-4">Quick links</p>
            <div>
              <p className="flex flex-col gap-2 text-sm underline text-gray-200 font-light">
                <HashLink
                  className="hover:underline hover:text-[#daa86a] cursor-pointer"
                  to={"/"}
                  onClick={() => scrollToTop()}
                >
                  Home
                </HashLink>
                <HashLink
                  className="hover:underline hover:text-[#daa86a] cursor-pointer"
                  to={"/#aboutUs"}
                  scroll={(el: any) => {
                    const yOffset = -60;
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  About us
                </HashLink>
                <HashLink
                  className="hover:underline hover:text-[#daa86a] cursor-pointer"
                  to={"/#program"}
                  scroll={(el: any) => {
                    const yOffset = -120;
                    const y =
                      el.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }}
                >
                  Our Programs
                </HashLink>
                <Link
                  className="hover:underline hover:text-[#daa86a]"
                  to={"/team"}
                >
                  Team
                </Link>
                <Link
                  className="hover:underline hover:text-[#daa86a]"
                  to={"/gallery"}
                >
                  Gallery
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* map */}
        <div className=" h-96 lg:h-80 lg:flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.010271525141!2d77.53459177507642!3d12.971194387344058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU4JzE2LjMiTiA3N8KwMzInMTMuOCJF!5e0!3m2!1sen!2sin!4v1722428453765!5m2!1sen!2sin"
            allowFullScreen
            className="border-none h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
