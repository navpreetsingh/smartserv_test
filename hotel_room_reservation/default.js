'use strict';

module.exports = {
    hotels: [
        {
            name: "Lakewood",
            rating: 3,
            rates: {
                regular: {
                    weekday: 110,
                    weekend: 90,
                },
                rewards: {
                    weekday: 80,
                    weekend: 80,
                },
            }
        },
        {
            name: "Bridgewood",
            rating: 4,
            rates: {
                regular: {
                    weekday: 160,
                    weekend: 60,
                },
                rewards: {
                    weekday: 110,
                    weekend: 50,
                },
            }
        },
        {
            name: "Ridgewood",
            rating: 5,
            rates: {
                regular: {
                    weekday: 220,
                    weekend: 150,
                },
                rewards: {
                    weekday: 100,
                    weekend: 40,
                },
            }
        },
    ],
    
    // weekday: ["mon", "tues", "wed", "thur", "fri"],
    
    // weekend: ["sat", "sun"],
}
