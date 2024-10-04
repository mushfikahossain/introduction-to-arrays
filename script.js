//Part 1
console.log("Part 1: Declaring Arrays")

    let fruits = ["1. Apple", "2. Banana", "3. Orange", "4. Grapes", "5. Mango"]
    console.log(fruits)

console.log(" ")
//part 2
console.log("Part 2: Accessing Arrays")

    let firstElement = fruits[0]
    let secondElement = fruits[2]
    let thirdElement = fruits[4]
    console.log("First element of the array: " + firstElement)
    console.log("Middle element of the array: " + secondElement)
    console.log("Last element of the array: " + thirdElement)

console.log(" ")
//part 3
console.log("Part 3: Using Array Properties")

    console.log("Number of elements in the array: " + fruits.length)

console.log(" ")
//part 4
console.log("Part 4: Array Methods")

    //slice method
    console.log("Method 1: .slice()")
    let bestFruit = fruits.slice(4)
    console.log("Best fruit only: ", bestFruit)

    //pop method
    console.log("Method 2: .pop()")
    let fifthFruit = fruits.pop();
    console.log("Removing last fruit: " + fifthFruit )
    console.log("Updated array: ", fruits)

    //push method
    console.log("Method 3: .push()")
    let sixthFruit = "6. Cherry"
    fruits.push(sixthFruit)
    console.log("Adding 6th fruit: " + sixthFruit)
    console.log("Updated array: ", fruits)


console.log(" ")
//part 5
console.log("Part 5: Iterating Through Arrays")

    let iterator = fruits.values()
    console.log("Logging each element: ")

    for (let value of iterator) {
        console.log(value)
    }

console.log(" ")
//part 6
console.log("Part 6: Array Destructuring")

    let [firstFruit, secondFruit] = fruits;
    console.log("First two elements: ")
    console.log(firstFruit)
    console.log(secondFruit)
    console.log("Rest of the elements: ")
    let [first, second, ...rest] = fruits;
    console.log(rest)
