

//Q1
function reverseString(s) {

    //default hashset
    var set = new Set(['a','e','i','o','u','A','E','I','O','U'])
    var s = s.split("")

    //双指针
    var i = 0;
    var j = s.length-1;

    //双指针循环
    while(i<j){

        //如果元音存在
        if(set.has(s[i])){

            //查看尾指针是否存在元音
            while(!set.has(s[j])){
               j--;
            }
            //反转
            [s[i],s[j]]=[s[j],s[i]]
            j--;
        }
        i++;  
    }

    //拼接
    return s.join(""); 


};

//console.log(reverseString("hello"))
//console.log(reverseString("leetcode"))



//Q2
function twoSum(numbers, target) {

    //哈希表
    const myHashMap = new Map()
    for(let i = 0; i < numbers.length; i++){
        
        //存入target-number的值（a+b=c => a=c-b）
        if(myHashMap.has(target - numbers[i])){
            return [myHashMap.get(target - numbers[i]), i+1]
        }
        //记录下表从1开始
        myHashMap.set(numbers[i], i+1)
        
    }

};


//console.log(twoSum([1,2,3,4,5],6))

//Q3

//var list = {value: 3, next: {value: 2, next: {value: 1, next: null}}}


function insertSortNode(head){

    let headArray = []
    
    //added in array
    while(head){
        headArray.push(head.value)
        head = head.next
    }
    
    //sorted
    let sorted = insertSort(headArray)
    
    //return sorted linkedlist
    return linkedList(sorted)
    
}

function insertSort(array){
    
    
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    
    return array
}

function linkedList(arr){
  return arr.reduceRight((next, value) => ({value, next}), null);
}

//console.log(linkedList([1,2,3]))