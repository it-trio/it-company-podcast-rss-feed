export const FLAG_ZENN_PUBLICATION: unique symbol = Symbol('Zenn Publication');
type FEED_INFO_FLAG = typeof FLAG_ZENN_PUBLICATION;

export type FeedInfo = {
  label: string;
  url: string;
  flags?: FEED_INFO_FLAG[];
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string, flags?: FEED_INFO_FLAG[]][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url, flags] of feedInfoTuples) {
    feedInfoList.push({ label, url, flags });
  }

  return feedInfoList;
};

// フィード情報一覧。アルファベット順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['番組名', 'RSS/AtomフィードのURL'],
  ['10X.fm', 'https://anchor.fm/s/559fd878/podcast/rss'],
  ['UIT INSIDE','https://uit-inside.linecorp.com/feed.atom'],
  ['グリテンラジオ','https://anchor.fm/s/4c3bd64c/podcast/rss'],
  ['聴くエンジニアType','https://anchor.fm/s/70ab9954/podcast/rss'],
]);

