import Image1 from "/TEAM/ERSR.jpeg";
import Image2 from "/TEAM/Sam Raza.jpeg";
import Image3 from "/TEAM/Mohammed Jari.jpeg";
import Image4 from "/TEAM/Dhanush.jpeg";
import Image5 from "/TEAM/Yogi Narayan.jpeg";
import Image6 from "/TEAM/ShreeRangaDhama.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import ScrollButton from "@/components/ScrollButton";
const OurTeam = () => {
  return (
    <div>
      {/* <div className=" z-30">
        <ScrollButton />
      </div> */}
      <div className=" px-4 py-4 lg:px-24 min-h-full ">
        <div className=" h-full">
          <div className="py-4">
            <h2 className=" text-4xl mb-6 p-4 text-center bg-gray-50/70">
              Meet the team
            </h2>
            <h3 className="text-2xl font-bold mb-4  p-4 bg-gray-50/70">
              Our Directors:
            </h3>
            <div className=" my-4 flex max-md:flex-col items-center gap-10 bg-gray-50/70 p-4">
              <div className=" h-full w-[50%] overflow-hidden max-md:w-full rounded-lg">
                <img
                  src={Image1}
                  alt="Emmi Reddy Srinivas Reddy"
                  className="hover:scale-110 transition-all duration-1000 h-full w-full object-cover"
                />
              </div>

              <div className=" flex flex-col gap-4 w-[60%] max-md:w-full ">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex flex-col">
                      <h4 className="text-2xl font-bold text-[#0e1f29]">
                        Emmi Reddy Srinivas Reddy
                      </h4>
                      <h5 className="text-lg font-semibold text-[#773e38]">
                        Founder and Chairman, Yoga Promoter India
                      </h5>
                    </AccordionTrigger>
                    <AccordionContent className=" text-base space-y-4">
                      <p>
                        Mr. Emmireddy Srinivas Reddy is a visionary leader and
                        dedicated advocate for transformative change. A graduate
                        with a BA in Political Science from Sri Venkateshwara
                        University, Tirupati, Mr. Reddy has carved a
                        distinguished path in the professional world. His
                        extensive experience includes serving as an Executive
                        Director in various private organizations, where he has
                        demonstrated remarkable leadership and strategic
                        expertise.
                      </p>

                      <p>
                        Throughout his career, Mr. Reddy has worked closely with
                        some of India's most renowned politicians. His roles
                        have included handling core team public relations,
                        promoting influential political profiles, and building a
                        network of trust and credibility in a remarkably short
                        period. His contributions have left a significant mark
                        on the political landscape across India.
                      </p>
                      <p>
                        In his role as the founder of SVIYF, Mr. Reddy brings
                        the same passion and dedication to a new mission: to
                        integrate the timeless wisdom of Yoga into the lives of
                        children from an early age. Under his leadership, the
                        organization aims to nurture young minds through
                        structured Yoga education, fostering mental, physical,
                        and emotional well-being. Mr. Reddy's vision extends
                        beyond individual enrichment; he aspires to eradicate
                        unhealthy habits, reduce crime rates, and cultivate a
                        society where well-being and compassion thrive.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className=" my-4 flex max-md:flex-col items-center gap-10 bg-gray-50/70 p-4">
              <div className=" h-full w-[50%] overflow-hidden max-md:w-full rounded-lg">
                <img
                  src={Image2}
                  alt="Sam Raza"
                  className="hover:scale-110 transition-all duration-1000 h-full w-full object-cover"
                />
              </div>

              <div className=" flex flex-col gap-4 w-[60%] max-md:w-full ">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex flex-col">
                      <h4 className="text-2xl font-bold text-[#0e1f29]">
                        Syed Sameer Raza
                      </h4>
                      <h5 className="text-lg font-semibold text-[#773e38]">
                        Vice Chairman
                      </h5>
                    </AccordionTrigger>
                    <AccordionContent className=" text-base space-y-4">
                      <p>
                        Dr. Syed Sameer Raza stands as a distinguished figure in
                        both the educational and business sectors, embodying a
                        deep commitment to holistic development and community
                        service. As the Vice Chairman of Noble School Alipur, he
                        plays a pivotal role in shaping the school's vision and
                        ensuring that comprehensive education, including the
                        annual celebration of Yoga Day, remains a cornerstone of
                        the institution. His focus on promoting physical and
                        mental well-being reflects his dedication to nurturing
                        well-rounded students.
                      </p>

                      <p>
                        In recognition of his contributions to education, Dr.
                        Raza was awarded an Honorary Doctorate in Value-Based
                        Education with a specialization in Nurturing Rural
                        Children by the Indian Virtual University for Peace and
                        Education on June 9, 2018. This accolade underscores his
                        dedication to fostering educational excellence and rural
                        development. In the business world, Dr. Raza serves as
                        the CEO of Almond Touch, a leading company in the gems
                        and jewelry sector. His visionary leadership and
                        entrepreneurial spirit have been instrumental in
                        advancing the company’s success and industry impact.
                      </p>
                      <p>
                        Dr. Raza is also a passionate philanthropist and
                        community leader. His various initiatives have
                        positively influenced countless lives, reflecting his
                        unwavering commitment to giving back and supporting
                        community development. Through his multifaceted roles,
                        Dr. Syed Sameer Raza continues to drive meaningful
                        progress in education, business, and community service.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className=" my-4 flex max-md:flex-col items-center gap-10 bg-gray-50/70 p-4">
              <div className=" h-full w-[50%] overflow-hidden max-md:w-full rounded-lg">
                <img
                  src={Image3}
                  alt="Syed Mohammed Jari"
                  className="hover:scale-110 transition-all duration-1000 h-full w-full object-cover"
                />
              </div>

              <div className=" flex flex-col gap-4 w-[60%] max-md:w-full ">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex flex-col">
                      <h4 className="text-2xl font-bold text-[#0e1f29]">
                        Syed Mohammed Jari
                      </h4>
                      <h5 className="text-lg font-semibold text-[#773e38]">
                        Director
                      </h5>
                    </AccordionTrigger>
                    <AccordionContent className=" text-base space-y-4">
                      <p>
                        As the Director for SML-DAB Gems Jewels, he has had the
                        opportunity to lead operations across India, the
                        Philippines, and Bangkok, applying a results-oriented
                        approach to drive impactful results in the jewelry
                        industry. His work has been recognized with the IMA
                        Award for Best Jewelry Salesperson, highlighting his
                        commitment to excellence and innovation. Through
                        strategic planning and market expansion, he has been
                        dedicated to improving business operations and fostering
                        growth. His experience and leadership skills are now
                        directed towards leveraging these insights for the
                        betterment of our NGO’s initiatives, aiming to create
                        positive change and advance our mission effectively.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className=" my-4 flex max-md:flex-col items-center gap-10 bg-gray-50/70 p-4">
              <div className=" h-full w-[50%] overflow-hidden max-md:w-full rounded-lg">
                <img
                  src={Image4}
                  alt="C H Dhanush"
                  className="hover:scale-110 transition-all duration-1000 h-full w-full object-cover "
                />
              </div>

              <div className=" flex flex-col gap-4 w-[60%] max-md:w-full ">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex flex-col">
                      <h4 className="text-2xl font-bold text-[#0e1f29]">
                        C H Dhanush
                      </h4>
                      <h5 className="text-lg font-semibold text-[#773e38]">
                        Director
                      </h5>
                    </AccordionTrigger>
                    <AccordionContent className=" text-base space-y-4">
                      <p>
                        Mr. Dhanush Chithram, a graduate with a B.Sc in
                        Transportation Technology from Gati Shakti
                        Vishwavidyalaya, Vadodara, Gujarat, has been deeply
                        motivated by a desire to serve others from an early age.
                        His longstanding ambition to establish an NGO to provide
                        free services to those in need has been a driving force
                        throughout his career
                      </p>

                      <p>
                        As one of the directors at the Swami Vivekanand
                        Institution and Yoga Foundation, Mr. Dhanush plays a
                        crucial role in advancing the foundation’s mission of
                        community support and development. His dedication to
                        improving lives is evident in the various programs he
                        initiated while still in college, which focused on
                        education, healthcare, and environmental sustainability.
                      </p>
                      <p>
                        Mr. Dhanush’s unwavering commitment to creating a
                        positive impact has not only inspired many but also
                        significantly contributes to the foundation's ongoing
                        efforts to foster a better society for all. His passion
                        and leadership continue to guide the foundation towards
                        achieving its noble goals.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-4  p-4 bg-gray-50/70">
              Our Yoga Trainers:
            </h3>
            <div className=" my-4 flex max-md:flex-col items-center gap-10 bg-gray-50/70 p-4">
              <div className=" flex flex-col gap-4 w-[60%] max-md:w-full ">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex flex-col">
                      <h4 className="text-2xl font-bold text-[#0e1f29]">
                        Yogi Narayan
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className=" text-base space-y-4">
                      <p>
                        A distinguished Yoga Guruji and former Army officer with
                        over 20 years of professional experience. Dr. Narayan N,
                        who brings a unique perspective from his military
                        background, holds a BA, MA, a Postgraduate Diploma, and
                        an MSc in Yoga, and has been awarded an Honorary
                        Doctorate in Yoga by the Yoga University of America,
                        Florida. He has also been honored with the Kempegowda
                        State Award for his exemplary contributions to yoga. As
                        the founder of Vishwachethana School of Yoga, affiliated
                        with SVYASA, Dr. Narayan N offers a comprehensive
                        curriculum that integrates both practical and
                        theoretical aspects of yoga, including specialized
                        programs for medical students in
                        Ayurveda and Homeopathy.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="  h-full w-[50%] overflow-hidden max-md:w-full rounded-lg">
                <img
                  src={Image5}
                  alt="Yogi Narayan"
                  className="hover:scale-110 transition-all duration-1000 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className=" my-4 flex max-md:flex-col items-center gap-10 bg-gray-50/70 p-4">
              <div className=" flex flex-col gap-4 w-[60%] max-md:w-full ">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex flex-col">
                      <h4 className="text-2xl font-bold text-[#0e1f29]">
                        Acharya Shrirangadhama
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent className=" text-base space-y-4">
                      <p>
                        Acharya Shrirangadhama is a revered Yoga Guru and
                        spiritual guide whose journey in the realm of Yoga and
                        Sanskrit has been both profound and transformative.
                        After completing his Sanskrit studies, he embarked on a
                        spiritual quest that led him to various parts of India,
                        where he sought wisdom and guidance from the esteemed
                        Himalayan Gurus. Under their mentorship, he undertook
                        rigorous Sadhana and Gayatri Maha Mantra Anustanam,
                        receiving their blessings and profound insights that
                        continue to shape his path.
                      </p>

                      <p>
                        With a deep commitment to preserving and spreading
                        ancient wisdom, Guruji has dedicated his life to
                        propagating the teachings of Yoga, Gayatri Mahavidya,
                        and the messages of Swami Vivekananda. He adeptly shares
                        these teachings through engaging lectures, discourses,
                        corporate programs, and management workshops, presenting
                        them in a simple, beautiful, and clear manner.
                      </p>
                      <p>
                        His impactful programs have benefited a wide range of
                        sectors, including banking, industry, education, police,
                        and NGOs, both within India and internationally. Through
                        his tireless efforts and spiritual guidance, Guruji
                        continues to foster a greater understanding of Yoga and
                        its benefits, enriching lives and promoting a harmonious
                        and enlightened world.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="  h-full w-[50%] overflow-hidden max-md:w-full rounded-lg">
                <img
                  src={Image6}
                  alt="Acharya Shrirangadhama"
                  className="hover:scale-110 transition-all duration-1000 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
