const dateNow=new Date()
// 
// console.log(typeof dateNow)



const remainingYear=dateNow.getFullYear()

// console.log(typeof remainingYear)


const setData=dateNow.setFullYear(2040)

// console.log(dateNow)



const practiceDate=new Date(2035,6,15,14,45,30)

// console.log(practiceDate)



function getDayNow(usrDate){

const dateUser=new Date(usrDate)

const getDay=dateUser.getDay()

if(getDay===0){
  return 'Sunday'
}
else if(getDay===1){
  return 'Monday'
}

else if(getDay===2){
 return 'Tue'
}
else if(getDay===3){
  return 'Wed'
}
else if(getDay===4){
  return 'Thurs'
}
else {
  return 'Friday'
}


}


const result=getDayNow('2029-2-16')
console.log(result)