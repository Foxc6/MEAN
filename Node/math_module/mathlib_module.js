module.exports = function (){
  return {
    add: function(num1, num2) { 
         var result = num1+num2;
         console.log(result);
         return result;
    },
    multiply: function(num1, num2) {
         result = num1*num2;
         console.log(result);
         return result;
    },
    square: function(num) {
         result = num * num;
         console.log(result);
         return result 
    },
    random: function(num1, num2) {
         result = Math.floor(Math.random(num1) * num2);
         console.log(result);
         return result
    }
  }
};