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

// フィード情報一覧。アルファベット-50音順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['番組名', 'RSS/AtomフィードのURL'],
  ['10X.fm', 'https://anchor.fm/s/559fd878/podcast/rss'],
  ['LayerX NOW!', 'https://anchor.fm/s/55a49944/podcast/rss'],
  ['Texta.Fm - Design And Engineering Team At PIXTA', 'https://anchor.fm/s/330a9488/podcast/rss'],
  ['UIT INSIDE', 'https://uit-inside.linecorp.com/feed.atom'],
  ['聴くエンジニアType', 'https://anchor.fm/s/70ab9954/podcast/rss'],
  ['グリテンラジオ', 'https://anchor.fm/s/4c3bd64c/podcast/rss'],
  ['サイボウズ フロントエンド通信', 'https://anchor.fm/s/ec10d0c8/podcast/rss'],
  ['白金鉱業.FM', 'https://shirokane-kougyou.github.io/feed.xml'],
  ['絶望エンジニアチャンネル', 'https://anchor.fm/s/daf96c00/podcast/rss'],
]);
