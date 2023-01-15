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

function daffodilss(nums){

    var store = nums
    var temp = 0
    var i = 0
    while(i <= 3){
        
        mod = nums%10
        temp = temp + mod ** 3
        nums = Math.floor(nums/10)
        i++
        
        if(i == 3){
            if(temp == store){
                console.log(true)
                return true
            }
            else{        
                console.log(false)
                return false
            }         
        }
    }  
}
daffodilss(153)

//daffodils(153)
//daffodils(152)
//daffodils(15322)


// ------------------------------------------ //

// Q2
function majorityElement(array){

   //创建哈希表
   let myHashMap = new Map()

   //把给定数组存入哈希表以及每个元素出现的次数也一并存入
   for(var i = 0; i < array.length; i++){
       if(myHashMap.has(array[i])){
            myHashMap.set(array[i], myHashMap.get(array[i])+1)       
       }
       else{
           myHashMap.set(array[i],1)
       }
   }
  //console.log(myHashMap)

  //创建数组
  let countArray = []

  //把哈希表中的每个元素的次数统计倒入数组中
  myHashMap.forEach((key, value) => {
       countArray.push(key)
  })

  //把数组按照倒叙的方式排序 
  let sortCountArray = countArray.sort(function(a, b){return b-a})

  //回传倒数数组第一个就是结果
  return getByValue(myHashMap, sortCountArray[0])

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
            if(stack[i] == "(" || stack[i] == "{" || stack[i] == "["){
                stack.push(array[i])
            }
            //compare it with next element. if succeeds, then pop it, otherwise return false
            else{
                if (stack[stack.length - 1] == "(" && array[i] == ")"){
                    stack.pop()
                }
                else if (stack[stack.length - 1] == "{" && array[i] == "}"){
                    stack.pop()
                }
                else if (stack[stack.length - 1] == "[" && array[i] == "]"){
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

    array.sort((a,b) =>{

        var strA = a.toString() + b.toString()
        var strB = b.toString() + a.toString()

        if(strA > strB){
            return -1
        }
        else{
            return 1
        }
    })

    if(array[0] == 1){return "0"}
    return array.join("")
    
}
//LargestNumber([2,5,7,10,11])




// ------------------------------------------ //


// Q5
function maxGain(node){
    
    return 0
}