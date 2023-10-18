function getLongestPrefix(inputs){
  
  let result = ""
  for(let k = 0;k < inputs.length;k++){
      let prefix = inputs[k]
      let hasPrefixArr = inputs.filter((i)=>i.indexOf(prefix) != -1)
      if(hasPrefixArr.length > 1){
          if(result.length < prefix.length){
              result = prefix
          }
      }
  }
  return result
}
let input =  ['aaaaaa', 'aaaaaaaua', 'aaa', 'cfeoo', 'foost', 'xxxxx']
let longestPrefix = getLongestPrefix(input)
console.log(longestPrefix)