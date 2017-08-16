var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one':{
        title:'Article One | Rupesh Rathod',
        date:'Aug 12 2017',
        heading:'Article one',
        content: `<p>
                        Hi, i'm Rupesh and this is my first webapp.this is my first article.Hi, i'm Rupesh and this is my first webapp.this is my first article.Hi, i'm Rupesh and this is my first webapp.this is my first article.Hi, i'm Rupesh and this is my first webapp.this is my first article. 
                    </P>
                    <P>
                        Hi, i'm Rupesh and this is my first webapp.this is my first article.Hi, i'm Rupesh and this is my first webapp.this is my 
                        first article.Hi, i'm Rupesh and this is my first webapp.this is my first article.Hi, i'm Rupesh and this is my first weba.this is my first article.
                    </P>
                    <P>
                        Hi, i'm Rupesh and this is my first webapp.this is my first article.Hi, i'm Rupesh and this is my first webapp.this is my 
                        first article.Hi, i'm Rupesh and this is my first webapp.this is my first article.Hi, i'm Rupesh and this is my first weba.this is my first article.
                    </P>`
    },
     'article-two': {
        title: 'Article two | Rupesh Rathod',
        date:'Aug 15 2017',
        heading:'Article two',
        content: `<p>
                        Hi, i'm Rupesh and this is my first webapp.this is my Second article.Hi, i'm Rupesh and this is my first webapp.this is my Second article.Hi, i'm Rupesh and this is my first webapp.this is my Second article.
                    </P>
                    `
    },
     'article-three':{
        title: 'Article three | Rupesh Rathod',
        date:'Aug 19 2017',
        heading:'Article three',
        content: `<p>
                        Hi, i'm Rupesh and this is my first webapp.this is my article.
                    </P>
                    `
    }
    
};
function createArticleTemplate(data){
    var title =data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate=
        `<html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    var articleName = rwq.param.articleName; 
    res.send(createArticleTemplate(articles[articleName]));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
