(Getting HTML elements)




// by id

   <h1 id="topSinger">Mahfujur Rahman</h1>
   
    <script>

        // using getElementById
        var gettingText = document.getElementById("topSinger");
        gettingText.innerHTML = "Hero Alom";
        // or
        document.getElementById("topSinger").innerHTML = "Hero Alom";
        
    </script>




// by tag names

<h1>Mahfujur Rahman</h1>
<h1>Dhinchak Puja</h1>
   
    <script>

        // using getElementsByTagName // 0 = index number because it returns an array
        document.getElementsByTagName("h1") [0] .innerHTML = "Hero Alom";
        
    </script>





// by class

<h1 class="singer">Mahfujur Rahman</h1>
<h1 class="singer">Dhinchak Puja</h1>
   
    <script>

        // using getElementsByTagName // 0 = index number because it returns an array
        document.getElementsByClassName("singer") [0] .innerHTML = "Hero Alom";
        
    </script>




// querySelector

<h1 id="singer">Mahfujur Rahman</h1>
<h1 class="singer">Mahfujur Rahman</h1>

    <script>

        // querySelector // to select id you have to put a extra "#" before id name
        document.querySelector("#singer").innerHTML = "Hero Alom";

        // querySelector // to select class you have to put a extra "." before id name
        document.querySelector(".singer").innerHTML = "Hero Alom";

        // querySelector // to select tag name
        document.querySelector("h1").innerHTML = "Hero Alom";
        
    </script>




// querySelector example

    <div class="my-div">

        <a href="https://google.com">Google</a>

    </div>

    <script>

        document.querySelector(".my-div a").innerHTML = "Not Google";
        
    </script>



// document.querySelectorAll

    <div class="my-div">

        <a href="https://google.com">Google</a>

    </div>

    <script>

        document.querySelectorAll(".my-div a")[0].innerHTML = "Not Google";
        


// creating a new class

   var theDiv = document.getElementById("div1").classList.add("newClass");

// removing a class

   var theDiv = document.getElementById("div1").classList.remove("newClass");


    </script>