const sexylady = {
    name: "Linlin",
    age: 47,
    status:"married",
    favoriteColor: "red",
    occupation: "realEstate",
    quantity:1,
    price: "priceless",
    phone: 13688008938,
    race: Asian,
    favoriteSinger: "Teresa Teng",
    hometown:"PiXian",
    siblings: "One youger brother",
    sign: "Virgo",
    
    possibleMovingLocation: {
		x: "30.5723° N",
		y: "104.0665° E",
    },

    hobbies: [
        cooking, 
        singing, 
        chitchat, 
        teaching, 
        planting, 
        traveling
    ],

    sports: [
        yoga, 
        biking,
        hiking, 
        shopping, 
        driving,
    ],

    wardroble: {
        accessory: [
            earrings, 
            bracelets, 
            necklace
        ],
        shoes: [
            boots,
            heels,
            sneakers,
        ],
        bottom: [
            jeans,
            overalls,
            skirts,
            shortsm
        ]
    },

    hairstyle:{
        color:"black",
        volume:"many",
        texture:"straignt",
        curlyHair: false,
        straighthair: true,
        length: {
            long: ture,
            short: false,
        },
    },

    morningRoutine: {
        books: "buddism",
        facetime: "withDaughter",
        getDressed: "skirt",
        breakfast: [
            "celery smoothie", 
            "boiled egg", 
            "porridge",
            "bun",
            "milk"
        ],
    },

    bodyData: {
        height: "159cm",
        weight: "120kg",
        bodyShape: "pearl",
        beautyMarks: "12",
    },

    fight: function(fight) {
        if (!fight) {
            console.log("She will rap you to Death!")
        }
        console.log("calm and chill")
    },

    investment: function(a , b) {
         sum = a + b;
         return sum;
    },

    whatDoIHaveForDinner: function(monday, Tuesday){
        let LinlinisNotHome = 'Linlin is not home';
        if(monday == notHome) {
            console.log('no food')
        }
        else if (monday == Tuesday){
            console.log('Double Fried pork')
        }
        else {
            console.log('out for dinner!')
        }

        }
    
        

}