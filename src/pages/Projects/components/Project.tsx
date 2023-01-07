import { useTranslation } from "react-i18next";

function Project({
  title,
  url,
  github,
  img,
  description,
  made,
  index,
}: {
  title: string;
  url: string;
  github: string;
  img: string;
  description: string;
  made: React.ReactElement[];
  index: number;
}) {
  const { t } = useTranslation();

  return (
    <article
      className={`pb-10 md:px-10 md:py-20 flex md:flex-row flex-col-reverse items-start md:items-center min-w-full justify-around animate-fromBottom opacity-0 ${
        index % 2
          ? "bg-dark-1 md:animate-fromLeftSlow md:animation-delay-1000 animation-delay-1000"
          : "bg-dark-2 md:flex-row-reverse md:animate-fromRightSlow md:animation-delay-500 animation-delay-500"
      }`}
    >
      <div
        className={`md:max-w-md flex flex-col  items-center ${
          index % 2 ? "md:items-end md:mr-5 lg:mr-10" : "md:items-start md:ml-5 lg:ml-10"
        } `}
      >
        <h2 className="text-2xl text-green md:mt-0 mt-4">{title}</h2>
        <div className="text-4xl md:my-4 my-2 text-green flex flex-row items-center justify-between">
          {made.map((el) => (
            <span
              className={`mx-2 md:mx-0 ${index % 2 ? "md:ml-3 md:mr-0" : "md:mr-3 md:ml-0"}`}
              key={crypto.randomUUID()}
            >
              {el}
            </span>
          ))}
        </div>

        <p
          className={`italic text-gray md:my-4 my-2  text-center whitespace-pre-line px-10 md:px-0 ${
            index % 2 ? "md:text-right" : "md:text-left"
          }`}
        >
          {t(description)}
        </p>

        <ul className="text-green flex justify-start md:my-4 my-2">
          {url && (
            <li className="mr-4 text-base hover:-translate-y-2 hover:text-lg hover:text-white transition-all h-7">
              <a href={url}>
                <i className="fa-solid fa-link"></i> {t("projects.preview")}
              </a>
            </li>
          )}
          <li className="text-base hover:-translate-y-2 hover:text-lg hover:text-white transition-all h-7">
            <a href={github}>
              <i className="fa-brands fa-github"></i> Github
            </a>
          </li>
        </ul>
      </div>

      <div className="md:rounded-xl w-xl min-w-[300px] max-w-[500px] overflow-hidden shadow-xl self-center justify-self-center">
        {/* <a href={url}></a> */}
        <img src={img} alt={`${t("projects.alt")} ${title}`} className="object-cover w-full projectImg" />
      </div>
    </article>
  );
}

export default Project;
