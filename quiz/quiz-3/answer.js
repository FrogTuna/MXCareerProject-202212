//Q1

function nextGreaterElement(nums1, nums2) {

    //output
    const res = []

    nums1.forEach(num => {
        let item = -1
        let flag = false
        for (let i = 0; i < nums2.length; i++) {

            //cur
            if (nums2[i] === num) {
                flag = true
                continue
            }

            // if there is an exist value great than cur 
            if (flag && nums2[i] > num) {
                console.log(nums2[i])
                console.log(num)
                item = nums2[i]
                break
            }
        }

        res.push(item)
    })

    return res

};



//Q2

function searchMatrix(matrix, target) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == target) {
                return true
            }
        }
    }

    return false

};

//Q3

function numTrees(n) {

    let res = []

    function dfs(index, path) {

        if (path.length == n) {
            res.push(path)
            return
        }


        for (let i = index; i < n - path.length + 1; i++) {
            path.push(i + 1)
            dfs(index, path)
            path.pop()
        }
    }

    dfs(1, [])
    return res.length

};