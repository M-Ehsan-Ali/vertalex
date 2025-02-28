import { fetchGraphQL } from "@/utils/fetchGraphQL";

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
const News = async () => {
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

  return (
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
  );
};

export default News;
