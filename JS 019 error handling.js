    <script>
        // we can use "try", "catch" and "finally" keyword to handle run time error
        // it does not work on systex error
        try
        {
            // all code will be here bugged or bugged free 
            alert("One");
            alert(x);
        }catch (err)
        {
            // catch will be call if compiler get any error
            alert("Error: "+err)
        }finally
        {
            // we can use "finally" keyword if we want run a code it doesn't matter there is error or not 
            alert("Two");
        }
    </script>