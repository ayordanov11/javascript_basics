let restaurant = {
    name: 'ASB',
    guestCapacity: 75, 
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
        //if it is less or equal, we can seat them
        //if it is not, we can't seat them
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize;
    }
}

//seatParty
//removeParty

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.guestCount);
console.log(restaurant.checkAvailability(4));