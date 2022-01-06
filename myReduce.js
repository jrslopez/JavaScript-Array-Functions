let arr1 = [1, 2, 3, 4]

function myReduce (callback,arr)
{
    let reducedNum = 0
    for (let i = 0; i < arr1.length; i++)
    {
      reducedNum = callback(reducedNum, arr[i]) 
    }
    return reducedNum
}

function testArr(num1, num2)
{
  return num1 + num2
}

myReduce(testArr,arr1)
