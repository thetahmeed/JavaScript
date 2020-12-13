<body>
    
    <button onclick="goPrevious()">Previous</button>

    <img id="displayImage" src="images/img1.jpg" height="100" width="200"/>

    <button onclick="goNext()">Next</button>

    <br/>
    <h1 id="display"> 1 </h1>


    </div>

    <script>
       
        var int = 1;

        var displayImage = document.getElementById("displayImage");

        function goPrevious()
        {
            if (int > 1){
                int--;
            }

            document.getElementById("display").innerHTML = int;
            if(int == 1){
                displayImage.src = "images/img1.jpg";
            } else if (int == 2){
                displayImage.src = "images/img2.png";
            } else if (int == 3){
                displayImage.src = "images/img3.jpg";
            } else if (int == 4){
                displayImage.src = "images/img4.png";
            } else if (int == 5){
                displayImage.src = "images/img5.png";
            } else if (int == 6){
                displayImage.src = "images/img6.png";
            }
        }
        function goNext()
        {
            if (int < 6){
                int++;
            }

            document.getElementById("display").innerHTML = int;
            if(int == 1){
                displayImage.src = "images/img1.jpg";
            } else if (int == 2){
                displayImage.src = "images/img2.png";
            } else if (int == 3){
                displayImage.src = "images/img3.jpg";
            } else if (int == 4){
                displayImage.src = "images/img4.png";
            } else if (int == 5){
                displayImage.src = "images/img5.png";
            } else if (int == 6){
                displayImage.src = "images/img6.png";
            }
        }
    </script>

</body>