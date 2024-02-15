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
// ITトリオの日常はアピールのため先頭に置いています。聞いてね！
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['番組名', 'RSS/AtomフィードのURL'],
  ['ITトリオの日常 ~エンジニア3人がカジュアルに学びを深めるラジオ~', 'https://rss.art19.com/it-pitpa'],
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
  ['30代デザイナーのゆるらじお', 'https://stand.fm/rss/6342440a8fc92d08ba90ce3f'],
  ['AFTERNOON RADIO「デザインのよみかた」', 'https://anchor.fm/s/45d220f4/podcast/rss'],
  ['ajitofm', 'https://ajito.fm/index.xml'],
  ['aozora.fm', 'https://fortegp05.github.io/aozorafm/feed.xml'],
  ['backspace.fm', 'https://rss.art19.com/backspace'],
  ['BTRAXのCEOによるサンフランシスコ・デザイントーク', 'https://anchor.fm/s/e5f60ec4/podcast/rss'],
  ['e34.fm', 'https://e34.fm/rss.xml'],
  ['EM.FM', 'https://anchor.fm/s/70a2c40/podcast/rss'],
  ['engineer meeting podcast', 'https://feeds.soundcloud.com/users/soundcloud:users:117239062/sounds.rss'],
  ['fukabori.fm', 'https://rss.art19.com/fukabori'],
  ['Good News for Cities〜都市に関する炉辺談話', 'https://anchor.fm/s/1b8386f8/podcast/rss'],
  ['Image Cast - 技術・デザイン・制作・表現の雑談', 'https://anchor.fm/s/3f0f1de4/podcast/rss'],
  ['kkeethのエンジニア雑談チャンネル', 'https://rss.art19.com/kkeethengineers'],
  ['London Tech Talk', 'https://anchor.fm/s/d904331c/podcast/rss'],
  ['ManaのWebクリエイターカフェ', 'https://rss.art19.com/webcreatorcafe'],
  ['Misreading Chat', 'https://misreading.chat/category/episodes/feed/'],
  ['mozaic.fm', 'http://feed.mozaic.fm/'],
  ['Pod De Engineer', 'https://anchor.fm/s/12948d58/podcast/rss'],
  ['Rebuild', 'https://feeds.rebuild.fm/rebuildfm'],
  ['resize.fm', 'https://anchor.fm/s/416f2048/podcast/rss'],
  ['Tech系フリーランスが選ぶ最近の気になるトピックス(テクフリ)', 'https://rss.art19.com/techfree'],
  ['Today I Learned', 'https://anchor.fm/s/367f0040/podcast/rss'],
  ['web3FM', 'https://anchor.fm/s/5d5ba88/podcast/rss'],
  ['Work In Progress', 'https://anchor.fm/s/1726edc0/podcast/rss'],
  ['Yarukinai.fm', 'http://yarukinai.fm/feed.xml'],
  ['YOWATARI RADIO', 'https://anchor.fm/s/d3754aa8/podcast/rss'],
  ['あべこべコンビのクリエイティブトーク', 'https://anchor.fm/s/e5bd4288/podcast/rss'],
  ['いつものデザインのはなし', 'https://anchor.fm/s/dd40bdb0/podcast/rss'],
  ['銀の弾丸ラジオ', 'https://anchor.fm/s/13df46f8/podcast/rss'],
  ['ぐんぐんfm', 'https://anchor.fm/s/b4cfa51c/podcast/rss'],
  ['エンジニア視点でライフハックするためのラジオ', 'https://rss.art19.com/try-catch'],
  ['エンジニアと人生', 'https://rss.art19.com/shu223'],
  ['知らんがなラジオ', 'https://anchor.fm/s/27ac9974/podcast/rss'],
  ['セキュリティのアレ', 'https://www.tsujileaks.com/?feed=podcast'],
  ['たまにデザインFM', 'https://anchor.fm/s/216ede50/podcast/rss'],
  ['だらだらデザイン', 'https://anchor.fm/s/ede071d8/podcast/rss'],
  ['デザイナーの給湯室', 'https://anchor.fm/s/79493a58/podcast/rss'],
  ['デザぽ／デザインがしたい人のためのポッドキャスト', 'https://anchor.fm/s/ac6beb24/podcast/rss'],
  ['なそとオカウチワニのテストラジオ', 'https://testradio.fm/feed/podcast/'],
  ['なにからデザイン', 'https://anchor.fm/s/94f122fc/podcast/rss'],
  ['バンクーバーのえんじに屋', 'https://rss.art19.com/vancouverengineers'],
  ['ひとくちPKI', 'https://anchor.fm/s/42b89b8c/podcast/rss'],
  ['ひまじんプログラマーの週末エンジニアリングレッスン', 'https://rss.art19.com/07ef6b45-d4fc-4d94-b211-e02a27b7e2a6'],
  ['フムフムエフエム by @takejune', 'https://anchor.fm/s/5c16f0c4/podcast/rss'],
  ['プログラミング初心者のための ナンチャッテ・ラジオ', 'http://9chat-e.mynt.work/?f=rss_radio'],
  ['プログラム雑談', 'https://anchor.fm/s/68ce140/podcast/rss'],
  ['ほっとテック', 'https://anchor.fm/s/86693634/podcast/rss'],
  ['ものづくりnoラジオ', 'https://anchor.fm/s/bbb92038/podcast/rss'],
  ['リファクタリングとともに生きるラジオ', 'https://anchor.fm/s/ed31ece4/podcast/rss'],
  ['ゆるふわPodcast', 'https://yuru28.com/feed'],
]);
