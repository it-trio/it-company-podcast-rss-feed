const siteUrlStem = 'https://it-trio.github.io/it-company-podcast-rss-feed';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // サイト設定
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: 'IT企業のポッドキャストRSS',
  siteDescription: 'IT企業のポッドキャストの更新をまとめたRSSフィードを配信しています',

  // フィード設定
  feedTitle: 'IT企業のポッドキャストRSS',
  feedDescription: 'IT企業のポッドキャストの更新をまとめたRSSフィード',
  feedLanguage: 'ja',
  feedCopyright: 'it-trio/it-company-podcast-rss-feed',
  feedGenerator: 'it-trio/it-company-podcast-rss-feed',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'Spice-Z',
  gitHubUserUrl: 'https://github.com/Spice-Z/',
  gitHubRepositoryUrl: 'https://github.com/it-trio/it-company-podcast-rss-feed/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; it-trio/it-company-podcast-rss-feed',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    'https://github.com/yamadashy/tech-blog-rss-feed#%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE%E8%BF%BD%E5%8A%A0%E6%96%B9%E6%B3%95',
};
