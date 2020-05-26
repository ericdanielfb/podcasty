let Parser = require('rss-parser');

let parser = new Parser();
// let url = 'https://jovemnerd.com.br/feed-nerdcast/';
// let url = 'https://www.rpgnext.com.br/category/tarrasque-na-bota/feed/';
// let url = 'https://audio.globoradio.globo.com/podcast/feed/702/o-assunto';
let url = 'https://hipsters.tech/feed/podcast/';


async function init() {
    let feed = await (await parser.parseURL(url)).items;
    // console.log(feed);
    // console.log(feed[0].enclosure.url);
    // console.log(feed[0].itunes.image);
    search('java', feed);
}


function search(term, feed) {
    let search = term.toUpperCase();
    let results = feed.filter(res => {
        return res.title && res.content &&
            (res.title.toUpperCase().includes(search) ||
                res.content.toUpperCase().includes(search));
    });
    return results;
}


init();