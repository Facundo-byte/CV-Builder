/* CV */
export default function Curriculum({ person, items, eds, works, custom }) {
  return (
    <div className="mainCV">
      <div className="General">
        <h1>{person.name}</h1>
        <div className="Social">
          <h3>{person.email}</h3>
          <h3>{person.phone}</h3>
          <h3>{person.location}</h3>
        </div>
      </div>

      <div className="Summary">
        <h2 className="Title">Professional Summary</h2>
        <p>{person.summary}</p>
      </div>

      <div className="Skills">
        <h2 className="Title">Skills</h2>
        <ul className="ItemsSkills">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="Education">
        <h2 className="Title">Education</h2>
        <ul>
          {eds.map((ed, index) => (
            <li key= {index}>
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
        <h2 className="Title">Work experience</h2>
        <ul>
          {works.map((work, index) => (
            <li key = {index}>
              <EdandWork
                place= {work.company}
                location= {work.location}
                startdate= {work.startdate}
                enddate= {work.enddate}
                title= {work.role}
                desc= {work.description}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className= "CustomInfo">
          <h2 className = "Title">{custom.title}</h2>
          <p>{custom.description}</p>
      </div>

    </div>
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

