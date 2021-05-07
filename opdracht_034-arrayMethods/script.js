
  const addTheWordCool = function(array){
  
 array.push("cool");
 return (array);
}
  console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));



const amountOfElementsInArray = function(arr){

 
  
 return (arr.length);
 
}
 console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));    


const selectBelgiumFromBenelux = function (arr){


return (arr.shift());
}
   console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 

  const lastElementInArray = function (arr){

    return (arr.pop())
  }
    console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 

    const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
  return (presidents.slice(1))
  }
  const impeachTrumpSplice = function(array) {
        return (presidents.splice(1))
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"] 
 



  const stringsTogether = function (array){

    return (array.join())
  }
    console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"


const combineArrays = function (array,arr){
number * number

  return (array.concat(arr))
}


    console.log(combineArrays([1,2,3], [4,5,6]))
  // resultaat: [1,2,3,4,5,6]