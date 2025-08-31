import { useState } from "react";
import Curriculum from "./components/CVComp";
import Information from "./components/ButtonComps.jsx"
import "./styles/App.css"
import "./styles/Fonts.css"


export default function Interface() {
  const [person, setPerson] = useState({
  name: "Sofía Martínez",
  email: "sofia.martinez@gmail.com",
  phone: "011-1234-5678",
  location: "Buenos Aires, Argentina",
  summary: "Desarrolladora de software con 4 años de experiencia en aplicaciones web y móviles. Experta en JavaScript, React y Node.js, apasionada por el desarrollo de soluciones eficientes y la experiencia del usuario. Gran capacidad de trabajo en equipo y resolución de problemas complejos."
});

const [items, setItems] = useState([
  "JavaScript", "React", "Node.js", "HTML5", "CSS3",
  "Sass", "Git", "Bootstrap", "MySQL", "Express.js"
]);

const [eds, setEds] = useState([
  {
    school: "Universidad de Buenos Aires",
    location: "Buenos Aires, Argentina",
    degree: "Licenciatura en Ciencias de la Computación",
    description: "Estudios centrados en programación, algoritmos, bases de datos y desarrollo web. Participación en proyectos de software libre y hackathons universitarios.",
    startdate: "01/03/2018",
    enddate: "28/02/2022"
  }
]);

const [works, setWorks] = useState([
  {
    company: "Mercado Libre",
    location: "Buenos Aires, Argentina",
    role: "Desarrolladora Front-End",
    description: "Desarrollo y mantenimiento de interfaces web usando React y TypeScript, mejorando la experiencia de usuario y el rendimiento de las aplicaciones.",
    startdate: "01/05/2022",
    enddate: "Presente"
  },
  {
    company: "Globant",
    location: "Buenos Aires, Argentina",
    role: "Pasante en Desarrollo Web",
    description: "Colaboración en proyectos de desarrollo front-end y pruebas de interfaces web, con foco en accesibilidad y diseño responsive.",
    startdate: "01/06/2021",
    enddate: "31/12/2021"
  }
]);


  const [custom, setCustom] = useState({title: "ABOUT ME", description: "Soy muy responsable, proactiva y me gusta trabajar en equipo"});

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

