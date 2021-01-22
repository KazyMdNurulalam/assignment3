


// kilometerToMeter start
function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        meter = "error"
        return meter;
    } 
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}
// var gotMeter = kilometerToMeter(0);
// console.log(gotMeter);



// budgetCalculator start
function budgetCalculator(watch, phone, laptop) {
    var forWatch = watch * 50;
    var forPhone = phone * 100;
    var forLaptop = laptop * 500;
    var totalBudget = forWatch + forPhone + forLaptop;
    return totalBudget;
}
// var budget = budgetCalculator(2, 4, 1);
// console.log(budget);



// hotelCost start
function hotelCost(days) {
    if (days <= 10) {
        var fastOffer = days * 100;
        return fastOffer;
    }
    else if (days <= 20) {
        var fastOffer = 10 * 100;
        var remaining = days - 10;
        var secondOffer = remaining * 80;
        var total = fastOffer + secondOffer;
        return total;
    }
    else {
        var fastOffer = 10 * 100;
        var secondOffer = 10 * 80;
        var remaining = days - 20;
        var luckyOffer = remaining * 50;
        var total = fastOffer + secondOffer + luckyOffer;
        return total;
    }
}
// var totalCost = hotelCost(24);
// console.log(totalCost)



// megaFriend start
function megaFriend(names) {
    var largeName = names[0];
    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length > largeName.length) {
            largeName = currentName;
        }
    }
    return largeName;
}
// var biggerName = megaFriend(['tanjil', 'fahmi', 'Rayhan', 'riad', 'pritom']);
// console.log(biggerName);