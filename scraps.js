const request=require('request');
const cheerio=require('cheerio');
const fs=require('fs');
const writeStream=fs.createWriteStream('post.text');

request('https://www.lynda.com/subject/all',(error,response,html)=>{
  if(!error && response.statusCode== 200){
   const $= cheerio.load(html);
   const courses=$('.content a').each((i,el)=>{
    const item =$(el).text();
   writeStream.write(item);
   console.log('done scrapping');
   });
  }
  else{
    console.log(error);
  }
});
