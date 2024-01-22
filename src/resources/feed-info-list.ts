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
  [
    'Adobe Experience Cloud ポッドキャスト',
    'https://www.omnycontent.com/d/playlist/12259a7b-698b-45f2-ba99-aae300e94d94/a9cb6c83-27c7-4f8f-b39e-acd900417d4f/4b904b0f-d432-4a90-be00-acd90044b764/podcast.rss',
  ],
  ['Backyard Hatena', 'https://anchor.fm/s/7aad9de4/podcast/rss'],
  ['Bizchat.Fm', 'https://anchor.fm/s/667d3c6c/podcast/rss'],
  ['Cybozu Design Podcast', 'https://feed.podbean.com/cybozudesign/feed.xml'],
  ['devchat.Fm', 'https://anchor.fm/s/3b652dc8/podcast/rss'],
  ['D.Node Cast｜エンジニアリングなはなし', 'https://anchor.fm/s/8d9decb0/podcast/rss'],
  ['few-shot.fm', 'https://anchor.fm/s/e69c9d70/podcast/rss'],
  ['LayerX NOW!', 'https://anchor.fm/s/55a49944/podcast/rss'],
  ['Note Tech Talk', 'https://anchor.fm/s/622bef64/podcast/rss'],
  ['Talks At KAUCHE', 'https://anchor.fm/s/8dcdda9c/podcast/rss'],
  ['Texta.Fm - Design And Engineering Team At PIXTA', 'https://anchor.fm/s/330a9488/podcast/rss'],
  ['UIT INSIDE', 'https://uit-inside.linecorp.com/feed.atom'],
  ['YUMEMIアート×デザイン', 'https://anchor.fm/s/98c519b0/podcast/rss'],
  [
    'ウェンズデイ・ホリデイ | WEDNESDAY HOLIDAY - 働くの実験室（仮）By SmartHR',
    'https://anchor.fm/s/9a31c780/podcast/rss',
  ],
  ['エンジニアストーリー By Qiita', 'https://rss.art19.com/engineerstory'],
  ['エンジニアリングマネージャーの問題集', 'https://rss.art19.com/engineermanager'],
  ['カミナシSaaS FM', 'https://anchor.fm/s/5ca4aa04/podcast/rss'],
  ['起業家のキモチ - かけだし起業家応援ラジオ By MIC', 'https://anchor.fm/s/34764470/podcast/rss'],
  ['聴くエンジニアType', 'https://anchor.fm/s/70ab9954/podcast/rss'],
  ['グリテンラジオ', 'https://anchor.fm/s/4c3bd64c/podcast/rss'],
  ['サイボウズ フロントエンド通信', 'https://anchor.fm/s/ec10d0c8/podcast/rss'],
  ['白金鉱業.FM', 'https://shirokane-kougyou.github.io/feed.xml'],
  ['絶望エンジニアチャンネル', 'https://anchor.fm/s/daf96c00/podcast/rss'],
  ['ほぼ週刊 ゆるふわITニュース', 'https://anchor.fm/s/d369a630/podcast/rss'],
  ['もう一度読むSRE', 'https://anchor.fm/s/6233432c/podcast/rss'],
  ['論より動くもの.Fm', 'https://anchor.fm/s/927f758c/podcast/rss'],
  ['今出川FM', 'https://anchor.fm/s/8de09a9c/podcast/rss'],
]);
