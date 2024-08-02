import HeroSection from "@/components/HeroSection";
import Karnataka from "./../../public/karnataka.png";
import WallOfYoga from "@/components/WallOfYoga";

import ayushLogo from "/ayushLogo.jpg";
import aolLogo from "/aolLogo.png";
import whoLogo from "/whoLogo.png";
import courseImg from "/course.png";
import pathaLogo from "/pathaLogo.png";
import yoga1 from "/yoga (1).jpg";
import yoga2 from "/yoga (2).jpg";
import yoga3 from "/yoga (3).jpg";
import yoga4 from "/yoga (4).jpg";
import yoga5 from "/yoga (5).jpg";
// import HeroSecond from "@/components/HeroSecond";
import yogaClipart1 from "/yoga-clipart (1).png";
import yogaClipart2 from "/yoga-clipart (2).png";
import yogaClipart3 from "/yoga-clipart (1).svg";

import ScrollButton from "@/components/ScrollButton";
import SocialIcons from "@/components/SocialIcons";

const HomePage = () => {
  return (
    <div>
      {/* hero */}
      <div className="rounded pb-4 ">
        <HeroSection />
        {/* <HeroSecond /> */}
      </div>
      <div className=" z-30">
        <ScrollButton />
      </div>
      <div>
        <SocialIcons />
      </div>
      <div className=" px-8 py-2 lg:px-24 min-h-full">
        {/* About - us */}
        <div
          className="rounded py-10 flex flex-col items-center gap-10 cursor-default"
          id="aboutUs"
        >
          {/* about us */}
          <div className="space-y-0 bg-gray-100/80  hover:bg-[#0e1f29] w-fit p-4 rounded-md group transition-all duration-75">
            <h3 className="font-bold text-center group-hover:text-gray-100 py-2 transition-all duration-75 ">
              ABOUT US
            </h3>

            <p className="py-2 text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75">
              Welcome to Swami Vivekananda Institution and Yoga Foundation,
              where we embrace the timeless wisdom of Yoga to empower
              individuals and communities across the nation. Inspired by the
              teachings of Swami Vivekananda, we are dedicated to promoting
              holistic well-being through the practice and philosophy of Yoga.
            </p>
            <p className="py-2 text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75">
              Established with a profound commitment to spreading the
              transformative power of Yoga, our institute serves as a beacon of
              knowledge and practice. We offer a wide range of programs and
              initiatives designed to make Yoga accessible to people from all
              walks of life. Whether you are a beginner seeking to embark on
              your Yoga journey or an experienced practitioner looking to deepen
              your practice, we provide comprehensive training and guidance
              tailored to meet your needs.
            </p>
            <div className=" h-full w-full">
              <img
                src={yoga5}
                alt="yoga"
                className="h-full w-full object-cover overflow-hidden"
              />
            </div>
          </div>
          {/* vision */}
          <div className="space-y-0 bg-gray-100/80  hover:bg-[#0e1f29] w-fit p-4 rounded-md group transition-all duration-75">
            <h3 className="font-bold text-center group-hover:text-gray-100 py-2 transition-all duration-75 ">
              VISION
            </h3>
            <h5 className="text-2xl text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75 pb-4">
              Empowering the Nation through Yoga
            </h5>
            <p className="py-2 text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75">
              Our vision, "Empowering the Nation through Yoga," encapsulates our
              commitment to transforming lives and enhancing well-being across
              the country through the practice of Yoga. We believe that Yoga is
              a powerful tool for fostering personal growth, promoting physical
              and mental health, and building a more cohesive and resilient
              society. Through this vision, we aim to make Yoga accessible to
              individuals from all walks of life, regardless of age, background,
              or socioeconomic status. By implementing comprehensive Yoga
              programs in schools, workplaces, community centers, and other
              public spaces, we seek to empower individuals with the tools to
              improve their health, manage stress, and cultivate inner peace. By
              embracing this vision, we aspire to create a healthier, more
              balanced, and connected nation where Yoga serves as a catalyst for
              positive change, personal empowerment, and social harmony.
            </p>
            <div className=" h-full w-full">
              <img
                src={yoga2}
                alt="yoga"
                className="h-full w-full object-cover overflow-hidden"
              />
            </div>
          </div>

          {/* aim */}
          <div className="space-y-0 bg-gray-100/80  hover:bg-[#0e1f29] w-fit p-4 rounded-md group transition-all duration-75">
            <h3 className="font-bold text-center group-hover:text-gray-100 py-2 transition-all duration-75 ">
              AIM
            </h3>
            <h5 className="text-2xl text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75 pb-4">
              Enabling Yoga across the nation
            </h5>
            <p className=" py-2 text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75">
              Our aim, "Enabling Yoga Across the Nation," reflects our
              dedication to spreading the practice of Yoga far and wide,
              ensuring its benefits reach every corner of the country. We are
              committed to making Yoga accessible to diverse communities and
              individuals, regardless of their location, background, or
              financial situation.
            </p>
            <p className=" py-2 text-gray-600 group-hover:text-gray-300  transition-all duration-75">
              <h6 className="text-center font-semibold py-2">
                To achieve this aim, we focus on:
              </h6>
              <ol>
                <li>
                  <span className="font-semibold">National Outreach : </span>
                  Implementing Yoga programs in various settings, including
                  schools, workplaces, community centers, and rural areas, to
                  ensure widespread access and engagement.
                </li>
                <li>
                  <span className="font-semibold">
                    Training and Certification :{" "}
                  </span>
                  Providing comprehensive training and certification for Yoga
                  instructors to maintain high standards and expand the reach of
                  Yoga instruction.
                </li>
                <li>
                  <span className="font-semibold">Resource Development : </span>
                  Creating and distributing educational materials, online
                  resources, and practical tools to support individuals and
                  organizations in adopting and sustaining Yoga practices.
                </li>
                <li>
                  <span className="font-semibold">
                    Community Initiatives :{" "}
                  </span>
                  Organizing local and regional events, workshops, and classes
                  to encourage participation and integrate Yoga into daily life.
                </li>
                <li>
                  <span className="font-semibold">
                    Partnerships and Collaboration :{" "}
                  </span>
                  Working with government bodies, NGOs, and other organizations
                  to align efforts and amplify the impact of Yoga initiatives
                  nationwide.
                </li>
              </ol>
              <p className="py-3">
                By focusing on these strategies, we aim to foster a culture
                where Yoga is seamlessly integrated into daily routines and
                serves as a foundation for physical and mental well-being
                throughout the nation. Our goal is to empower individuals,
                enrich communities, and create a healthier, more connected
                society through the transformative power of Yoga.
              </p>
            </p>
            <div className=" h-full w-full">
              <img
                src={yoga3}
                alt="yoga"
                className="h-full w-full object-cover overflow-hidden"
              />
            </div>
          </div>
          {/* mission */}
          <div className="space-y-0 bg-gray-100/80  hover:bg-[#0e1f29] w-fit p-4 rounded-md group transition-all duration-75">
            <h3 className="font-bold text-center group-hover:text-gray-100 py-2 transition-all duration-75 ">
              MISSION
            </h3>
            <h5 className="text-2xl text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75 pb-4">
              To establish yoga in everybody's lifestyle across nation
            </h5>
            <p className="py-2 text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75">
              Our mission is driven by our commitment to making Yoga an integral
              part of everyday life for individuals across the country. We
              envision a nation where Yoga is seamlessly woven into the fabric
              of daily routines, contributing to the physical, mental, and
              emotional well-being of every person. By embedding Yoga into the
              daily lives of people across the nation, we aim to foster a
              healthier, more balanced, and harmonious society. Our mission
              reflects our belief in the transformative power of Yoga and its
              ability to enhance overall quality of life for everyone.
            </p>
            <div className=" h-full w-full">
              <img
                src={yoga4}
                alt="yoga"
                className="h-full w-full object-cover overflow-hidden"
              />
            </div>
          </div>
          {/* motto */}
          <div className="space-y-0 bg-gray-100/80  hover:bg-[#0e1f29] w-full p-4 rounded-md group transition-all duration-75">
            <h3 className="font-bold text-center group-hover:text-gray-100 py-2 transition-all duration-75 ">
              MOTTO
            </h3>
            <h5 className="text-2xl text-center text-gray-600 group-hover:text-gray-300  transition-all duration-75 pb-2">
              Yoga Bharath
            </h5>
            <div className=" h-full w-full">
              <img
                src={yoga1}
                alt="yoga"
                className="h-full w-full object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>

        {/* in collabration */}
        <div className="rounded flex flex-col gap-6  items-center mx-auto my-8 py-8 px-2 bg-[#d7d7d7]/80">
          <p className="text-2xl text-gray-700">In collaboration with </p>
          <div className=" flex overflow-hidden  w-full group">
            <div className=" flex items-center gap-5 px-4 animate-infinite-horizontal-scroll   group-hover:paused">
              <div className="max-w-none">
                <img
                  src={whoLogo}
                  alt="WHO"
                  className="w-80 max-w-none h-28 object-contain hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="max-w-none">
                <img
                  src={ayushLogo}
                  alt="AAYUSH"
                  className="w-80 max-w-none h-28 object-contain hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="max-w-none">
                <img
                  src={aolLogo}
                  alt="ART OF LIVING"
                  className="w-80 max-w-none h-28 object-contain  hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="max-w-none">
                <img
                  src={pathaLogo}
                  alt="PATHA"
                  className="w-80 max-w-none h-28 object-contain  hover:scale-110 transition-all duration-200"
                />
              </div>
            </div>
            <div
              className=" flex items-center gap-5 px-4 animate-infinite-horizontal-scroll group-hover:paused"
              area-hidden="true"
            >
              <div className="max-w-none">
                <img
                  src={whoLogo}
                  alt="WHO"
                  className="w-80 max-w-none h-28 object-contain hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="max-w-none">
                <img
                  src={ayushLogo}
                  alt="AAYUSH"
                  className="w-80 max-w-none h-28 object-contain hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="max-w-none">
                <img
                  src={aolLogo}
                  alt="ART OF LIVING"
                  className="w-80 max-w-none h-28 object-contain  hover:scale-110 transition-all duration-200"
                />
              </div>
              <div className="max-w-none">
                <img
                  src={pathaLogo}
                  alt="PATHA"
                  className="w-80 max-w-none h-28 object-contain  hover:scale-110 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* our-program */}
        <div
          className="rounded my-8 py-2 px-4 flex flex-col gap-4 bg-gray-100/80"
          id="program"
        >
          {/*   program-overview */}
          <div className="flex max-md:flex-col mt-6 justify-around items-center">
            <div className="max-md:w-full w-3/5 flex flex-col gap-4 pl-2">
              <div className="space-y-2 pt-4">
                <h2 className="text-3xl py-2">Our Program-</h2>
                <h3 className="text-xl font-bold">
                  Ayushman Bharath Scheme: Nithya Yoga Abhyaas
                </h3>
                <p className="">
                  Nithya Yoga Abhyaas, which means Daily Yoga Practice, is an
                  esteemed initiative under the Ayushman Bharat program,
                  implemented by our organization to promote holistic well-being
                  within the community. Our mission is to foster physical,
                  mental, and emotional health through the encouragement of
                  regular yoga routines in all government and private schools
                  across Karnataka
                </p>
              </div>
              <div className="space-y-2">
                <p className=" font-semibold text-xl">Program overview-</p>
                <p>
                  The Nithya Yoga Abhyaas program is a 45-day residential
                  initiative that includes:
                </p>
              </div>

              <ul className="flex flex-col gap-4  pl-4">
                <li className="list-disc">
                  <span className="font-semibold  text-lg">
                    Structured Daily Practice:
                  </span>{" "}
                  Participants engage in a daily routine encompassing warm- up
                  stretches, Surya Namaskar, Yoga, Exercise, Pranayama, Dhyaana,
                  Power Yoga, Kundalini Yoga, Therapeutic Yoga, Basic Yoga.
                </li>
                <li className="list-disc">
                  <span className="font-semibold  text-lg">
                    Yoga Instructor Course (YIC):
                  </span>{" "}
                  Comprehensive training designed to certify individuals as
                  proficient yoga instructors.
                </li>
                <li className="list-disc">
                  <span className="font-semibold  text-lg">
                    Youth Leadership Program (YLTP):
                  </span>{" "}
                  Focused on developing leadership skills among the youth,
                  preparing them for impactful roles in promoting and teaching
                  yoga.
                </li>
              </ul>
              {/* our goal */}
              <div className=" flex flex-col gap-2 py-4">
                <div className="space-y-2">
                  <p className=" font-semibold text-xl">Our goals-</p>
                  <p className=" text-lg">
                    Through Nithya Yoga Abhyaas, we aim to:
                  </p>
                </div>

                <ul className="flex flex-col gap-2 list-disc pl-4">
                  <li className="font-semibold">Empower Youth</li>
                  <li className="font-semibold">
                    Enhance Emotional Stability and Spiritual Growth
                  </li>
                  <li className="font-semibold">Nurture Young Minds</li>
                </ul>
              </div>
            </div>
            <div className="py-2 max-md:w-full w-[30%]">
              <img
                src={courseImg}
                alt="course-img"
                className="aspect-square w-full object-contain "
              />
            </div>
          </div>
        </div>

        {/* our-objectives */}
        <div className="rounded my-8 py-2 px-2 bg-gray-100/80">
          <h2 className="text-3xl">Our Objectives-</h2>
          {/* 1 */}
          <div className="flex max-md:flex-col mt-6 flex-row-reverse justify-around items-center hover:bg-gray-300/40 rounded p-2 transition-all duration-200">
            <div className="w-4/5 px-2 max-md:w-full flex flex-col gap-4">
              <div className="space-y-2">
                <p className=" font-semibold text-xl">
                  1. Empowering through employment
                </p>
                <p className="">
                  Our objective is to empower youth by offering comprehensive
                  training programs that certify them as qualified Yoga
                  instructors. These programs are designed to enhance their
                  skill set and increase their employability prospects. By
                  equipping young individuals with professional qualifications
                  in Yoga instruction, we aim to provide them with meaningful
                  career opportunities in private and government schools of
                  Karnataka and contribute to their personal and professional
                  growth. This initiative not only creates job opportunities but
                  also fosters a new generation of Yoga practitioners who can
                  share the benefits of Yoga with others.
                </p>
              </div>
            </div>
            <div className="max-md:w-full w-[30%]">
              <img
                src={yogaClipart1}
                alt="course-img"
                className="aspect-square w-full object-contain"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex max-md:flex-col mt-6 justify-between  items-center hover:bg-gray-400/20 rounded p-2 transition-all duration-200">
            <div className="w-4/5 px-2 max-md:w-full flex flex-col gap-4">
              <div className="space-y-2">
                <p className=" font-semibold text-xl">
                  2. Enhancing Student Development
                </p>
                <p className="">
                  We are dedicated to integrating Yoga techniques into
                  educational settings of government and private schools to
                  support the holistic development of students. Our goal is to
                  promote physical health, mental well-being, and overall
                  personal growth by incorporating Yoga practices into the
                  curriculum. Through this approach, we aim to create a balanced
                  learning environment that nurtures students’ physical fitness,
                  emotional resilience, and cognitive development, ultimately
                  contributing to their success both academically and
                  personally.
                </p>
              </div>
            </div>
            <div className="max-md:w-full w-[30%]">
              <img
                src={yogaClipart2}
                alt="course-img"
                className="aspect-square w-full object-contain "
              />
            </div>
          </div>
          {/* 3 */}
          <div className="flex max-md:flex-col mt-6 justify-between flex-row-reverse  items-center hover:bg-gray-400/20 rounded p-2 transition-all duration-200">
            <div className="max-md:w-full w-4/5 px-2 flex flex-col gap-4">
              <div className="space-y-2">
                <p className=" font-semibold text-xl">
                  3. Promoting Accessibility:
                </p>
                <p className="">
                  Our mission includes advocating for and facilitating the
                  widespread integration of Yoga into schools, workplaces, and
                  households across the nation. By making Yoga easily accessible
                  to individuals of all ages and backgrounds, we seek to promote
                  its benefits and encourage regular practice. This objective
                  includes Yoga programs and resources that can be seamlessly
                  incorporated into everyday life, ensuring that everyone has
                  the opportunity to experience the positive impact of Yoga.
                </p>
              </div>
            </div>
            <div className=" w-[30%] max-md:w-full">
              <img
                src={yogaClipart3}
                alt="course-img"
                className="aspect-square w-full object-contain "
              />
            </div>
          </div>
        </div>

        {/* our target*/}
        <div className="rounded my-8 py-2 px-4 bg-gray-100/80">
          <h2 className="text-3xl pt-2 mb-4">Our Target-</h2>
          <div className="flex max-md:flex-col justify-evenly">
            <ol className=" w-[70%] max-md:w-full pl-4">
              <li className="py-2">
                <h3 className="font-semibold text-xl py-2">
                  1. To establish Yoga in over 5000 schools across Karnataka by
                  Aug 2025
                </h3>
                <p>
                  Through this extensive program, we will provide schools with
                  the necessary resources, including trained Yoga instructors,
                  comprehensive curricula, supportive materials and integrate
                  Yoga into the curriculum of over 5,000 schools and by that we
                  aim to promote physical wellness, mental clarity, and
                  emotional balance among students from a young age. By
                  achieving this goal, we hope to contribute to a healthier and
                  more balanced generation of students, equipping them with the
                  tools to manage stress, improve concentration, and enhance
                  overall quality of life. This initiative reflects our
                  commitment to nurturing well-rounded individuals who are not
                  only academically proficient but also physically and mentally
                  resilient.
                </p>
              </li>
              <li className="py-2">
                <h3 className="font-semibold text-xl py-2">
                  2. To implement Yoga in Corporates and MNCs
                </h3>
                <p>
                  Our goal is to seamlessly integrate Yoga programs into the
                  workplace environment of corporates and multinational
                  companies (MNCs). By introducing Yoga into professional
                  settings, we aim to enhance employee well-being, boost
                  productivity, and foster a positive work culture.
                </p>
                <p>
                  Our comprehensive programs will include regular Yoga classes,
                  mindfulness practices, and stress management techniques. By
                  partnering with skilled Yoga instructors and wellness experts,
                  we will ensure that the programs are both effective and
                  engaging.
                </p>
                <p>
                  By adopting these Yoga practices, companies can create a
                  healthier, more balanced work environment that supports their
                  employees' overall well-being and contributes to
                  organizational success. This initiative reflects our
                  commitment to promoting wellness and productivity in
                  professional settings.
                </p>
              </li>
              <li className="py-2">
                <h3 className="font-semibold text-xl py-2">
                  3. To implement Yoga in Aided departments
                </h3>
                <p>
                  Our mission is to integrate Yoga programs into aided
                  departments across various sectors including police stations,
                  post offices, BBMP offices, hospitals etc enhancing the
                  overall well-being and productivity.
                </p>
                <p>
                  The programs will include a range of Yoga practices, from
                  gentle stretching and breathing exercises to mindfulness
                  techniques and relaxation strategies. Our approach ensures
                  that employees at all levels can benefit from these practices,
                  regardless of their prior experience with Yoga.
                </p>
                <p>
                  The integration of Yoga is expected to lead to increased
                  energy levels, reduced stress, and greater overall job
                  satisfaction among employees. This initiative reflects our
                  commitment to promoting health and wellness within aided
                  departments, fostering a positive and productive work culture.
                </p>
              </li>
            </ol>
            <div className="w-[20%] max-md:w-full ">
              <img
                src={Karnataka}
                alt=""
                className=" h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="rounded my-8 py-2 px-4 bg-gradient-to-r from-[#0e1f29] to-[#1d3b4d] relative">
          <h2 className="text-3xl py-4 mb-4 text-white text-center">
            Wall of yoga gurus
          </h2>
          <WallOfYoga />
          <div className="absolute top-0 bottom-0 left-0 right-0 mandala -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
