    <script>
            // context of narrow function
             const myArrorFunctinon1 = () => 
             {
                 alert("This is an arrow function");
             }
            // or simply
            const myArrorFunctinon2 = () => alert("This is an arrow function");
           
            // how to return a value in arrow function
            // Note: no need to write "return" keyword if we write the function in one line and without "{}"

            const myArrorFunctinon3 = () => {
                return "Returning a value 3";
            }
            // or simply
            const myArrorFunctinon4 = () => "Returning a value 4";

            // passing variables
            // case 1: if we are passing 0 or more then 1 variables, we have to use "()" 
            const myArrorFunctinon5 = () => "This is an arrow function";
            // case 2: if we are passing only 1 variable, It's not assention to use "()" 
            const myArrorFunctinon6 = userName => "Hello Mr/Mrs. "+userName;
    </script>