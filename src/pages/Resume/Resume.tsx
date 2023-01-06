import cvImg from "../../assets/images/cv.png";
import cvPdf from "../../assets/images/CV_Thibaut_Lefevre.pdf";

function Resume() {
  return (
    <main className="flex flex-col flex-auto items-center bg-dark-2">
      <section className=" flex flex-col items-center mt-20">
        <h1 className="text-3xl  opacity-0 animate-fromLeft">I'm looking for a job.</h1>
        <p className="text-gray mt-10  opacity-0 animate-fromRight animation-delay-800">
          My resume is entirely made with HMTL and CSS.
        </p>
        <div className="max-w-md border-gray border-2 rounded-md overflow-hidden mt-10 opacity-0 animate-fromLeft animation-delay-2000">
          <a href={cvPdf} className="cursor-pointer">
            <img src={cvImg} alt="My Resume" />
          </a>
        </div>
        <a href={cvPdf} download>
          <button className="bg-gray px-4 py-2 rounded-md mt-10 opacity-0 animate-fromBottom animation-delay-2000">
            Download in PDF format
          </button>
        </a>
      </section>
    </main>
  );
}

export default Resume;
