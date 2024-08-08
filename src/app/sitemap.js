const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// Example array of URLs
const links = [
  { url: '/', changefreq: 'daily', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  // Add more URLs here
];

const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: 'https://yourwebsite.com' });
  const data = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(data);
  writeStream.end();
};

generateSitemap().catch((err) => {
  console.error(err);
});
