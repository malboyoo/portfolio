function Footer() {
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-around items-center py-10 px-10 md:px-14">
      <span className="md:text-lg text-base">COPYRIGHT © 2023 Thibaut Lefevre</span>
      <nav>
        <ul className="flex mb-4 md:mb-0">
          <li className="mx-2 hover:-translate-y-2 transition-all">
            <a href="mailto:thibaut.lefevre@gmail.com">
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
          </li>
          <li className="mx-2 hover:-translate-y-2 transition-all">
            <a href="https://www.linkedin.com/in/thibaut-lefevre-dev/">
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
          </li>
          <li className="mx-2 hover:-translate-y-2 transition-all">
            <a href="https://github.com/malboyoo">
              <i className="fa-brands fa-github text-2xl"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
