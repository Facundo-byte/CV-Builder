# CV-Builder

**CV-Builder** is an interactive web application built with React and Vite that allows you to create a fully personalized professional résumé. Users can fill in different sections (Personal Information, Skills, Education, Work Experience, and more), and the CV updates in real time. It also supports easy export to PDF.

## You can try it out here! 

https://cv-builder-rteo-jfvuwlx7b-facundo-bytes-projects.vercel.app/

 [demonstration video](https://www.youtube.com/watch?v=cWUPNRhytH8)

## Features

* **Modular sections**: Personal Info, Summary, Skills, Education, Work Experience, and Custom sections.
* **Dynamic forms**: Expand each section to reveal inputs, and submit data to update the CV instantly.
* **Add and remove entries dynamically** in Skills, Education, and Work Experience.
* **Export to PDF** directly from the browser using `react-to-print`.
* **Reusable React components** with clean and maintainable code.
* **Customizable styles** with CSS.
* * **Smooth animations** with Framer Motion.

---

## How to Use

1. Navigate through the sections (toggle with the arrow button) to expand the form fields.
2. Fill in the inputs and click **Submit** to apply changes to the CV in real time.
3. In “Skills”, “Education” or “Work Experience”, you can add multiple entries using the **Add** button.
4. Once your CV is ready, click **Print as PDF** to download it.

---

## Tech Stack

* [React](https://react.dev/) with functional components & hooks
* [Vite](https://vitejs.dev/) used for creating the project
* CSS modules for styling
* [`react-to-print`](https://www.npmjs.com/package/react-to-print) for PDF export

---

## Project Structure

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

