let arr1 = [1, 3, 5, 7, 6]

function mySome (callback,arr1)
{
    for (let i = 0; i < arr1.length; i++)
    {
      if (callback(arr1[i]))
      {
        return true
      }
    }
    return false
}

function testArr(num1)
{
  if (num1 % 2 === 0)
  return true
}

mySome(testArr,arr1)