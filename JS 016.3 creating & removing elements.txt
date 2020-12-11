    <div id="div1" style="background-color: yellow;">

        <h1>Bangla</h1>
        <h1>English</h1>

    </div>

    <script>
       // creating an elemenets Ex: h1
var heading = document.createElement("h1");

// creating a text
var text = document.createTextNode("Spanish");

// joining text to the element
heading.appendChild(text);

// adding to the HTML
var theDiv = document.getElementById("div1");
theDiv.appendChild(heading);
    

    //removing elements
    var removeEnglish = document.getElementById("iamEnglish");

    theDiv.removeChild(removeEnglish);


	    // adding in a particular place
        var heading0 = document.createElement("h1");
        var text0 = document.createTextNode("Hindi");
        heading0.appendChild(text0);

        var positionOfEnglish = document.getElementById("iamEnglish");
        // first parameter is which value you want to add second parameter is where you want to add
        theDiv.insertBefore(heading0, positionOfEnglish);


</script>