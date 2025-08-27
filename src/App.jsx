import { useState } from "react";
import Curriculum from "./components/CVComp";
import Information from "./components/ButtonComps.jsx"
import "./styles/App.css"

export default function Interface() {
  const [person, setPerson] = useState({
    name: "Ken Kaneki",
    email: "kenkaneki@anteiku.com",
    phone: "7012341234",
    location: "Tokyo, Japan",
    summary: "Results-driven Software Engineer with 5 years of experience designing, developing, and optimizing scalable applications and systems. Skilled in full-stack development, cloud technologies, and agile methodologies, with a strong focus on writing clean, maintainable code and delivering high-quality solutions that meet business needs. Adept at collaborating across cross-functional teams, solving complex technical challenges, and continuously learning new tools and frameworks to drive innovation and efficiency."
  });

  const [items, setItems] = useState(["JavaScript", "CSS", "Sass", "Angular", "C", "Webpack", "Git", "Typescript", "HTML 5", "React", "Less", "Assembly", "Vite"]);

  const [eds, setEds] = useState([{
    school: "Massachusetts Institute of Technology",
    location: "Massachusetts, United States",
    degree: "Bachelor's in Computer Science",
    description: "As a computer science major, I've learned how to think critically and solve problems using computational approaches. I've studied programming languages, algorithms, and data structures to build efficient software, while also gaining an understanding of computer systems, networks, and operating systems. I've explored areas like databases, cybersecurity, and artificial intelligence, which showed me how computer science connects to real-world applications. Through these experiences, I've developed strong problem-solving, logical reasoning, and analytical skills.",
    startdate: "20/08/22",
    enddate: "30/01/27"
  }])

  const [works, setWorks] = useState([
    {company: "Microsoft", 
      location: "Seattle, United States", 
      role: "Software Engineer", 
      description: "Developed and mantained software using mainly web technologies like JavaScript and TypeScript.", 
      startdate: "31/01/07", 
      enddate: "20/11/23"},

      {company: "Boston Dynamics", 
      location: "Boston, United States", 
      role: "Low Level Engineer", 
      description: "Developed drivers using mainly C and Assembly.",
      startdate: "30/11/24", 
      enddate: "08/08/25"}
  ]);

  const [custom, setCustom] = useState({title: "FUN FACT", description: "I'm a one eyed ghoul."});

  return (
    <div className="mainContainer">
      <div className="contIzquierdo">
        <Information title="General information"person={person}setPerson={setPerson} />
        <Information title="Professional summary" person={person} setPerson={setPerson}/>
        <Information title="Skills" setItems = {setItems}/>
        <Information title="Education" setEds = {setEds}/>
        <Information title="Work experience" setWorks = {setWorks}/>
        <Information title="Custom information" setCustom = {setCustom}/>
      </div>
      <div className="contDerecho">
        <Curriculum person = {person} items = {items} eds = {eds} works = {works} custom ={custom}/>
      </div>
    </div>
  );
}

