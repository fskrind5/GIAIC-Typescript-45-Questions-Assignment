//? Governor Sindh IT Intiative Course
//* Typescript Assignment

//? Question 01: Install Node.js, TypeScript and VS Code on your computer.

//* Answer 01: Installed all of them.

//? Question 02: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

//* Answer 02: 

    let fullName : string = "Bruce Wayne"
    //there many ways to print the full name. I will be using Concatenation and Interpolation methods

    // Concatenation Method
    console.log("Hello " + fullName + ", would you like to learn some Python today?")

    // Interpolation Method
    console.log(`Hello ${fullName}, would you like to learn some Python today?`)

//? Question 03: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//* Answer 03: 

    let name1: string = "batMan"
    console.log (name1.toLowerCase())
    console.log (name1.toUpperCase())
    console.log (name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase())

//? Question 04: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//? Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//* Answer 04:
    let author: string = "Albert Einstein"
    console.log (author, `once said, "A person who never made a mistake never tried anything new."`)

//? Question 05: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

//* Answer 05:
    let famous_person: string = "Albert Einstein"
    let message: string = "A person who never made a mistake never tried anything new."

    console.log (`"${famous_person}" once said, "${message}"`) // Interpolation Method
    console.log (famous_person, "once said,", message)

//? Question 06 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//* Answer 06 : 
    let name01 : string = "\n \t batman \n \t"
    console.log (name01)
    console.log (name01.trim())

//? Question 07: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//* Answer 07: 
    console.log (4 + 4) // Addition Operation
    console.log (10 - 2) // Subtraction Operation
    console.log (4 * 2) // Multiplication Operation
    console.log (16 / 2) // Division Operation

/* //? Question 08: You should create four lines that look like this: console.log(5 + 3)
? Your output should simply be four lines with the number 8 appearing once on each line.
*/

//* Answer 08:
    console.log(1 + 7)
    console.log(2 + 6)
    console.log(4 + 4)
    console.log(0 + 8)

//? Question 09: Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

//* Answer 09:
    let favNum : number = 59
    console.log (`My favourite number is ${favNum}`) //Interpolation Method
    console.log ("My favourite number is", favNum)   //Concatenation Method

//? Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//* Answer 10: 
    //My name is Falak Sher Khan and I am writing this code on April 14, 2024
    //I am learning Typescript

    console.log (4 + 4) // Addition Operation
    console.log (10 - 2) // Subtraction Operation
    console.log (4 * 2) // Multiplication Operation
    console.log (16 / 2) // Division Operation

//? Question 11: Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

//* Answer 11:
    let names: string[] = ["Batman", "Superman", "Ironman", "Flash", "Gojo", "Geto", "Goku"]
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }

//? Question 12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//* Answer 12:
    for(let i = 0; i < names.length; i++) {
        console.log (`Hello my good friend ${names[i]}, let's protect the city together.`)
    }

//? Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

//* Answer 13:
    let transportation: string[] = ["Ferrai LaFerrai", "Bentley Continental GT", "Rolls Royce Phantom", "Lamborghini Urus", "Ducati"]
    for (let i = 0; i < transportation.length; i++) {
        console.log(`I would like to own a ${transportation[i]}`)
    }

//? Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

//* Answer 14:
    let guests: string[] = ["Batman", "Superman", "Ironman", "Flash", "Gojo", "Geto", "Goku"]
    for (let i = 0; i < guests.length; i++) {
        console.log(`I would like to invite ${guests[i]} to my dinner party.`)
    }