import { fetchGraphQL } from "@/utils/fetchGraphQL";
import ProjectSlider from "../ourProjects";

const OurProjects = async () => {
  const projectsQuery = `
    query GetProjects {
    projects {
      nodes {
        projects {
          color
          description
          title
          image {
            id
            sourceUrl
          }
        }
      }
    }
  }`;
  let projectData: any[] = [];
  try {
    const projects: any = await fetchGraphQL(projectsQuery);
    projectData = projects?.projects.nodes.map((node: any, index: any) => ({
      key: index,
      title: node.projects.title,
      description: node.projects.description,
      image: node.projects.image,
      color: node.projects.color,
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
  }
  return (
    <div
      className="flex flex-col items-center mt-[50px] sm:mt-[175px]"
      id="our-projects"
    >
      <div className="w-fit p-[8px_12px]  sm:p-[7px_62px] rounded-[10px] bg-[#64ce5b]">
        <p className="font-raleway text-[17px] sm:text-[70px] font-normal sm:leading-[90px] tracking-[-0.05em] text-left no-underline text-white">
          Our Projects
        </p>
      </div>
      <ProjectSlider projectData={projectData} />
    </div>
  );
};

export default OurProjects;
