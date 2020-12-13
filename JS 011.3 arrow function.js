    <script>
        var studentInfo = 
        // it's an array "[... ...]"
        [
            // it's an object "{... ...}"
            {
                id: 001,
                name: "Tahemeedul Islam",
                result: 2.3 
            },
            {
                id: 002,
                name: "Sahemeedul Islam",
                result: 4.6 
            },
            {
                id: 003,
                name: "Uahemeedul Islam",
                result: 4.5 
            },
            {
                id: 004,
                name: "Vahemeedul Islam",
                result: 3.3
            }
        ]

        const filteredData = () => studentInfo.filter((x) => x.result >4).map((y) => y.name);

        console.log(filteredData());

    </script>