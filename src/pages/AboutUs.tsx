import Logo from "./../../public/logo.png";

const AboutUs = () => {
  return (
    <div>
      <div className=" px-4 py-2 lg:px-12 min-h-full ">
        <div className=" h-full">
          <h2 className=" text-5xl font-extrabold pb-6">
            About Swami Vivekananda Institution and Yoga Foundation
          </h2>
          <div className=" flex items-center">
            <div className=" flex flex-col gap-4 w-[60%] ">
              <p>
                Welcome to Swami Vivekananda Institute and Yoga Foundation,
                where we embrace the timeless wisdom of Yoga to empower
                individuals and communities across the nation. Inspired by the
                teachings of Swami Vivekananda, we are dedicated to promoting
                holistic well-being through the practice and philosophy of Yoga.
              </p>

              <p>
                Established with a profound commitment to spreading the
                transformative power of Yoga, our institute serves as a beacon
                of knowledge and practice. We offer a wide range of programs and
                initiatives designed to make Yoga accessible to people from all
                walks of life. Whether you are a beginner seeking to embark on
                your Yoga journey or an experienced practitioner looking to
                deepen your practice, we provide comprehensive training and
                guidance tailored to meet your needs.
              </p>
            </div>
            <div className=" h-96 w-[40%] ">
              <img
                src={Logo}
                alt="LOGO"
                className=" h-full w-full object-contain"
              />
            </div>
          </div>
          <div className=" pb-4">
            <h4 className="font-semibold">Vision</h4>
            <p>Empowering the Nation through Yoga</p>
          </div>
          <div className=" pb-4">
            <h4 className="font-semibold">Aim</h4>
            <p>Enabling Yoga across the nation</p>
          </div>
          <div className=" pb-4">
            <h4 className="font-semibold">Mission</h4>
            <p>To establish Yoga in everybody’s lifestyle across the nation</p>
          </div>
          <div className=" pb-4">
            <h4 className="font-semibold">Motto</h4>
            <p>Yoga Bharath</p>
          </div>
          <div className=" pb-4">
            <h4 className="font-semibold pb-2">Objectives</h4>
            <ol className="list-decimal">
              <li className="pb-2">
                <span>Empowerment through Employment:</span> To offer
                comprehensive training programs that certify youths as qualified
                yoga instructors, enhancing their skill set and employability
                prospects.
              </li>
              <li className="pb-2">
                <span>Enhancing Student Development:</span>To integrate Yoga
                techniques into educational settings to foster holistic
                development among students, promoting physical health, mental
                wellbeing, and overall personal growth.
              </li>
              <li className="pb-2">
                <span>Promoting Accessibility:</span>To advocate for and
                facilitate the integration of Yoga into schools, workplaces, and
                households nationwide, making it easily accessible to
                individuals of all ages and backgrounds.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
