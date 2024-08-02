import whatsappLogo from "/whatsapp-icon.svg";
import phoneLogo from "/phone-icon.svg";
import igLogo from "/ig-icon.svg";
import mailIcon from "/mail-icon.svg";
import ytLogo from "/yt-icon.svg";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <div className="relative z-30">
      <div className="flex flex-col ml-2 gap-2 max-lg:gap-1 max-lg:mx-[3px] fixed top-60 bottom-40">
        <Link
          to={"/"}
          className="w-14 bg-green-600 rounded-full p-4 max-lg:p-2 max-lg:w-10 hover:bg-green-900 duration-500 "
        >
          <img src={whatsappLogo} alt="" className="size-6" />
        </Link>
        <Link
          to={"/"}
          className="w-14 bg-pink-600 rounded-full p-4 max-lg:p-2 max-lg:w-10 hover:bg-pink-900 duration-500 "
        >
          <img src={igLogo} alt="" className="size-6" />
        </Link>
        <Link
          to={"/"}
          className="w-14 bg-red-600 rounded-full p-4 max-lg:p-2 max-lg:w-10 hover:bg-red-900 duration-500 "
        >
          <img src={ytLogo} alt="" className="size-6" />
        </Link>
        <Link
          to={"/"}
          className="w-14 bg-blue-600 rounded-full p-4 max-lg:p-2 max-lg:w-10 hover:bg-blue-900 duration-500 "
        >
          <img src={phoneLogo} alt="" className="size-6" />
        </Link>
        <Link
          to={"/"}
          className="w-14 bg-yellow-600 rounded-full p-4 max-lg:p-2 max-lg:w-10 hover:bg-yellow-900 duration-500 "
        >
          <img src={mailIcon} alt="" className="size-6" />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
