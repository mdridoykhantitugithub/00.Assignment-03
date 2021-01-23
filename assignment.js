
// 01.This is kilometerToMeter function...

// 1 kilometer = 1000 meter.



function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var sojibQuestionKilometer = kilometerToMeter (5);
console.log("Total Meter:", sojibQuestionKilometer);



// 02. This is budgetCalculator function...

function budgetCalculator(itmes){
    var allItmes = 0;
    for(var i = 0; i < itmes.length; i++){
        var element = itmes[i];
        allItmes = allItmes + element;
    }
    return allItmes;
}
var clock = 50;
var mobile = 100;
var laptop = 500;
console.log("Total Needed Amount:", budgetCalculator([clock, mobile, laptop]));



// 03.This is hotelCost function...

function hotelCost (days){
    var alldays = 0;
    if(days <= 10){
        alldays = days * 100;
    }
    else if(days <= 20){
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        alldays = firstTenDays + secondTenDays;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var thirdTenDays = remaining * 50;
        alldays = firstTenDays + secondTenDays + thirdTenDays;
    }
    return alldays;
}
var totalDays = hotelCost (30);
console.log("Total Amount:", totalDays);



// 04.This is megaFriend function...

function megaFriend(friendsName){
    var maxLeter = friendsName[0];
    for(var i = 0; i < friendsName.length; i++){
        var element = friendsName[i];
        if(element.length > maxLeter.length){
            maxLeter = element;
        }

    }
    return maxLeter;
}
var friends = megaFriend(["ridoy", "raju", "bappraj", "ridoyKhan", "robi", "habibur"]);
console.log("Large Name:", friends);
