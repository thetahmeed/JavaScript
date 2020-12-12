    <h1 id="display">0</h1>

    <script>

        var theText = document.getElementById("display");

        document.addEventListener("keypress", function(event)
        {
            var keyValue = event.key;
            theText.innerHTML = keyValue;
            
        });

    </script>