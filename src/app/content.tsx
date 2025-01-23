import { fetchGraphQL } from "@/utils/fetchGraphQL";
import MovingImages from "./MovingImages";
import Testimonials from "./Testimonials/page";
import ProjectSlider from "./ourProjects";

// new interface start
interface UserImage {
  id: string;
  sourceUrl: string;
}

interface NewsImage {
  id: string;
  sourceUrl: string;
}

interface NewsDetails {
  about: string;
  description: string;
  fieldGroupName: string;
  readtime: string;
  title: string;
  username: string;
  userimage: UserImage;
  image: NewsImage;
}

interface NewsNode {
  New: NewsDetails;
}

interface GetNewsResponse {
  news: any;
  nodes: NewsNode[];
}
// new interface end

// moving image content

const images = [
  "/heroOne.jpeg",
  "heroTwo.jpeg",
  "heroThree.jpeg",
  "heroFour.jpeg",
  "heroFive.jpeg",
];
export default async function Home() {
  // news api and data fetch starts here
  const newsQuery = `
  query GetNews {
   news {
    nodes {
      New {
        about
        description
        readtime
        title
        username
        userimage {
          id
          sourceUrl
        }
        image {
          id
          sourceUrl
        }
      }
    }
  }
}`;
  let newsData: NewsDetails[] = [];

  try {
    const news: GetNewsResponse = await fetchGraphQL(newsQuery);
    newsData = news?.news.nodes.map((node: any, index: any) => ({
      key: index,
      title: node.New.title,
      about: node.New.about,
      description: node.New.description,
      readtime: node.New.readtime,
      username: node.New.username,
      userimage: node.New.userimage,
      image: node.New.image,
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
  }
  // setting last element of news to show bigger
  const lastElement: any = newsData[newsData.length - 1];
  // separating about by comma
  const aboutParts: any = lastElement.about
    .split(",")
    .map((part: any) => part.trim());
  // news api and data fetch ends here
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
    <div id="home">
      {/* Hero Section start */}
      <div className="flex flex-col-reverse sm:flex-row w-full p-[0px_18px_0px_18px] sm:p-[0px] gap-[14px] sm:gap-[0px]">
        <div className="w-full sm:w-[60%] pt-[0px] pl-[0px] pb-[32px] sm:pt-[86px] sm:pl-[112px] sm:pb-[120px]">
          <div className="flex gap-[8px]">
            <img src="/powerIcon.svg" alt="icon" />
            <p className="font-rubik text-[14px] font-medium leading-5 tracking-tight text-left decoration-skip-ink">
              Powering Tomorrow
            </p>
          </div>
          <p className="font-raleway text-[39px] sm:text-[96px] font-normal leading-[42px] sm:leading-[90px] tracking-[-0.05em] text-center sm:text-left decoration-skip-ink mt-[24px]">
            Cost Effective <br /> & CO2 Compliant
          </p>
          <p className="sm:w-[592px] font-rubik text-[10px] sm:text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-center sm:text-left decoration-skip-ink mt-[32px]">
            Crofton MEA is a UAE based consulting firm that delivers bespoke and{" "}
            catalogue aluminium extrusions and finishes of the highest quality
            at competitive prices internationally.
          </p>
          <div className="flex gap-[16px] mt-[40px] justify-center sm:justify-start">
            <button className="bg-[#445AE0] p-[8px_18px] sm:p-[16px_24px] gap-[10px] rounded-[200px] font-rubik text-[10px] sm:text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-lef text-white">
              See our solutions
            </button>
            <button className="border border-[#64ce5b] p-[8px_18px] sm:p-[16px_24px] rounded-full font-rubik font-medium text-[10px] sm:text-[18px] leading-6 tracking-tight text-[#1d1f1e] decoration-skip-ink">
              Get in touch
            </button>
          </div>
        </div>
        <div className="w-full h-[260px] sm:h-auto sm:w-[40%] bg-[#64CE5B] p-[12px] relative">
          <MovingImages images={images} interval={4000} />
          {/* <img
            src="/heroImage.png"
            alt="hero"
            className="w-full rounded-[50%]"
          /> */}

          {/* Dont delete this code we need to add this bellow comment section */}
          {/* <div className="w-fit rounded rounded-[12px] p-[8px] bg-white absolute bottom-[45px] left-[-45px] border border-[#f5f4f4] shadow-[0px_24px_32px_-12px_#364A363D]">
            <div className="flex gap-[18px] items-center">
              <img src="/aluminiumIcon.png" alt="Aluminium" />
              <p className="font-raleway text-[24px] font-black leading-[20px] tracking-[-0.004em] text-left decoration-skip-ink">
                LME Aluminium
              </p>
            </div>
            <div className="bg-[#f5f4f4] p-[12px]">
              <div className="bg-[#ffffff] flex p-[12px] gap-[123px]">
                <p className="font-rubik text-[34px] fon 9 min readt-medium leading-[20px] tracking-[-0.004em] text-left decoration-skip-ink">
                  2551.50
                </p>
                <p className="p-[2px_8px] bg-[#d6f1cf] rounded-[96px] font-figtree text-[12px] font-medium leading-[16px] text-center decoration-skip-ink">
                  0.02%
                </p>
              </div>
              <p className="font-rubik text-[12px] font-medium leading-[16px] decoration-skip-ink pt-[12px] text-[#192117]">
                3-month Closing Price (day-delayed)
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* Hero section end */}

      {/* Partner section start */}
      <div className="p-[16px_24px] sm:p-[70px_112px] flex flex-col sm:flex-row justify-between items-center mt-[40px] border border-[#D9DEDD] gap-[24px] sm:gap-[190px]">
        <p className="font-rubik text-[16px] font-medium leading-[24px] tracking-[-0.004em] text-left decoration-skip-ink text-[#262626]">
          Global partners that trusted us
        </p>
        <div className="flex gap-[40px] sm:gap-[190px]">
          <img
            src="/paradise.png"
            alt="paradise"
            className="w-[90px] h-[30px] sm:w-[120px] sm-h-[50px]"
          />
          <img
            src="/aspen.png"
            alt="aspen"
            className="w-[90px] h-[30px] sm:w-[120px] sm-h-[50px]"
          />
          <img
            src="/octagon.png"
            alt="octagon"
            className="w-[90px] h-[30px] sm:w-[120px] sm-h-[50px]"
          />
        </div>
      </div>
      {/* Partner section end */}

      {/* Why us Section start */}
      <div
        id={"why-us"}
        className="relative pl-[16px] sm:pl-[52px] pb-[66px] sm:pb-[70px]"
        style={{
          backgroundImage: `url('/whyUsMain.png')`,
        }}
      >
        <img
          src="/whyUsTop.png"
          alt="Top left"
          className="w-[170px] sm:h-auto sm:w-auto"
        />
        <p className="text-white font-raleway text-[24px] sm:text-[119px] font-bold leading-[90px] tracking-[-0.05em] text-left no-underline mt-[92px] ml-[30px]">
          Why us?
        </p>
        <p className="w-[70%] sm:w-[57%] bg-[#64ce5b] rounded-[10px] font-rubik text-[7px] sm:text-[20px] font-normal leading-[8px] sm:leading-[33px] tracking-[-0.05em] text-left no-underline p-[24px_32px] text-white mt-[20px] sm:mt-[92px]">
          Our aluminium products boast exceptional qualities, including TUV
          Verified Carbon Footprint with low-carbon billets. They are ISO
          certified (9001, 14001, and 45001) and meet the highest standards as a
          Qualicoat Seaside licensed applicator and Qualanod licensed provider.
          Additionally, they are CE certified, FPC certified, and Technoform
          Thermal Break Assembly Quality Certified, ensuring unmatched
          performance—all at highly competitive prices.
        </p>
        <img
          src="/whyUsBottom.png"
          alt="Top left"
          className="absolute right-[0px] w-[170px] sm:w-auto bottom-[-25px] sm:bottom-[-50px]"
        />
      </div>
      {/* Why us Section end */}

      {/* Key Element Section start */}
      <div className="mt-[65px] sm:mt-[194px] flex justify-center pb-[52px] sm:pb-[116px]">
        <div className="flex flex-col items-center">
          <div className="w-fit p-[8px_12px] sm:p-[7px_56px] rounded-[10px] bg-[#445ae0]">
            <p className="font-raleway text-[13px] sm:text-[70px] font-normal sm:leading-[90px] tracking-[-0.05em] text-left no-underline text-white">
              Key Elements
            </p>
          </div>
          <div>
            <div className="flex gap-[38px] sm:gap-[360px] mt-[36px] sm:mt-[90px] justify-between sm:justify-unset">
              <div className="flex flex-col items-center sm:w-[383px]">
                <img src="/TUV.svg" alt="TUV" className="w-[46px] sm:w-auto" />
                <p className="font-rubik text-[12px] sm:text-[24px] font-normal sm:leading-[90px] tracking-[-0.05em] no-underline">
                  TUV Verified Carbon Footprint
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/qualanod.svg"
                  alt="qualanod"
                  className="w-[46px] sm:w-auto"
                />
                <p className="font-rubik text-[12px] sm:text-[24px] font-normal sm:leading-[90px] tracking-[-0.05em] no-underline">
                  Qualanod Licenced CE Certified
                </p>
              </div>
            </div>
            <div className="flex gap-[38px] sm:gap-[360px] justify-between sm:justify-unset">
              <div className="flex flex-col items-center sm:w-[383px]">
                <img
                  src="/billets.svg"
                  alt="billets"
                  className="w-[46px] sm:w-auto"
                />
                <p className="font-rubik text-[12px] sm:text-[24px] font-normal sm:leading-[90px] tracking-[-0.05em] no-underline">
                  Low Carbon Billets
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/FPC.svg" alt="FPC" className="w-[46px] sm:w-auto" />
                <p className="font-rubik text-[12px] sm:text-[24px] font-normal tracking-[-0.05em] no-underline text-center">
                  FPC Certified Technoform Thermal
                  <br /> Break Assembly Quality Certified
                </p>
              </div>
            </div>
            <div className="flex gap-[38px] sm:gap-[360px] justify-between sm:justify-unset">
              <div className="flex flex-col items-center sm:w-[383px]">
                <img src="/ISO.svg" alt="ISO" className="w-[46px] sm:w-auto" />
                <p className="font-rubik text-[12px] sm:text-[24px] font-normal sm:leading-[90px] tracking-[-0.05em] no-underline">
                  ISO 9001/14001/45001 Certified
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/qualicoat.svg"
                  alt="qualicoat"
                  className="w-[46px] sm:w-auto"
                />
                <p className="font-rubik text-[12px] sm:text-[24px] font-normal sm:leading-[90px] tracking-[-0.05em] no-underline text-center">
                  Qualicoat Seaside Licenced Applicator
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/lowPrice.svg"
                alt="lowPrice"
                className="w-[46px] sm:w-auto"
              />
              <p className="font-rubik text-[12px] sm:text-[24px] font-normal sm:leading-[90px] tracking-[-0.05em] no-underline text-center">
                Low Prices
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Key Element Section end */}

      {/* Join The Green moment Section start */}
      <div className="flex bg-[#64CE5B] justify-between">
        <div className="p-[36px_12px] sm:p-[72px_112px]">
          <div>
            <p className="font-raleway test-[14px] sm:text-[78px] font-normal sm:leading-[68px] tracking-[-0.03em] text-left no-underline tex-[#262626]">
              Join the green <br /> movement
            </p>
            <p className="font-rubik text-[8px] sm:text-[18px] font-normal leading-[11px] sm:leading-[26px] tracking-[-0.004em] text-left no-underline text-white mt-[24px]">
              Through sustainable aluminium production, we are shaping a
              cleaner,
              <br /> greener, and healthier planet.
            </p>
            <button className="bg-[#445ae0] rounded-[200px] p-[6px_24px] sm:p-[16px_24px] font-figtree text-[11px] sm:text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-left no-underline text-white mt-[40px]">
              Get in touch
            </button>
          </div>
        </div>
        <img
          src="/JoinGreen.png"
          alt="green"
          className="w-[45%] sm:h-[452px]"
        />
      </div>
      {/* Join The Green moment Section end */}

      {/* Our Project Section start */}
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
      {/* Our Project Section end */}
      <img
        src="/aboveNews.png"
        alt="png"
        className="w-[50%] sm:w-auto mt-[76px] mb-[54px] sm:mt-[121px] sm:mb-[100px]"
      />

      {/* News section start */}
      <div className="px-[16px] sm:px-[112px]" id={"in-news"}>
        <div className="flex justify-between items-center">
          <p className="font-raleway text-[24px] sm:text-[62px] font-medium sm:leading-[68px] tracking-[-0.03em] text-left no-underline">
            News
          </p>
          <button className="p-[6px_12px] sm:p-[16px_24px] rounded-[200px] border border-[#64ce5b] flex items-center gap-[8px] font-figtree text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-left no-underline">
            See All <img src={`/tailIcon.svg`} alt="Tail" />
          </button>
        </div>
        <div className="mt-[88px] flex flex-col sm:flex-row justify-between gap-[32px]">
          <div className="sm:w-[60%]">
            <img
              src={lastElement.image.sourceUrl}
              alt={lastElement.image.id}
              className="w-full rounded-[16px]"
            />
            <div className="flex gap-[8px] mt-[32px]">
              {aboutParts.map((part: any, index: any) => (
                <div
                  key={index}
                  className="w-fit font-figtree border border-[D9dedd] rounded-[20px] p-[2px_8px] text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-center no-underline"
                >
                  {part}
                </div>
              ))}
            </div>
            <p className="font-roboto text-[24px] sm:text-[45px] font-normal sm:leading-[52px] text-[#1d1f1e] text-center sm:text-left no-underline mt-[24px]">
              {lastElement.title}
            </p>
            <p className="font-figtree text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-left no-underline text-[#646a69] mt-[24px]">
              {lastElement.description}
            </p>
            <div className="flex gap-[16px] justify-center sm:justify-start items-center mt-[24px]">
              <img
                src={lastElement.userimage.sourceUrl}
                alt={lastElement.userimage.id}
                className="w-[40px] h-[40px] rounded-[50%]"
              />
              <p className="font-figtree text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                {lastElement.username}
              </p>
              <div className="w-[4px] h-[4px] bg-[#929c9a]"></div>
              <p className="font-figtree text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                {lastElement.readtime}
              </p>
            </div>
          </div>
          <div className="sm:w-[41%] flex flex-col gap-[16px] sm:gap-[32px] mt-[42px] sm:mt-[0px]">
            {newsData?.map((item, index) => (
              <div key={index} className="flex gap-[12px] sm:gap-[32px]">
                <img
                  src={item.image.sourceUrl}
                  alt={item.image.id}
                  className="w-[120px] sm:w-[177px] h-[120px] sm:h-[177px] rounded-[16px]"
                />
                <div>
                  <p className="font-figtree text-[14px] sm:text-[24px] font-medium sm:leading-[36px] tracking-[-0.01em] text-center sm:text-left no-underline">
                    {item.title}
                  </p>
                  <div className="flex gap-[10px] sm:gap-[16px] items-center mt-[24px]">
                    <img
                      src={item.userimage.sourceUrl}
                      alt={item.userimage.id}
                      className="w-[32px] h-[32px] rounded-[50%]"
                    />
                    <p className="font-figtree text-[11px] sm:text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                      {item.username}
                    </p>
                    <div className="hidden sm:block w-[4px] h-[4px] bg-[#929c9a]"></div>
                    <p className="font-figtree text-[11px] sm:text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                      {item.readtime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* News Section end */}

      {/* Testimonial Section start */}
      <Testimonials />
      {/* Testimonial Section end */}

      {/* Source for Aluminium Section start */}
      <div className="p-[18px_50px] sm:p-[64px_96px] bg-[#54ce5b] mt-[56px] sm:mt-[170px]">
        <div className="flex flex-col gap-[24px] sm:flex-row justify-between items-center">
          <p className="sm:w-[540px] font-Raleway text-[16px] sm:text-[62px] font-medium sm:leading-[68px] tracking-[-0.03em] text-left no-underline text-white">
            Your Source For Aluminum Updates
          </p>
          <div className="flex gap-[8px]">
            <input
              type="text"
              className="sm:w-[330px] shadow-[0px_1px_2px_0px_#022C2214] p-[10px_18px] sm:p-[16px_20px] rounded-[200px] font-figtree text-[12px] sm:text-base font-normal sm:leading-6 tracking-tighter text-left text-[#646a69]"
              placeholder="Your e-mail..."
            />
            <button className="whitespace-nowrap bg-[#445ae0] p-[8px_16px] sm:p-[16px_32px] rounded-[200px] font-figtree text-[13px] sm:text-lg font-medium sm:leading-6 tracking-tighter text-left text-white cursor-pointer">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      {/* Source for Aluminium Section end */}
    </div>
  );
}
