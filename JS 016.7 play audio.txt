    <button class="myButton">Music 1</button> <br/><br/>
    <button class="myButton">Music 2</button> <br/><br/>
    <button class="myButton">Music 3</button>

    <script>

            for(var i=0; i<=3; i++)
            {
                
                var myB = document.querySelectorAll(".myButton") [i];
                myB.addEventListener("click", function()
                {
                    var text = this.innerHTML;
                    switch(text)
                    {
                        case "Music 1":
                            var audio = new Audio('music/m1.mp3');
                            audio.play();
                            break;
                        case "Music 2":
                            var audio = new Audio('music/m2.mp3');
                            audio.play();
                            break;
                        case "Music 3":
                            var audio = new Audio('music/m3.mp3');
                            audio.play();
                            break;
                    }
                });
            }

    </script>