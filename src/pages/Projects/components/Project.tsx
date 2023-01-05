function Project({
  title,
  url,
  github,
  img,
  description,
  made,
}: {
  title: string;
  url: string;
  github: string;
  img: string;
  description: string;
  made: React.ReactElement[];
}) {
  return (
    <section className="py-5 px-5 md:pt-10 md:px-14 flex flex-col items-center mt-5">
      <div className="rounded-xl w-xl min-w-[300px] max-w-[500px] overflow-hidden shadow-xl">
        <a href={url}>
          <img src={img} alt={title} className="object-cover w-full" />
        </a>
      </div>
      <div className="max-w-xl">
        <span className="text-4xl my-2 text-green flex flex-row items-center justify-center">
          {made.map((el) => el)}
        </span>

        <hr className="mb-2 border-none h-[2px] rounded-md bg-gray" />

        <p className="italic text-gray my-5">{description}</p>

        <hr className="mb-2 border-none h-[2px] rounded-md bg-gray" />

        <ul className="text-green flex justify-center">
          <li className="m-4">
            <a href={url} className="hover:underline hover:scale-110 hover:text-white text-base">
              <i className="fa-solid fa-link"></i> Preview
            </a>
          </li>
          <li className="m-4">
            <a href={github} className="hover:underline hover:text-white text-base">
              <i className="fa-brands fa-github"></i> Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Project;
