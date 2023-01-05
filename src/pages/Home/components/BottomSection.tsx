function BottomSection() {
  return (
    <section className="bottomContainer bg-dark-2 py-5 px-10 md:px-14 flex flex-col md:flex-row flex-auto items-center md:items-start">
      <div className="md:w-1/2 mr-5 max-w-[360px] py-4">
        <article className="bg-dark-1 p-3 mb-2 md:mb-5 rounded-md">
          <h2 className="text-xl text-green mb-3">
            FRONT-END <i className="devicon-react-original mr-2"></i>
            <i className="devicon-typescript-plain mr-2"></i>
            <i className="devicon-tailwindcss-plain mr-2"></i>
            <i className="devicon-sass-original mr-2"></i>
          </h2>
          <p className="text-sm">ReactJS, Typescript, TailwindCSS, Sass.</p>
        </article>
        <article className="bg-dark-1 p-3 my-3 md:my-5 rounded-md">
          <h2 className="text-xl text-green mb-3">
            BACK-END <i className="devicon-nodejs-plain mr-2"></i>
            <i className="devicon-express-original mr-2"></i>
            <i className="devicon-typescript-plain mr-2"></i>
            <i className="devicon-mongodb-plain mr-2"></i>
          </h2>
          <p className="text-sm">NodeJS, Express, Typescript, mongoDB.</p>
        </article>
      </div>
      <div className="introduce md:w-1/2 mx-auto">
        <span className="text-gray my-4 block">Introduce</span>
        <h1 className="mb-6 text-2xl">Hello, I'm Thibaut Lefevre</h1>
        <h2 className="mb-4 text-lg italic">
          I am a junior fullstack React developer with a passion for building intuitive and dynamic web applications.
        </h2>
        <p className="text-gray">
          It has always been my dream to use my passion for technology and problem-solving to bring innovative ideas to
          life through code. Whether it's building dynamic user interfaces or creating efficient back-end systems, I am
          constantly striving to improve my skills and contribute to the development community. Through my portfolio, I
          hope to showcase my dedication to learning and growth as a developer, and to demonstrate my ability to create
          functional and visually appealing applications that meet the needs of users.
        </p>
      </div>
    </section>
  );
}

export default BottomSection;
