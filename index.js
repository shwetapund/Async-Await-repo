/*
setTimeouut...............

setTimeout(()=>{
    console.log('Printing After  Seconds')
}, 5000)

*************************************************************************************stop
setTimeout(()=>{
    console.log('Printing After  Seconds')
}, 6000)

**********************************************************************

console.log("person 1")
console.log("person 2")
console.log("person 3") //Sync function
console.log("person 4")


console.log("person 1")
setTimeout(()=>{
    console.log("Person 2") //Async Function It is not way to async but  for example  hein sirf.
}, 3000)

console.log("Person 3")

**********************************************************************************
function fun1(){
    console.log('Fun 1')
}

function fun2(){
    console.log('Fun 2')
}

fun1()
fun2()
*************************************************************************************/

async function fetchExamDetails(){
    return "Exam Info"
}

async function fetchPaymentDetails(){
   return "Payment Info"
}

async function main(){

const examInfo = await fetchExamDetails()
console.log(examInfo)

const paymentInfo = await fetchPaymentDetails()
console.log(paymentInfo)
}

main()