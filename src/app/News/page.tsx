import { getNews } from "@/data";

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
  readtime: string;
  title: string;
  username: string;
  userimage: UserImage;
  image: NewsImage;
}

const News = async () => {
  const news = getNews();
  const newsData: NewsDetails[] = (news?.news?.nodes ?? []).map((node: any, index: number) => ({
    key: index,
    title: node.New.title,
    about: node.New.about,
    description: node.New.description,
    readtime: node.New.readtime,
    username: node.New.username,
    userimage: node.New.userimage,
    image: node.New.image,
  }));

  if (newsData.length === 0) {
    return (
      <div className="px-[16px] xl:px-[112px]" id="in-news">
        <p className="font-raleway text-[24px] xl:text-[62px] font-medium">News</p>
        <p className="mt-4 text-[#646a69]">No news items yet. Add entries in src/data/index.ts.</p>
      </div>
    );
  }

  const lastElement = newsData[newsData.length - 1];
  const aboutParts = lastElement.about
    .split(",")
    .map((part: string) => part.trim());

  return (
    <div className="px-[16px] xl:px-[112px]" id={"in-news"}>
      <div className="flex justify-between items-center">
        <p className="font-raleway text-[24px] xl:text-[62px] font-medium xl:leading-[68px] tracking-[-0.03em] text-left no-underline">
          News
        </p>
        <button className="p-[6px_12px] xl:p-[16px_24px] rounded-[200px] border border-[#64ce5b] flex items-center gap-[8px] font-figtree text-[18px] font-medium leading-[24px] tracking-[-0.004em] text-left no-underline">
          See All <img src={`/tailIcon.svg`} alt="Tail" loading="lazy" />
        </button>
      </div>
      <div className="mt-[88px] flex flex-col xl:flex-row justify-between gap-[32px]">
        <div className="xl:w-[60%]">
          <img
            src={lastElement.image.sourceUrl}
            alt={lastElement.image.id}
            loading="lazy"
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
          <p className="font-roboto text-[24px] xl:text-[45px] font-normal xl:leading-[52px] text-[#1d1f1e] text-center xl:text-left no-underline mt-[24px]">
            {lastElement.title}
          </p>
          <p className="font-figtree text-[18px] font-normal leading-[26px] tracking-[-0.004em] text-left no-underline text-[#646a69] mt-[24px]">
            {lastElement.description}
          </p>
          <div className="flex gap-[16px] justify-center xl:justify-start items-center mt-[24px]">
            <img
              src={lastElement.userimage.sourceUrl}
              alt={lastElement.userimage.id}
              loading="lazy"
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
        <div className="xl:w-[41%] flex flex-col gap-[16px] xl:gap-[32px] mt-[42px] xl:mt-[0px]">
          {newsData?.map((item, index) => (
            <div key={index} className="flex gap-[12px] xl:gap-[32px]">
              <img
                src={item.image.sourceUrl}
                alt={item.image.id}
                loading="lazy"
                className="w-[120px] xl:w-[177px] h-[120px] xl:h-[177px] rounded-[16px]"
              />
              <div>
                <p className="font-figtree text-[14px] xl:text-[24px] font-medium xl:leading-[36px] tracking-[-0.01em] text-center xl:text-left no-underline">
                  {item.title}
                </p>
                <div className="flex gap-[10px] xl:gap-[16px] items-center mt-[24px]">
                  <img
                    src={item.userimage.sourceUrl}
                    alt={item.userimage.id}
                    loading="lazy"
                    className="w-[32px] h-[32px] rounded-[50%]"
                  />
                  <p className="font-figtree text-[11px] xl:text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
                    {item.username}
                  </p>
                  <div className="hidden xl:block w-[4px] h-[4px] bg-[#929c9a]"></div>
                  <p className="font-figtree text-[11px] xl:text-[14px] font-medium leading-[20px] tracking-[-0.004em] text-left no-underline">
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
