# CV-Builder

**CV-Builder** is an interactive web application built with React and Vite that allows you to create a fully personalized professional résumé. Users can fill in different sections (Personal Information, Skills, Education, Work Experience, and more), and the CV updates in real time. It also supports easy export to PDF.

---

## ✨ Features

* **Modular sections**: Personal Info, Summary, Skills, Education, Work Experience, and Custom sections.
* **Dynamic forms**: Expand each section to reveal inputs, and submit data to update the CV instantly.
* **Add and remove entries dynamically** in Skills, Education, and Work Experience.
* **Export to PDF** directly from the browser using `react-to-print`.
* **Reusable React components** with clean and maintainable code.
* **Customizable styles** with CSS.

---

## 🚀 Installation

```bash
git clone https://github.com/Facundo-byte/CV-Builder.git
cd CV-Builder
npm install
npm run dev
```

Then open `http://localhost:3000` (or whichever port Vite shows in the terminal).

---

## 🖥️ How to Use

1. Navigate through the sections (toggle with the arrow button) to expand the form fields.
2. Fill in the inputs and click **Submit** to apply changes to the CV in real time.
3. In “Skills”, “Education” or “Work Experience”, you can add multiple entries using the **Add** button.
4. Once your CV is ready, click **Print as PDF** to download it.

---

## 🛠️ Tech Stack

* [React](https://react.dev/) with functional components & hooks
* [Vite](https://vitejs.dev/) used for creating the project
* CSS modules for styling
* [`react-to-print`](https://www.npmjs.com/package/react-to-print) for PDF export

---

## 📂 Project Structure

```
CV-Builder/
├── public/               # Public files (index.html, favicon, etc.)
├── src/
│   ├── components/       # React components (Curriculum, Buttons, Forms)
│   ├── assets/           # Images (icons, arrows, etc.)
│   ├── styles/           # CSS files
│   ├── App.jsx           # Main app, handles global state
│   └── main.jsx          # Vite entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚧 Future Improvements

* Add smooth animations when expanding/collapsing sections.
* Improve UI with themes (light/dark mode)

