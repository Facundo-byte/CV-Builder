import { useState } from "react";
import "./App.css";

export default function Interfaz() {
  const [person, setPerson] = useState({
    name: "Ken Kaneki",
    email: "kenkaneki@anteiku.com",
    phone: "7012341234",
    location: "Tokyo, Japan",
    summary: "Results-driven Software Engineer with 5 years of experience designing, developing, and optimizing scalable applications and systems. Skilled in full-stack development, cloud technologies, and agile methodologies, with a strong focus on writing clean, maintainable code and delivering high-quality solutions that meet business needs. Adept at collaborating across cross-functional teams, solving complex technical challenges, and continuously learning new tools and frameworks to drive innovation and efficiency."
  });
  const [items, setItems] = useState([]);

  return (
    <div className="mainContainer">
      <div className="contIzquierdo">
        <Information title="General information"person={person}setPerson={setPerson} />
        <Information title="Professional summary" person={person} setPerson={setPerson}/>
        <Information title="Skills" person={person} setPerson={setPerson} items = {items} setItems = {setItems}/>
        <Information title="Education" person={person} setPerson={setPerson} />
        <Information title="Work experience" person={person} setPerson={setPerson}/>
        <Information title="Custom information" person={person} setPerson={setPerson}/>
      </div>
      <div className="contDerecho">
        <Curriculum person = {person} items = {items}/>
      </div>
    </div>
  );
}

/*botones*/
export function Information({ title, person, setPerson, items, setItems }) {
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
      {expand ? <MoreInfo title={title} person = {person} setPerson = {setPerson} items = {items} setItems = {setItems}/> : null}
    </div>
  );
}

export function MoreInfo({ title, person, setPerson, items, setItems }) {
  const [aux, setAux] = useState({
    aname: "",
    aemail: "",
    aphone: "",
    alocation: "",
    asummary: "",
  });
  
  switch (title) {
    case "General information":
      return <GeneralInfo aux= {aux} setAux= {setAux} person={person} setPerson={setPerson}/>;
    case "Professional summary":
      return <ProSummary aux= {aux} setAux= {setAux} person={person} setPerson={setPerson}/>;
    case "Skills":
      return <Skills items = {items} setItems = {setItems}/>
    default:
      return null;
  }
}

/* EXPANDS BOTONES*/

export function GeneralInfo({aux, setAux, person, setPerson}){
  function handleSubmitGeneral(e){
    e.preventDefault();
    setPerson({...person, name: aux.aname, email: aux.aemail, phone: aux.aphone, location: aux.alocation})
  }

  return(
    <form className="Moreinfo" onSubmit= {handleSubmitGeneral}>
          <label>
            Full name
            <input
              type="text"
              value={aux.aname}
              onChange={(e) => setAux({ ...aux, aname: e.target.value })}
            />
          </label>

          <label>
            Email
            <input
              type="text"
              value={aux.aemail}
              onChange={(e) =>
                setAux({ ...aux, aemail: e.target.value })
              }
            />
          </label>

          <label>
            Phone number
            <input
              type="text"
              value={aux.aphone}
              onChange={(e) =>
                setAux({ ...aux, aphone: e.target.value })
              }
            />
          </label>

          <label>
            Location
            <input
              type="text"
              value={aux.alocation}
              onChange={(e) =>
                setAux({ ...aux, alocation: e.target.value })
              }
            />
          </label>
          <button type= "submit">Submit</button>
        </form>
  )
}

export function ProSummary({aux,setAux, person, setPerson}){
  function handleSubmitPro(e){
    e.preventDefault();
    setPerson({...person, summary: aux.asummary})
  }

  return(
    <form className="MoreInfo" onSubmit= {handleSubmitPro}>
          <label>
            Professional summary
            <input type="textarea" value = {aux.asummary} onChange={(e) => setAux({...aux, asummary: e.target.value})}/>
          </label>

          <button>Submit</button>
        </form>
  )
}

export function Skills({items, setItems}){
  const [inputs, setInputs] = useState([]);
  let newInputs = [];

  function handleChangeInput(index, content){
    newInputs = [...inputs];
    newInputs[index]= content;
    setInputs(newInputs)
  }

  function handleAddInput(){
    setInputs([...inputs, ""]);
  }

  function handleSubmit(e){
    e.preventDefault();
    setItems([...items, ...inputs])
    setInputs([]);
  }
  return(
    <form onSubmit= {handleSubmit}>
      {inputs.map((content, index) => (
        <input
        type = "text"
        key ={index}
        value = {content}
        onChange = {e => handleChangeInput(index, e.target.value)}
        placeholder = {`Item ${index}`}
        />
      ))}

      <div>
        <button type = "button" onClick = {handleAddInput}>Add</button>
        <button type= 'submit'>Submit</button>
        <button type = "button" onClick = {() => setItems([])}>Delete Skills</button>
      </div>
    </form>
  )
}
/* cv */

export function Curriculum({ person, items }) {
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
