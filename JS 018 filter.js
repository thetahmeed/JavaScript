    <script>
            var randomNumber = [12, 45, 77, 1, 63, 56, 120, 71];
            var theDisplay = document.getElementById("display");
            
            var newArray = randomNumber.filter(function(x)
		{
                return x>50;
            });
            
            console.log(newArray);
    </script>