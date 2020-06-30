const cheerio = require('cheerio');
const request = require('request');

request({
  method: 'GET',
  url: 'http://github.com/Padmakeerthi'
}, (err, res, html) => {

  if (err) return console.error(err);

  let $ = cheerio.load(html);

  let title = $('meta');

  console.log("Printing all the meta fields dynamically using a loop");
  $('meta[property^="og"]').each(function(i, e) {
    console.log(e.attribs.property + " : " + e.attribs.content);
  });

  console.log();
  console.log("Printing all the meta fields manually");
  console.log("Image : " + $('meta[property="og:image"]').attr('content'));
  console.log("Site name : " + $('meta[property="og:site_name"]').attr('content'));
  console.log("Title : " + $('meta[property="og:title"]').attr('content'));
  console.log("URL : " + $('meta[property="og:url"]').attr('content'));
  console.log("Description : " + $('meta[property="og:description"]').attr('content'));
});