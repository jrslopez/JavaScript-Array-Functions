let obj1 = {song: 'Anesthesize', artist: 'Porcupine Tree',genre: 'Progressive Rock', bpm: 110}

function grabKeys(obj)
{
  let arr = []
  let i = 0
  for (let key in obj)
    {
      arr[i] = key
      i++
    }
  return arr
}

console.log(grabKeys(obj1))