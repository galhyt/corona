const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const request = require('request');
var fs = require('fs')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

// app.get('/', (req1, res1) => {
//     main()
// });

// app.listen(3001, () =>
//   console.log('Express server is running on localhost:3001')
// );

getMillDiff = (d,h,m) => {
  return (h * 3600000) + (m * 60000) - (d.getHours()*3600000 + d.getMinutes()*60000 + d.getSeconds()*1000 + d.getMilliseconds())
}

scheduledTask = () => {
  request('https://he.wikipedia.org/wiki/%D7%94%D7%AA%D7%A4%D7%A8%D7%A6%D7%95%D7%AA_%D7%A0%D7%92%D7%99%D7%A3_%D7%94%D7%A7%D7%95%D7%A8%D7%95%D7%A0%D7%94_%D7%91%D7%99%D7%A9%D7%A8%D7%90%D7%9C', { json: false }, (err, res, body) => {
    if (err) { return console.log(err); }
      const data = getDataTbl(body)
      console.log("%s no of records %d", new Date().toString(), data.length)
      exportJson(data)
    });
}

main = () => {
  const now = new Date()
  console.log(now.toString())
  if (now.getHours() < 20) {
    setTimeout(main, getMillDiff(now, 20, 5));
    return
  }
  else if (now.getHours() < 21)
    setTimeout(main, getMillDiff(now, 21, 5));
  else if (now.getHours() < 22)
    setTimeout(main, getMillDiff(now, 22, 5));
  else
    setTimeout(main, 2*3600000);

  scheduledTask()
}

main()

exportJson = data => {
  fs.writeFile("src/corona_israel.json", JSON.stringify(data), err => {
    if (err != null) throw err
  })
}

getDataTbl = txt => {
  const arr = txt.match(/\<tr\>[\w\W\r\n\s]+?\<td[\w\W\r\n\s]+?\>\d{4}\-\d{2}\-\d{2}\<\/td\>[\w\W\r\n\s]+?\<\/tr\>/g)
  var aDataTbl = []
  for(var i = 1 ; i < arr.length ; i++) {
    const dateTxt = arr[i].match(/\d{4}\-\d{2}\-\d{2}/)
    const valTxt = arr[i].match(/(\d+(,\d{3})*)(?=\<\/span\>)/)
    if (dateTxt != null) {
      const no = valTxt[0].replace(",","")
      if (Number(no) < 100) continue
      aDataTbl.push({date: dateTxt[0], sum: Number(no)})
    }
  }
  
  return aDataTbl
}