let Parser = require('rss-parser');
// let convert = require('xml-js');

let parser = new Parser();
let url = 'https://jovemnerd.com.br/feed-nerdcast/';
// let url = 'https://www.rpgnext.com.br/category/tarrasque-na-bota/feed/';
// let url = 'https://audio.globoradio.globo.com/podcast/feed/702/o-assunto';
// let url = 'https://hipsters.tech/feed/podcast/';


async function init() {
    let feed = await (await parser.parseURL(url)).items;
    // console.log(feed);
    // console.log(feed[0].enclosure.url);
    console.log(feed[0].itunes.image);
}


function searchTitle(title, feed){

}


init();