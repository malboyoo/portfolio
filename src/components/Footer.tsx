function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center py-10 px-10 md:px-14">
      <span className="md:text-lg text-base">COPYRIGHT © 2023 THIBAUT LEFEVRE</span>
      <nav>
        <ul className="flex mt-4 md:mt-0">
          <li className="mx-2 hover:scale-110 transition-all">
            <a href="https://www.linkedin.com/in/thibaut-lefevre-dev/">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
          </li>
          <li className="mx-2 hover:scale-110 transition-all">
            <a href="https://github.com/malboyoo">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
