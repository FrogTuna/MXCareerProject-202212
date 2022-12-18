//Github: FrogTuna
//moxue: 阿尔维斯
//name: Yicong Li

// Q1
function daffodils(numbers){
        
    //verify if input is integer
    if(Number.isInteger(numbers)){
        let numberString = numbers.toString()
        if(numberString.length == 3){
            let splitArray = []
            for (let i = 0; i < numberString.length; i++){
                splitArray.push(Number(numberString.charAt(i)))
            }
            
            //result
            isDaffodils = 0
            for (let j = 0; j < splitArray.length; j++){
                isDaffodils += splitArray[j] ** 3
            }
            
            //check if the number is daffodils
            if(isDaffodils == numbers){
                console.log("true")
            }else{
                console.log("false")
            }
        }
        //less or more than three lengths
        else{
            console.log("only three digits")
        }
    // invailed integer
    }else{
        console.log("invalid numbers")
    }
}

//daffodils(153)
//daffodils(152)
//daffodils(15322)


// ------------------------------------------ //

// Q2
function majorityElement(array){

    //hashmap
    let myHashMap = new Map()
    for(var i = 0; i < array.length; i++){
        if(myHashMap.has(array[i])){
             myHashMap.set(array[i], myHashMap.get(array[i])+1)       
        }
        else{
            myHashMap.set(array[i],1)
        }
    }
   //console.log(myHashMap)

   //count the occured number of each digit 
   let countArray = []
   myHashMap.forEach((key, value) => {
        countArray.push(key)
   })

   //sort
   let sortCountArray = countArray.sort()

   //reverse it and get the first element(0) -> the corresponding key of the first element will be majority element
   let newCountArray = sortCountArray.reverse()
   //console.log(newCountArray)
   //console.log(getByValue(myHashMap, newCountArray[0]))


   return getByValue(myHashMap, newCountArray[0])
}

//get its key when i only know the value in hashmap
function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
}

//majorityElement([3,2,3])
//majorityElement([2,2,1,1,1,2,2])





// ------------------------------------------ //


// Q3
function validParentheses(array){

    //stack structure
    var stack = []

    //count if the array length is even
    if (array.length % 2 == 0){

        for(var i = 0; i < array.length; i++){

            //push element in the stack
            if(stack.length == 0){
                stack.push(array[i])
            }
            //compare it with next element. if succeeds, then pop it, otherwise return false
            else{
                if (stack[0] == "(" && array[i] == ")"){
                    stack.pop()
                }
                else if (stack[0] == "{" && array[i] == "}"){
                    stack.pop()
                }
                else if (stack[0] == "[" && array[i] == "]"){
                    stack.pop()
                }
                else{
                    console.log("false")
                    return false
                }
            }
        }

        //if stack is empty, then all elements are valid
        if(stack.length > 0 ){
            console.log("false")
            return false
        }
        //other not
        else{
            console.log("true")
            return true
        }
    
    }
    else{
        console.log("invalid array length")
    }
}

//validParentheses("()")
//validParentheses("(((((((((")
//validParentheses("[[[[[]")



// ------------------------------------------ //


// Q4
function LargestNumber(array){

    //split into two diff arrays
    let singleArray = []
    let twoLeastArray = []

    for(let i = 0; i < array.length; i++){
        console.log(array[i])
        
        //array less than 10
        if(array[i] < 10){
            singleArray.push(array[i])
        }
        //array more than 10
        else{
            twoLeastArray.push(array[i])
        }
    }
    
    //sort and reverse
    let sortSingleArray = singleArray.sort()
    let reverseSingleArray = sortSingleArray.reverse()
    let sorttwoLeastArray = twoLeastArray.sort()
    let reversetwoLeastArray = sorttwoLeastArray.reverse()
    //console.log(reverseSingleArray.concat())
    //console.log(reversetwoLeastArray)
    
    
    //concat two array
    let combineArray = reverseSingleArray.concat(reversetwoLeastArray)
    //console.log(Number(combineArray.join("")))
    return Number(combineArray.join(""))
    
}
//LargestNumber([2,5,7,10,11])




// ------------------------------------------ //


// Q5
function maxGain(node){
    
    return 0
}