let arr1 = [1, 2, 3, 4, 5, 6]

function myFilter (callback,arr1)
{
  let arr2 = [];
  let counter = 0;
    for (let i = 0; i < arr1.length; i++)
    {
      if (callback(arr1[i]))
      {
        arr2[counter] = arr1[i]
        counter++;
      }
    }
    return arr2
}

function filterArr(num1)
{
  if (num1 % 2 === 0)
  return true
}

myFilter(filterArr,arr1)