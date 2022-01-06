let arr1 = [1, 2, 3, 4, 5]
let arr2 = []

function myMap(callback,arr1,arr2)
{
    for (let i = 0; i < arr1.length; i++)
    {
      arr2[i] = callback(arr1[i], arr2[i])
    }
    return arr2
}

function getArr(num1, num2)
{
  num2 = num1 + 10
  return num2
}

arr2 = myMap(getArr,arr1,arr2)
console.log(arr2)