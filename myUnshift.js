let arr1 = [1, 4, 2, 3, 4, 5, 6, 3]

function myUnshift (arr, toSearch)
{
    
    for (let i = arr.length - 1; i >= 0; i--)
    {
      if (arr[i] === toSearch)
      return i
    }
    return -1
}

myUnshift(arr1,4)