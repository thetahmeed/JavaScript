    <script>

        var givenNumber = prompt("Enter a digit");

        givenNumber = parseInt(givenNumber);
       
        switch(givenNumber)
        {
            case 0: // case 0 => because givenNumber is Integer. We can simply write case "0" if the givenNumber is String
                document.write("<h1>Zerro</h1>");
                break;
            case 1:
                document.write("<h1>One</h1>");
                break;
            case 2:
                document.write("<h1>Two</h1>");
                break;
            case 3:
                document.write("<h1>Three</h1>");
                break;
            case 4:
                document.write("<h1>Four</h1>");
                break;
            case 5:
                document.write("<h1>Five</h1>");
                break;
            case 6:
                document.write("<h1>Six</h1>");
                break;
            case 7:
                document.write("<h1>Seven</h1>");
                break;
            case 8:
                document.write("<h1>Eight</h1>");
                break;
            case 9:
                document.write("<h1>Nine</h1>");
                break;
            default:
                document.write("<h1>Invalid</h1>");
        }

    </script>
    
    // another example
    
    switch(givenNumber)
        {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                document.write("<h1>Vowel</h1>");
                break;
            default:
                document.write("<h1>Consonant</h1>");
        }
