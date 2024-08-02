import ayushLogo from "./../../public/aolLogo.png";
import aolLogo from "./../../public/aolLogo.png";
import whoLogo from "./../../public/who2.png";
import Course from "./../../public/course.png";

const OurProjects = () => {
  return (
    <div>
      <div>
        <div className=" px-4 py-2 lg:px-12 min-h-full ">
          <div className=" h-full">
            <h2 className=" text-5xl font-extrabold pb-3">OUR PROJECTS</h2>
            <p className="text-2xl font-bold pb-6">
              (In collaboration with Ministry of Ayush, WHO, Art of Living )
            </p>
            <div className=" flex items-center">
              <div className=" h-full w-full ">
                <img
                  src={ayushLogo}
                  alt="LOGO"
                  className=" h-full w-full object-contain"
                />
              </div>
              <div className=" h-full w-full ">
                <img
                  src={whoLogo}
                  alt="LOGO"
                  className=" h-full w-full object-contain"
                />
              </div>
              <div className=" h-full w-full ">
                <img
                  src={aolLogo}
                  alt="LOGO"
                  className=" h-full w-full object-contain"
                />
              </div>
            </div>
            <div className=" pb-4">
              <h4 className="font-bold">
                Ayushman Bharath: Nithya Yoga Abhyaas
              </h4>
              <p>
                Nithya Yoga Abhyaas, which means Daily Yoga Practice, is an
                esteemed initiative under the Ayushman Bharat program,
                implemented by our organization to promote holistic well-being
                within the community. Our mission is to foster physical, mental,
                and emotional health through the encouragement of regular yoga
                routines in all government and private schools across Karnataka
              </p>
              <h5 className="font-semibold">Program Overview:</h5>
              <p>
                The Nithya Yoga Abhyaas program is a 45-day residential
                initiative that includes:
              </p>
              <ul className="list-disc">
                <li>
                  <span className="italic font-semibold">
                    Structured Daily Practice:
                  </span>
                  Participants engage in a daily routine encompassing warmup
                  stretches, Surya Namaskar, Yoga, Exercise, Pranayama, Dhyaana,
                  Power Yoga, Kundalini Yoga, Therapeutic Yoga, Basic Yoga.
                  <div>
                    <img src={Course} alt="" className="py-5" />
                  </div>
                </li>
                <li>
                  <span className="italic font-semibold">
                    Yoga Instructor Course (YIC):
                  </span>
                  Comprehensive training designed to certify individuals as
                  proficient yoga instructors.
                </li>
                <li>
                  <span className="italic font-semibold">
                    Youth Leadership Program (YLTP):
                  </span>
                  Focused on developing leadership skills among the youth,
                  preparing them for impactful roles in promoting and teaching
                  yoga.
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Our Goals:</h5>
              <p>Through Nithya Yoga Abhyaas, we aim to:</p>
              <ul className="list-disc">
                <li>
                  <span className="italic font-semibold">Empower Youth:</span>:
                  Provide training and employment opportunities for yoga
                  instructors in both government and private schools across
                  Karnataka. This not only equips them with valuable skills but
                  also enables them to play a vital role in educating and
                  inspiring others.
                </li>
                <li>
                  <span className="italic font-semibold">
                    Enhance Emotional Stability and Spiritual Growth:
                  </span>
                  Support participants in achieving mental wellness, emotional
                  resilience, and spiritual development through consistent yoga
                  practice.
                </li>
                <li>
                  <span className="italic font-semibold">
                    Nurture Young Minds:
                  </span>
                  Integrate structured yoga education into school curricula to
                  instill healthy habits and foster overall well-being during
                  formative years.
                </li>
              </ul>
              <p className="pt-4">
                Our broader vision is to enrich lives by eradicating unhealthy
                habits, reducing crime rates, and cultivating a society where
                well-being and compassion thrive. By empowering the youth
                through training and employment, we strive to build a future
                where individuals lead fulfilling lives and contribute
                positively to our nation and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
