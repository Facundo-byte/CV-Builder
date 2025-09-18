import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

/* CV */
export default function Curriculum({ ref, person, items, eds, works, custom }) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1], // pequeño flash para indicar cambio
      transition: { duration: 0.4 },
    });
  }, [controls, person, items, eds, works, custom]);

  return (
    <motion.div
      className="mainCV"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <div className="General">
        <h1>{person.name}</h1>
        <div className="Social">
          <div className="Socials">
            <img src={mail} className="SocialIcons" />
            <h3>{person.email}</h3>
          </div>

          <div className="Socials">
            <img src={phone} className="SocialIcons" />
            <h3>{person.phone}</h3>
          </div>

          <div className="Socials">
            <img src={location} className="SocialIcons" />
            <h3>{person.location}</h3>
          </div>
        </div>
      </div>

      <div className="Summary">
        <h2 className="Title">PROFESSIONAL SUMMARY</h2>
        <p>{person.summary}</p>
      </div>

      <div className="Education">
        <h2 className="Title">EDUCATION</h2>
        <ul className="items">
          {eds.map((ed, index) => (
            <li key={index}>
              <EdandWork
                place={ed.school}
                location={ed.location}
                startdate={ed.startdate}
                enddate={ed.enddate}
                title={ed.degree}
                desc={ed.description}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="Work">
        <h2 className="Title">WORK EXPERIENCE</h2>
        <ul className="items">
          {works.map((work, index) => (
            <li key={index}>
              <EdandWork
                place={work.company}
                location={work.location}
                startdate={work.startdate}
                enddate={work.enddate}
                title={work.role}
                desc={work.description}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="Skills">
        <h2 className="Title">SKILLS</h2>
        <ul className="ItemsSkills">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="CustomInfo">
        <h2 className="Title">{custom.title}</h2>
        <p>{custom.description}</p>
      </div>
    </motion.div>
  );
}

/* EDUCATION AND WORK COMPONENT */
export function EdandWork({
  place,
  location,
  startdate,
  enddate,
  title,
  desc,
}) {
  return (
    <div className="Education">
      <div className="LocationandDate">
        <h3>
          {place} | {location}
        </h3>
        <h3>
          {startdate} - {enddate}
        </h3>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

/* PRINT COMPONENT */
