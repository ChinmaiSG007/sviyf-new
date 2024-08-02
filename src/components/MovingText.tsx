const MovingText = () => {
  return (
    <div>
      <div className="overflow-hidden w-full group">
        <div className="px-4 w-full  group-hover:paused">
          <p className=" text-white font-semibold animate-infinite-text-scroll  max-sm:text-[6px] text-sm md:text-lg w-fit Akira uppercase">
            Swami Vivekananda Institution and Yoga Foundation
          </p>
        </div>
        {/* <div
          className=" flex items-center gap-5 px-4 animate-infinite-horizontal-scroll group-hover:paused"
          area-hidden="true"
        >
          <div className="max-w-none">
            {" "}
            <p className=" text-white font-semibold text-[5px] md:text-[7px] w-full Akira uppercase">
              Swami Vivekananda Institution and Yoga Foundation
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MovingText;
