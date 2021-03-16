window.onload = function() {
    let pageHead = "<link href=\'page.css\' rel=\'stylesheet\' type=\'text/css\'>" +
                "<meta charset=\'UTF-8\'>" + 
                "<title>Hello World!</title>" +
                "<meta http-equiv=\'Content-Security-Policy\' content=\'script-src \'self\' \'unsafe-inline\'; \' />"
    let pageBody = "<div class=\'testbox\' style=\'width: 100%; height: 100%\'><h1>Player information</h1><form action=\'/\'><hr>" +
                "<input type=\'text\' name=\'name\' id=\'name\' placeholder=\'First name\' required/>" +
                "<input type=\'text\' name=\'name\' id=\'name\' placeholder=\'Last name\' required/><hr>" +
                "<div class=\'hand\'>" +
                "<input type=\'radio\' value=\'None\' id=\'left\' name=\'hand\' checked/><label for=\'left\' class=\'radio\'>Left-handed</label>" +
                "<input type=\'radio\' value=\'None\' id=\'right\' name=\'hand\'/><label for=\'right\' class=\'radio\'>Right-handed</label>" +
                "</div><hr></form></div>"
    document.getElementById("one").addEventListener("click", function() {
        document.getElementById("first").style.display = "none";
        document.head.innerHTML = pageHead;
        document.body.innerHTML = pageBody + "<button id=\'detect\'>Submit</button>";

        document.getElementById("detect").addEventListener("click", function() {
            const {PythonShell} = require('python-shell');
    
            PythonShell.run('detect.py', null, function(err, results) {
                if (err) throw err;
                console.log(`${results}`);
            })
        });

    })
    document.getElementById("two").addEventListener("click", function() {
        document.getElementById("first").style.display = "none";
        document.head.innerHTML = pageHead;
        document.body.innerHTML = pageBody + pageBody + "<button id=\'detect\'>Submit</button>";

        document.getElementById("detect").addEventListener("click", function() {
            const {PythonShell} = require('python-shell');
    
            PythonShell.run('detect.py', null, function(err, results) {
                if (err) throw err;
                console.log(`${results}`);
            })
        });
    })
    document.getElementById("four").addEventListener("click", function() {
        document.getElementById("first").style.display = "none";
        document.head.innerHTML = pageHead;
        document.body.innerHTML = "<div class=\'break\'>" + pageBody + pageBody + "</div>" + 
                                "<div class=\'break\'>" + pageBody + pageBody + "</div>" + "<button id=\'detect\'>Submit</button>";

        document.getElementById("detect").addEventListener("click", function() {
            const {PythonShell} = require('python-shell');

            PythonShell.run('detect.py', null, function(err, results) {
                if (err) throw err;
                console.log(`${results}`);
            })
        });
    })
};