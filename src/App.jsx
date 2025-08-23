import { useState } from "react";
import "./App.css";
import { personData } from "./Data.jsx";

export default function Interfaz() {
  return (
    <div className="mainContainer">
      <div className="contIzquierdo">
        <Information title="General information" />
        <Information title="Professional summary" />
        <Information title="Skills" />
        <Information title="Education" />
        <Information title="Work experience" />
        <Information title="Custom information" />
      </div>
      <div className="contDerecho">
        <Curriculum />
      </div>
    </div>
  );
}

/*botones*/
export function Information({ title }) {
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand(!expand);
  }

  return (
    <div className="Info">
      <div className="Base">
        <h2>{title}</h2>
        <button onClick={handleClick}>X</button>
      </div>
      {expand ? <MoreInfo title={title} /> : null}
    </div>
  );
}

export function MoreInfo({ title }) {
  switch (title) {
    case "General information":
      return (
        <form className="Moreinfo">
          <label>
            Full name
            <input type="text" value={personData.name} />
          </label>

          <label>
            Email
            <input type="text" value={personData.email} />
          </label>

          <label>
            Phone number
            <input type="text" value={personData.phone} />
          </label>

          <label>
            Location
            <input type="text" value={personData.location} />
          </label>

          <button>Submit</button>
        </form>
      );
    case "Professional summary":
      return (
        <form className="MoreInfo">
          <label>
            Professional summary
            <input type="textarea" />
          </label>

          <button>Submit</button>
        </form>
      );
    default:
      return null;
  }
}

/* cv */

export function Curriculum() {
  return (
    <div className="mainCV">
      <div className="General">
        <h1>{personData.name}</h1>
        <div className="Social">
          <h3>{personData.email}</h3>
          <h3>{personData.phone}</h3>
          <h3>{personData.location}</h3>
        </div>
      </div>

      <div className="Summary">
        <h2 className="Title">Professional Summary</h2>
        <p>{personData.summary}</p>
      </div>

      <div className="Skills">
        <h2 className="Title">Skills</h2>
        <ul className="ItemsSkills">
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <div className="Education">
        <h2 className="Title">Education</h2>
        <ul>
          <li>
            <EdandWork
              place="Massachusetts Institute of Technology"
              location="Massachusetts, United States"
              startdate="20/08/22"
              enddate="30/01/27"
              title="Bachelor's in Computer Science"
              desc="As a computer science major, I've learned how to think critically and solve problems using computational approaches. I've studied programming languages, algorithms, and data structures to build efficient software, while also gaining an understanding of computer systems, networks, and operating systems. I've explored areas like databases, cybersecurity, and artificial intelligence, which showed me how computer science connects to real-world applications. Through these experiences, I've developed strong problem-solving, logical reasoning, and analytical skills."
            />
          </li>
        </ul>
      </div>

      <div className="Work">
        <h2 className="Title">Work experience</h2>
        <ul>
          <li>
            <EdandWork
              place="Microsoft"
              location="Seattle, United States"
              startdate="31/01/07"
              enddate="20/11/23"
              title="Software Engineer"
              desc="Developed and mantained software using mainly web technologies like JavaScript and TypeScript."
            />
          </li>

          <li>
            <EdandWork
              place="Boston Dynamics"
              location="Boston, United States"
              startdate="30/11/24"
              enddate="08/08/25"
              title="Low Level Engineer"
              desc="Developed drivers using mainly C and Assembly."
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

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
