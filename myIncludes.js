let arr1 = [1, 2, 3, 4, "hello"]

function myIncludes (arr,toSearch)
{
    for (let i = 0; i < arr1.length; i++)
    {
      if (arr[i] === toSearch)
      return true
    }
    return false
}

myIncludes(arr1,"hello")