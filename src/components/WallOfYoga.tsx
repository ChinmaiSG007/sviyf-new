import { Link } from "react-router-dom";
import GuruData from "./../yogaGuruData.json";

const WallOfYoga = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-4 p-4 max-md:h-96 max-md:overflow-y-scroll max-md:overflow-x-hidden">
        {GuruData.map((data) => (
          <Link
            key={data.name}
            to={data["wiki-link"]}
            target="_blank"
            className="flex flex-col items-center rounded transition-all duration-700 p-4 group bg-gray-700/10 hover:bg-gray-700/30"
          >
            <div className="group-hover:bg-[#f3450b] rounded-full h-32 w-32 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full overflow-hidden ">
                <img
                  src={data.imgURL}
                  alt={data.name}
                  className="h-full w-full object-contain bg-gray-900 group-hover:bg-gray-700 group-hover:scale-[1.15] transition-all duration-700"
                />
              </div>
            </div>
            <h4 className="text-gray-200 text-center  group-hover:text-[#daa86a] group-hover:font-semibold mt-2 transition-all duration-700">
              {data.name}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WallOfYoga;
