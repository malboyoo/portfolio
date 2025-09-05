import { useTranslation } from "react-i18next";

function BottomSection() {
  const { t } = useTranslation();

  return (
    <section className="bottomContainer bg-dark-2 py-5 px-10 md:px-14 flex flex-col md:flex-row md:justify-between justify-center flex-auto items-center md:items-start">
      <ul className="md:mr-5 w-[333px] py-4">
        <li className="hover:scale-110 transition-all">
          <article className="bg-dark-1 p-3 mb-5 rounded-md animate-fromBottom opacity-0">
            <div className="w-full flex justify-between items-center text-green">
              <h2 className="text-xl mb-2 mr-2">Front-end</h2>
              <div className="text-xl">
                <i className="devicon-react-original colored mr-2" title="React"></i>
                <i className="devicon-nextjs-original mr-2" title="Next.js"></i>
                <i className="devicon-vuejs-plain colored mr-2" title="Vue"></i>
                <i className="devicon-typescript-plain colored mr-2" title="Typescript"></i>
                <i className="devicon-tailwindcss-plain colored mr-2" title="TailwindCSS"></i>
              </div>
            </div>

            <p className="bg-code p-2 rounded-md text-sm text-variable codeArea">React, Next.js, shadcn/ui, Vue, Typescript, TailwindCSS</p>
          </article>
        </li>
        <li className="hover:scale-110 transition-all">
          <article className="bg-dark-1 p-3 mb-5 rounded-md animate-fromBottom animation-delay-500 opacity-0">
            <div className="w-full flex justify-between items-center  text-green">
              <h2 className="text-xl mb-2 mr-2">Back-end</h2>
              <div className="text-xl">
                <i className="devicon-nodejs-plain colored mr-2" title="NodeJS"></i>
                <i className="devicon-express-original text-white mr-2" title="Express"></i>
                <i className="devicon-mongodb-plain colored mr-2" title="MongoDB"></i>
                <i className="devicon-graphql-plain colored mr-2" title="GraphQL"></i>
                <i className="devicon-firebase-plain colored mr-2" title="Firebase"></i>
              </div>
            </div>
            <p className="bg-code p-2 rounded-md text-sm text-variable codeArea">NodeJS, Express, mongoDB, GraphQL, Firebase, Supabase</p>
          </article>
        </li>
        <li className="hover:scale-110 transition-all">
          <article className="bg-dark-1 p-3 mb-5 rounded-md animate-fromBottom animation-delay-1000 opacity-0">
            <div className="w-full flex justify-between items-center  text-green">
              <h2 className="text-xl mb-2 mr-2">{t("bottomSection.skills")}</h2>
              <div className="text-xl">
                <i className="devicon-git-plain colored mr-2" title="Git"></i>
                <i className="devicon-playwright-plain colored mr-2" title="Playwright"></i>
                <i className="devicon-jira-plain colored mr-2" title="Jira"></i>
              </div>
            </div>
            <p className="bg-code p-2 rounded-md text-sm text-variable codeArea">Git, Playwright(E2E), Scrum, Cursor, Claude Code</p>
          </article>
        </li>
      </ul>
      <div className="introduce md:w-1/2 animate-appear animation-delay-1500 opacity-0">
        <span className="text-gray my-4 block">{t("bottomSection.introduce")}</span>
        <h1 className="mb-6 text-2xl">{t("bottomSection.name")}</h1>
        <h2 className="mb-4 text-lg italic">{t("bottomSection.description")}</h2>
        <p className="text-gray mb-4 whitespace-pre-line">{t("bottomSection.longText")}</p>
      </div>
    </section>
  );
}

export default BottomSection;
