let arr1 = [4, 8, 6]

function myEvery (callback,arr1)
{
    for (let i = 0; i < arr1.length; i++)
    {
      if (!callback(arr1[i]))
      {
        return false
      }
    }
    return true
}

function testArr(num1)
{
  if (num1 % 2 === 0)
  return true
  else false
}

myEvery(testArr,arr1)
