    <input type="text" id="inputBoxID"/>
    <button id="button1">Submit</button>

    <script>
        var button1 = document.querySelector("#button1");
        button1.addEventListener("click", function()
        {
            var inputBox1 = document.querySelector("#inputBoxID").value;
            try
            {
                if (inputBox1 > 10){
                    // here we are using throw to make an self made error to validate something
                    throw "Write a number less then 10";
                } else if (inputBox1 < 5){
                    throw "Write a number more then 5";
                }else{
                    alert("Your number is "+inputBox1);
                }
            }
            catch(err)
            {
                alert("Error: "+err)
            }
        });
    </script>