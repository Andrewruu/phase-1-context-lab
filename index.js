/* Your Code Here */

let createEmployeeRecord = function(array){
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}
let createEmployeeRecords = function(arrays){
    return arrays.map(function(newArray){
            return createEmployeeRecord(newArray)
        })
}

let createTimeInEvent = function(dateTime){
    let [date,hours] = dateTime.split(' ')
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hours,10),
        date,
    })
    return this
}
let createTimeOutEvent = function(dateTime){
    let [date,hours] = dateTime.split(' ')
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hours,10),
        date,
    })
    return this
}
let hoursWorkedOnDate = function(day){
    let inTime = this.timeInEvents.find(function(dateTime){
        return dateTime.date === day
    })
    let outTime = this.timeOutEvents.find(function(dateTime){
        return dateTime.date === day
    })
    return (outTime.hour - inTime.hour)/100
}
let wagesEarnedOnDate = function(day){
    let wage = hoursWorkedOnDate.call(this, day)
        * this.payPerHour
    return wage
}
let findEmployeeByFirstName = function(srcArray, firstName){
    return srcArray.find(function(emp){
        return emp.firstName === firstName
      })
}
let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function (memo, d) {
        return memo + allWagesFor.call(d)
    }, 0) 
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

