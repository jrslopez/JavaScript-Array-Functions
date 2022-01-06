let arr1 = [1, 2, 3, 4, 5, 6]

function myPush (elementToAdd,arr)
{
  arr[arr.length] = elementToAdd
}

myPush("working", arr1)
console.log(arr1)