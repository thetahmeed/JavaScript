
// almost same as for each loop but the advantage is its always return an array


    <script>
            var randomNumber = [12, 45, 77, 1, 63, 56, 120, 71];
            var theDisplay = document.getElementById("display");
            
            var newArray = randomNumber.map(function(x){
                return x*2;
            });
            
            console.log(newArray);
    </script>