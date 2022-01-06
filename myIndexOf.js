let arr1 = [1, 2, 3, 4, 5, 6]

function myIndexOf (arr, toSearch)
{
    
    for (let i = 0; i < arr1.length; i++)
    {
      if (arr[i] === toSearch)
      return i
    }
    return -1
}

myIndexOf(arr1, 4)