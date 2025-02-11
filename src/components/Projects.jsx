import projects from "@/descriptions/projects";

const Projects = () => {
  return (
    <div className="bg-[#FEFFF6]">
      <div className="flex ml-20 min-h-screen">
        <div className="w-2/5 content-center px-8">
          <h2 className="text-[#7D688F] text-4xl font-bold my-8">Projects</h2>
          <p className="text-base font-normal my-4">
            As a SWE member, you’ll have the opportunity to lead or contribute
            to impactful projects that allow you to apply your engineering
            skills, collaborate with peers, and gain hands-on experience. From
            cutting-edge tech innovations to sustainability efforts and design
            challenges, our projects provide a platform for personal growth and
            leadership development.
          </p>
          <button className="py-4">See past projects →</button>
        </div>

        <div className="w-3/5 h-1/2 flex overflow-x-auto my-auto scrollbar-hide">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-3/5 flex-shrink-0 border-r border-neutral-600 px-10"
            >
              <h3 className="font-base py-2">{project.date}</h3>
              <img src={project.photo} />
              <h3 className="font-medium py-2">{project.caption}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
