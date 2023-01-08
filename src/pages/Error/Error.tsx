import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Error() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col flex-auto items-center justify-center bg-dark-2">
      <section className=" flex flex-col items-center justify-center mt-10 md:mt-20">
        <h1 className="text-2xl md:text-4xl  opacity-0 animate-fromLeft text-center">{t("error.error")}</h1>
        <Link to="/">
          <button className="bg-gray px-4 py-2 md:text-2xl  rounded-md my-10 opacity-0 animate-fromBottom animation-delay-500">
            {t("error.return")}
          </button>
        </Link>
      </section>
    </main>
  );
}

export default Error;
