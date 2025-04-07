import useTitle from "@/lib/hooks/useTitle";

function About() {
  useTitle("About");

  return (
    <section>
      <div className="space-y-5 md:space-y-8">
        <h1>
          MERN Stack <br /> Stater Template
        </h1>
        <p>
          This is a complete starter template for building a modern web application using the MERN stack. It includes
          both the frontend and backend setups, enabling you to quickly develop scalable and maintainable web
          applications. The frontend uses Vite, React, and TailwindCSS, while the backend is powered by Express.js with
          MongoDB integration for easy data management.
        </p>

        <div className="flex justify-between">
          <div className="space-y-1.5">
            <h3>Frontend</h3>
            <ul>
              <li>Vite</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>React Router</li>
              <li>ESLint</li>
            </ul>
          </div>
          <div className="space-y-1.5">
            <h3>Backend</h3>
            <ul>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Cors</li>
              <li>Cookie-parser</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
