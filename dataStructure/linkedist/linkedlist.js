

//单链表封装实现
function ListNode(value, next){
    this.value = (value === undefined?0:value)
    this.next = (next === undefined?null:next)
}


var list = {value: 1, next: {value:2, next: {value:3, next:null}}}


//添加链表
function addNode(head, value, index){

    let counter = 0

    //添加元素的坐标位于首位
    if(index == 0){
        value.next = head
        console.log(value)
        return value
    }

    //添加元素的坐标不在首位

}
addNode(list, {value:1, next: null}, 0)



//删除链表
function removeNode(head, value){

    //浅拷贝
    let node = head, last 

    //头节点一样直接返回head.next 就是他的所有子节点
    if(node && head.val == value){
        return node.next
    }

    //不是头节点，就进入循环 确定 要删除节点 前节点 和 后节点 
    while(node && node.val != value){
        last = node
        node = node.next
    }

    //找到坐标节点位置信息 直接last.next = node.next 
    if(node && node.val == value){
        last.next = node.next
    }

    return head
    
}



//反转链表
function reverseNode(head){

    let res = null
    let curr = head

    while(curr){

        //首先获得curr.next之后的子节点
        const temp = curr.next
        //改写node的字节点为res的字节点
        curr.next = res
        //console.log(curr) // 指针丢失
        //console.log(head) // 指针丢失
        //再把node的指针赋值到res上
        res = curr
        //获取到所有子节点在赋值道node中 重新循环
        curr = temp
    }
    return res

}

//reverseNode(list)