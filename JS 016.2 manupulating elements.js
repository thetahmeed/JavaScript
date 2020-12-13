    
    <button onclick="alert('Hello')">Click me softly</button>


// or

    <button onclick="showMessage()">Click me softly</button>

    <script>

        function showMessage(){
            alert("Hello");
        }

    </script>



// another example

    <button onclick="showMessage()">Click me softly</button>

    <h3>Not clicked</h3>

    <script>
        function showMessage()
        {
            document.querySelector("h3").innerHTML = "Clicked";
        }
    </script>


// another 2

    <button onclick="showImage()">View picture</button>

    <br/>

    <img id="myImage" src="images/img1.jpg" height="200" width="300"/>

    <script>
        function showImage()
        {
            document.querySelector("#myImage").src="images/img3.jpg"
        }
    </script>


// more
    <h1 id="h1">Visit</h1>
    <a href="#" id="link">Google</a>

    <script>
       var title = document.getElementById("h1");
       title.style.color = "green";
       title.style.fontSize = "2.3rem";

       var link = document.getElementById("link");
       link.href = "http://google.com";

    </script>
