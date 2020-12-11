    <link rel='stylesheet' href='style.css'>
    
</head>
<body>

    <h1 id="text" class="firstStyle">The Text</h1>

    <button onclick="redClicked()">RED</button>
    <button onclick="greenClicked()">GREEN</button>
    <button onclick="blueClicked()">BLUE</button>

    <button onclick="removeStyle()">REMOVE STYLE</button>

    </div>

    <script>
        var theText = document.getElementById("text");
    
        // to add the CSS Style
        function redClicked()
        {
            theText.classList.add("redStyle");
        }
        function greenClicked()
        {
            theText.classList.add("greenStyle");
        }
        function blueClicked()
        {
            theText.classList.add("blueStyle");
        }

        // to remove the CSS style
        function removeStyle()
        {
            theText.classList.remove("blueStyle");
        }

    

    </script>