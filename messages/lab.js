request = new XMLHttpRequest();

request.open("GET", "data.json", true);

request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
                message = "";
                raw = request.responseText;
                data = JSON.parse(raw);
                elem = document.getElementById("messages");
                for (i = 0; i < data.length; i++) {
                        message += "<p>" + data[i]["content"] + " " + data[i]["username"] + "</p>";
                }
                elem.innerHTML = message;
        } else if (request.readyState == 4 && request.status != 200) {
                document.getElementById("messages").innerHTML = "<p> Failed to load data</p>";
        }
};

request.send(null);