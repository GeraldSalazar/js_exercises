function c(word){
    arr = word.split('')
    result = []
    for(let i = 0; i<arr.length; i++)  {
        let partialResult = arr[i]
        result.push(partialResult)
        for(let j=i+1; j<arr.length; j++){  //
            partialResult += arr[j]
            result.push(partialResult)
        }
    }
    const combinationsLeft = arr.length - 2
    const firstLetter = arr[0]
    for(let i=arr.length-1; i>=combinationsLeft; i--){
        let partialResult = firstLetter+arr[i]
        if(result.findIndex((element) => element==partialResult) == -1) result.push(partialResult)
    }
    console.log(result)
}
c('dogci')




