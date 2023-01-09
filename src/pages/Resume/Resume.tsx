import { useTranslation } from "react-i18next";
import cvImg from "../../assets/images/cv.png";
import cvLargeImg from "../../assets/images/cv_large.png";
import cvPdf from "../../assets/images/CV_Thibaut_Lefevre.pdf";

function Resume() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col flex-auto items-center bg-dark-2">
      <section className=" flex flex-col items-center mt-10 md:mt-20">
        <h1 className="text-2xl md:text-3xl  opacity-0 animate-fromLeft text-center">{t("resume.status")}</h1>
        <p className="text-gray mt-10  opacity-0 animate-fromRight animation-delay-800 px-3 text-center">
          {t("resume.about")}
        </p>
        <div className="max-w-md border-gray border-2 rounded-md overflow-hidden mt-10 mx-5 opacity-0 animate-fromLeft animation-delay-2000">
          <a href={cvLargeImg} target="_blank" className="cursor-pointer">
            <img src={cvImg} alt="My CV" />
          </a>
        </div>
        <a href={cvPdf} download>
          <button className="bg-gray px-4 py-2 rounded-md my-10 md:mb-20 opacity-0 animate-fromBottom animation-delay-2000">
            {t("resume.download")}
          </button>
        </a>
      </section>
    </main>
  );
}

export default Resume;
