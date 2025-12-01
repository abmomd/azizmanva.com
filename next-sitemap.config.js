/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://azizmanva-com-preview.vercel.app',
  generateRobotsTxt: false, // because you're serving one from /public
  changefreq: 'weekly',
  priority: 0.7,
  additionalPaths: async (config) => {
    const { default: notesData } = await import('./src/data/notesData.js');
    return notesData.map((note) => ({
      loc: `/notes/${note.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
    }));
  },
};
