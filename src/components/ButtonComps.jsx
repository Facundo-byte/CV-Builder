import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import arrowdown from "../assets/arrowdown.png";
import arrowup from "../assets/arrowup.png";
import trash from "../assets/trash.png";

/* BUTTONS */
export default function Information({
  title,
  person,
  setPerson,
  setItems,
  setEds,
  setWorks,
  setCustom,
}) {
  const [expand, setExpand] = useState(false);

  function handleClick() {
    setExpand(!expand);
  }

  return (
    <div className="Info">
      <label id="titleslabel">
        <h2>{title}</h2>
        <button onClick={handleClick}>
          <img src={expand ? arrowup : arrowdown} alt="a" />
        </button>
      </label>

      <AnimatePresence>
        {expand ? (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <MoreInfo
              title={title}
              person={person}
              setPerson={setPerson}
              setItems={setItems}
              setEds={setEds}
              setWorks={setWorks}
              setCustom={setCustom}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function MoreInfo({
  title,
  person,
  setPerson,
  setItems,
  setEds,
  setWorks,
  setCustom,
}) {
  const [aux, setAux] = useState({
    aname: "",
    aemail: "",
    aphone: "",
    alocation: "",
    asummary: "",
  });

  switch (title) {
    case "General information":
      return (
        <GeneralInfo
          aux={aux}
          setAux={setAux}
          person={person}
          setPerson={setPerson}
        />
      );
    case "Professional summary":
      return (
        <ProSummary
          aux={aux}
          setAux={setAux}
          person={person}
          setPerson={setPerson}
        />
      );
    case "Skills":
      return <Skills setItems={setItems} />;
    case "Education":
      return <Education setEds={setEds} />;
    case "Work experience":
      return <WorkExp setWorks={setWorks} />;
    case "Custom information":
      return <CustomInfo setCustom={setCustom} />;
  }
}

/* BUTTONS EXPANDS */

export function GeneralInfo({ aux, setAux, person, setPerson }) {
  function handleSubmitGeneral(e) {
    e.preventDefault();
    const errors = {};

    if (!aux.aname.trim()) errors.name = "El nombre es obligatorio";
    if (!/\S+@\S+\.\S+/.test(aux.aemail)) errors.email = "Email inválido";
    if (!/^[0-9]{8,15}$/.test(aux.aphone)) errors.phone = "Teléfono inválido";
    if (!aux.alocation.trim()) errors.location = "La ubicación es obligatoria";

    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join("\n"));
      return;
    }
    setPerson({
      ...person,
      name: aux.aname,
      email: aux.aemail,
      phone: aux.aphone,
      location: aux.alocation,
    });
  }

  return (
    <form className="Moreinfo" onSubmit={handleSubmitGeneral}>
      <label>
        Full name
        <input
          type="text"
          value={aux.aname}
          onChange={(e) => setAux({ ...aux, aname: e.target.value })}
          placeholder="Enter your first and last name"
        />
      </label>

      <label>
        Email
        <input
          type="text"
          value={aux.aemail}
          onChange={(e) => setAux({ ...aux, aemail: e.target.value })}
          placeholder="Enter your email"
        />
      </label>

      <label>
        Phone number
        <input
          type="text"
          value={aux.aphone}
          onChange={(e) => setAux({ ...aux, aphone: e.target.value })}
          placeholder="Enter your phone number"
        />
      </label>

      <label>
        Location
        <input
          type="text"
          value={aux.alocation}
          onChange={(e) => setAux({ ...aux, alocation: e.target.value })}
          placeholder="Enter your location"
        />
      </label>

      <button type="submit" className="submitbutton">
        Submit
      </button>
    </form>
  );
}

export function ProSummary({ aux, setAux, person, setPerson }) {
  function handleSubmitPro(e) {
    e.preventDefault();
    if (aux.asummary.length < 20) {
      alert("El resumen debe tener al menos 20 caracteres");
      return;
    }
    setPerson({ ...person, summary: aux.asummary });
  }

  return (
    <form className="Moreinfo" onSubmit={handleSubmitPro}>
      <label>
        Professional summary
        <textarea
          placeholder="Add a brief description"
          value={aux.asummary}
          onChange={(e) => setAux({ ...aux, asummary: e.target.value })}
        />
      </label>

      <button className="submitbutton">Submit</button>
    </form>
  );
}

export function Skills({ setItems }) {
  const [inputs, setInputs] = useState([]);
  let newInputs = [];

  function handleChangeInput(index, content) {
    newInputs = [...inputs];
    newInputs[index] = content;
    setInputs(newInputs);
  }

  function handleAddInput() {
    setInputs([...inputs, ""]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const cleaned = inputs.filter((s) => s.trim() !== "");
    const unique = [...new Set(cleaned)];
    if (unique.length === 0) {
      alert("Agrega al menos una skill");
      return;
    }
    setItems(unique);
  }

  function handleDeleteInput(e, index) {
    e.preventDefault;
    setInputs(inputs.filter((item, i) => i !== index));
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className="listskill">
        {inputs.map((content, index) => (
          <li className="Base" key={index}>
            <input
              type="text"
              value={content}
              onChange={(e) => handleChangeInput(index, e.target.value)}
              placeholder="Enter your skill"
              id="skilltext"
            />
            <button
              onClick={(e) => handleDeleteInput(e, index)}
              className="delbutton"
            >
              <img src={trash} className="trashicon" />
            </button>
          </li>
        ))}
      </ul>
      <div className="selectionbuttons">
        <button type="button" onClick={handleAddInput}>
          Add
        </button>
        <button type="submit">Submit</button>
        <button type="submit" onClick={() => setItems([])}>
          Delete Skills
        </button>
      </div>
    </form>
  );
}

export function Education({ setEds }) {
  const [inputs, setInputs] = useState([]);
  let newInputs = [];

  function handleChangeInput(index, field, data) {
    newInputs = [...inputs];
    newInputs[index] = { ...newInputs[index], [field]: data };
    setInputs([...newInputs]);
  }

  function handleAddInput() {
    setInputs([
      ...inputs,
      {
        school: "",
        location: "",
        degree: "",
        description: "",
        startdate: "",
        enddate: "",
      },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (const item of inputs) {
      if (!item.school) {
        alert("The name of school is required");
        return;
      }
      if (!item.location) {
        alert("The location is required");
        return;
      }
      if (!item.degree) {
        alert("The degree is required");
        return;
      }
      if (!item.description) {
        alert("The description is required");
        return;
      }
      if (item.startdate && item.enddate && item.startdate > item.enddate) {
        alert("The startdate cant be bigger than the enddate");
        return;
      }
      if (!item.startdate || !item.enddate) {
        alert("Enter a valid date");
        return;
      }
    }
    setEds([...inputs]);
  }

  function handleClean(e) {
    e.preventDefault();
    setEds([]);
  }

  function handleDeleteInput(e, index) {
    e.preventDefault();
    setInputs(inputs.filter((input, i) => i !== index));
  }

  return (
    <form>
      <ul className="licontainer">
        {inputs.map((item, index) => (
          <li key={index} className="edwcontainer">
            <div className="Base">
              <h2 className="edwtitles">School History {index + 1}</h2>
              <button
                onClick={(e) => handleDeleteInput(e, index)}
                className="delbutton"
              >
                <img src={trash} className="trashicon" />
              </button>
            </div>

            <label>
              School
              <input
                type="text"
                placeholder="Enter your school name"
                value={item.school}
                onChange={(e) =>
                  handleChangeInput(index, "school", e.target.value)
                }
              />
            </label>

            <label>
              School location
              <input
                type="text"
                placeholder="Enter your school location"
                value={item.location}
                onChange={(e) =>
                  handleChangeInput(index, "location", e.target.value)
                }
              />
            </label>

            <label>
              Degree
              <input
                type="text"
                placeholder="Enter the name of your degree"
                value={item.degree}
                onChange={(e) =>
                  handleChangeInput(index, "degree", e.target.value)
                }
              />
            </label>

            <label>
              Degree description
              <textarea
                type="text"
                placeholder="Describe your degree"
                value={item.description}
                onChange={(e) =>
                  handleChangeInput(index, "description", e.target.value)
                }
              />
            </label>

            <label>
              Start Date
              <input
                type="date"
                value={item.startdate}
                onChange={(e) =>
                  handleChangeInput(index, "startdate", e.target.value)
                }
              />
            </label>

            <label>
              End Date
              <input
                type="date"
                value={item.enddate}
                onChange={(e) =>
                  handleChangeInput(index, "enddate", e.target.value)
                }
              />
            </label>
          </li>
        ))}
      </ul>
      <div className="selectionbuttons">
        <button type="button" onClick={handleAddInput}>
          Add
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button onClick={handleClean}>Clean Education</button>
      </div>
    </form>
  );
}

export function WorkExp({ setWorks }) {
  const [inputs, setInputs] = useState([]);
  let newinput = [];

  function handleAdd(e) {
    e.preventDefault();
    setInputs([
      ...inputs,
      {
        company: "",
        location: "",
        role: "",
        description: "",
        startdate: "",
        enddate: "",
      },
    ]);
  }

  function handleChange(index, field, data) {
    newinput = [...inputs];
    newinput[index] = { ...newinput[index], [field]: data };
    setInputs([...newinput]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    for (const item of inputs) {
      if (!item.company) {
        alert("The name of the company is required");
        return;
      }
      if (!item.location) {
        alert("The location is required");
        return;
      }
      if (!item.role) {
        alert("The role is required");
        return;
      }
      if (!item.description) {
        alert("The description of the job is required");
        return;
      }
      if (item.startdate && item.enddate && item.startdate > item.enddate) {
        alert("The startdate cant be bigger than the enddate");
        return;
      }
      if (!item.startdate || !item.enddate) {
        alert("Enter a valid date");
        return;
      }
    }
    setWorks([...inputs]);
  }

  function handleDeleteInput(e, index) {
    e.preventDefault();
    setInputs(inputs.filter((input, i) => i !== index));
  }

  return (
    <form>
      <ul className="licontainer">
        {inputs.map((input, index) => (
          <li key={index} className="edwcontainer">
            <div className="Base">
              <h2 className="edwtitles">Job {index + 1}</h2>
              <button
                onClick={(e) => handleDeleteInput(e, index)}
                className="delbutton"
              >
                <img src={trash} className="trashicon" />
              </button>
            </div>

            <label>
              Company
              <input
                type="text"
                placeholder="Enter the name of the company"
                value={input.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
              />
            </label>

            <label>
              Location
              <input
                type="text"
                placeholder="Enter the location of the company"
                value={input.location}
                onChange={(e) =>
                  handleChange(index, "location", e.target.value)
                }
              />
            </label>

            <label>
              Role
              <input
                type="text"
                placeholder="Enter your role title"
                value={input.role}
                onChange={(e) => handleChange(index, "role", e.target.value)}
              />
            </label>

            <label>
              Description
              <textarea
                placeholder="Briefly describe the role"
                value={input.description}
                onChange={(e) =>
                  handleChange(index, "description", e.target.value)
                }
              />
            </label>

            <label>
              Start date
              <input
                type="date"
                value={input.startdate}
                onChange={(e) =>
                  handleChange(index, "startdate", e.target.value)
                }
              />
            </label>

            <label>
              End date
              <input
                type="date"
                value={input.enddate}
                onChange={(e) => handleChange(index, "enddate", e.target.value)}
              />
            </label>
          </li>
        ))}
      </ul>

      <div className="selectionbuttons">
        <button onClick={(e) => handleAdd(e)}>Add</button>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </form>
  );
}

export function CustomInfo({ setCustom }) {
  const [input, setInput] = useState({ title: "", description: "" });

  function handleChange(data, field) {
    setInput({ ...input, [field]: data });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.title.trim() || !input.description.trim()) {
      alert("El título y la descripción son obligatorios");
      return;
    }
    setCustom({ ...input });
  }

  return (
    <form className="Moreinfo">
      <label>
        Title
        <input
          type="text"
          placeholder="Enter the title"
          value={input.title}
          onChange={(e) => handleChange(e.target.value, "title")}
        />
      </label>

      <label>
        Description
        <textarea
          placeholder="Enter the description"
          value={input.description}
          onChange={(e) => handleChange(e.target.value, "description")}
        />
      </label>

      <button
        type="submit"
        className="submitbutton"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </button>
    </form>
  );
}
