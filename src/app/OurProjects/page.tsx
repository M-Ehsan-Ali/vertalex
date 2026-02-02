import { getProjects } from "@/data";
import ProjectSlider from "../ourProjects";

const OurProjects = async () => {
  const projects = getProjects();
  const projectData = projects?.projects?.nodes?.map((node: any, index: number) => ({
    key: index,
    title: node.projects.title,
    description: node.projects.description,
    image: node.projects.image,
    color: node.projects.color,
  })) ?? [];
  if (projectData.length === 0) return null;

  return (
    <div
      className="flex flex-col items-center mt-[50px] xl:mt-[175px]"
      id="our-projects"
    >
      <div className="w-fit p-[8px_12px]  xl:p-[7px_62px] rounded-[10px] bg-[#64ce5b]">
        <p className="font-raleway text-[17px] xl:text-[70px] font-normal xl:leading-[90px] tracking-[-0.05em] text-left no-underline text-white">
          Our Projects
        </p>
      </div>
      <ProjectSlider projectData={projectData} />
    </div>
  );
}

export default OurProjects
