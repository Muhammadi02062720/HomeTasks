// task 1 

// function repetition(n,a){
//    if(a==1){
//     return n
//    }
//    return n+repetition(n,a-1)

// }
// console.log(repetition("ap",3)); 

// task 2 

// function chotnoe(n){
//     if(n==0) {
//         return n%2==0
//     }
//     return chotnoe(n+1)

// }
// console.log(chotnoe(-41)); 

// task 3 

// function equal(a,b,c){

//     if(a==b && a==c) {
//         return 3
//     }
//     else if(a!=b && a!=c) {
//         return 0
//     }
//    else if(a!=b && a==c || a==b && a!=c) {
//         return 2
//     }
// }
// console.log( equal(3,4,3)); 
// console.log( equal(3,3,3));
// console.log( equal(3,5,1));

// tasks 

// function inequality(a,b,c){
//        if(a<b && a<c){
//         return true
//        }
//        else {
//         return false
//        }

// }
// console.log(inequality(1,2,3));

// task 2 

// function smallestUNumber(a,b,c){
//       if(a<b && a<c) {
//         return a
//       }
//      else if(b<a && b<c) {
//         return b
//       }
//      else if(c<b && c<a) {
//         return c
//       }
// }
// console.log(smallestUNumber(-2,-5,0));

// task 3 

// function smalAndBigNum(a,b,c){
//       return  `${Math.max(a,b,c)} and ${Math.min(a,b,c)}`
// }
// console.log(smalAndBigNum(-5,10,15));

// task 4 

// function nextEven(n){
//     return n-(n%2)+2
// }
// console.log(nextEven(9)); 

// task 5  
// function passingHead(a,b,c){
   
//     return a>c && b>c
// }
// console.log(passingHead(4,4,4));

// task 6 
// function incAndDec(a,b,c){

//     if(a<b && b<c) {
//         return `${a*2} ${b*2} ${c*2}`
//     }
//     else {
//         return `${-(a)} ${-(b)} ${-(c)}`
//     }
// }
// console.log(incAndDec(2,2,3));

// task 7  

// function sequence(a,b,c,d){
//     return 

// }
// console.log(sequence(2,2,2,3));

// task 8
// function bigereThanSum(n,a){
//     let c=0
//       for(let i=n;i>=1;) {
//          c+=i%10
//          i=Math.floor(i/=10)
//       }
//       return c>a

// }

// console.log(bigereThanSum(24,7));
// let b=0
// let v=0
// function rev(n,a){
//     if(n==0) {
//         return Math.floor(b/10)
//     }
//     b+=n%10
//     v= rev(Math.floor(n/10))
//     return b+v>a
  
// }
// console.log(rev(18,8));

// task 9 

// function threeDiggitNum(n){
//       let c=1
//     for(let i=n;i>=1;){
//        c*=i%10
//        i=Math.floor(i/=10)
//     }
//     return c>=100
// }
// console.log(threeDiggitNum(234));

// function rev(a,b,c,d){
//     if(a==b && b==c && c!=d)return '4'
//     if(a==b && b==d && d!=c)return '3'
//     if(a==c && c==d && d!=b)return '2'
//     if(b==c && c==d && d!=a)return '1'
// }
// console.log(rev(2,2,2,3));
// console.log(rev(1,6,6,6));
// console.log(rev(2,8,2,2));

// function rev(a,b,c){
//     if(a==b && c!=b )return '3'
//     if(a==c && b!=c )return '2'
//     if(b==c && c!=a )return '1'
// }
// console.log(rev(20,2,20));

// let a=0
// function rev(n){
//     if(n<=0){
//         return Math.floor(a/10)
//     }
//     a+=n%10
//     a=a*10
//     b= rev(Math.floor(n/10))
//     return b
// }
// console.log(rev(234));

// function nameD(a=0){
//     return function(b=0){
//         return function(c=0){
//             return a+b+c
//         }
//     }
// }
// console.log(nameD(5)()(5));