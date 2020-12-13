// there are some new things that we can use in ES6

	// you can use "let" keyword to diclare a variable for a particular block

	Ex:

	let x=1;
	
	if(1=1)
	{
		let x=2;
	} 

	// here both x are different

// you can use "const" keyword to diclare a variable parmanantly. means you can change the next time

	const x = 5;

// join different value without "+"

	Ex:
	
	let a = 10;
        let b = 20;
        let sum  = a + b;

        document.write(`The result is ${sum}, Yahoo`);
        // or
        document.write(`The result is ${a + b}, Yahoo`);

// new way to play with the function

	<script>

       const add = (a, b) => {
            document.write(`The result is ${a+b}`);
       }

       add(15, 22);

	</script>