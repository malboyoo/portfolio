import { useTranslation } from "react-i18next";
import nodejs from "../../../assets/images/nodejs.png";
import reactjs from "../../../assets/images/reactjs.png";
import thibaut from "../../../assets/images/thibaut_lefevre.png";

function TopSection() {
  const { t } = useTranslation();
  return (
    <section className="topContainer flex flex-col md:flex-row pt-5 px-5 md:pt-10 md:px-14 bg-dark-1 justify-between items-center overflow-hidden">
      <div className="textContainer flex flex-col items-start md:mr-4 mb-10 md:mb-0 animate-fromLeftSlow opacity-0 animation-delay-1000">
        <div className="bg-green rounded-md hover:scale-110 transition-all cursor-default mb-2">
          <span className="text-dark-2 mx-4 my-1 block font-medium font-sans text-sm">{t("topSection.stack")}</span>
        </div>
        <h2 className="text-4xl my-6 tall:my-4 md:my-6 whitespace-pre-line">{t("topSection.main")}</h2>
        <p className="text-gray mt-3 text-lg">{t("topSection.quote")}</p>
        <a
          href="mailto:thibaut.lefevre.dev@gmail.com"
          className="underline text-green hover:text-white text-lg mt-6 hover:scale-110 transition-all"
        >
          {t("topSection.contact")}
        </a>
      </div>
      <div className="imgContainer relative h-[380px] sm:h-[435px] w-[340px] min-w-[340px] sm:w-[390px] sm:min-w-[390px] animate-fromRightSlow opacity-0 translate-y-5">
        <div className="z-30 absolute imgAuthor">
          <img src={thibaut} alt="Thibaut Lefevre" className="grayscale-[0.2] brightness-105" />
        </div>
        <div className="flex flex-col h-full  justify-between absolute top-0 z-10">
          <img
            src={nodejs}
            alt=""
            className="sm:w-24 sm:h-24 h-20 w-20 bg-dark-2 p-4 rounded-full object-contain shadow-lg shadow-dark-3 animate-floating"
          />
        </div>
        <div className="flex flex-col h-full  justify-between absolute top-20 right-0 z-10">
          <img
            src={reactjs}
            alt=""
            className="sm:w-24 sm:h-24 h-20 w-20 bg-dark-2 p-4 rounded-full object-contain shadow-lg shadow-dark-3 animate-floatingR "
          />
        </div>

        <div className="absolute bg-dark-2 rounded-full w-[340px] min-w-[340px] sm:w-[390px] sm:min-w-[390px] h-[340px] sm:h-[390px] sm:min-h-[390px] top-0"></div>
      </div>
    </section>
  );
}

export default TopSection;
