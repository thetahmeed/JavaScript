<body>

    <button id="button">Click me</button>

    <script>
        var theButton = document.getElementById("button");

        // first parameter is how your event will work 
        theButton.addEventListener("mouseout", function()
        {
            alert("Wow! You have clciked");
        });


        // or
        // theButton.addEventListener("click", theFunction);

        // function theFunction()
        // {
        //     alert("Wow! You have clciked")
        // }
    </script>

</body>