let arr1 = [1, 2 , 3, 4, 5]

function myEach(callback, arr)
{
  for (let i = 0; i < arr.length; i++)
  {
    callback(arr[i])
  }
}

function printArr(num)
{
  console.log(num)
}

myEach(printArr, arr1)