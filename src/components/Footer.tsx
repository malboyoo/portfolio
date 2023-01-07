import { useTranslation } from "react-i18next";

const lngs: any = {
  en: { nativeName: "EN" },
  fr: { nativeName: "FR" },
};

function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between items-center py-10 px-10 md:px-14">
      <span className="md:text-lg text-base">COPYRIGHT © 2023 Thibaut Lefevre</span>
      <div className="bg-dark-2 rounded-md mb-4 md:mb-0">
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
            className={`${
              i18n.resolvedLanguage === lng ? "bg-green font-bold" : "bg-dark-2"
            } p-2 rounded-md transition-all duration-300 text-sm`}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
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
