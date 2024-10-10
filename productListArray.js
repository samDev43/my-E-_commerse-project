 const productList = [
    {
      id: 1,
      productName: "Unleashed",
      productPrice: 24.0,
      quantityAvailable: 100,
      imageURL:
        "https://productimages.hepsiburada.net/l/36/600-800/10531719315506.jpg",
      subImages: [
        "https://static.wixstatic.com/media/107c0e_e10ba2267bb0433da110b1ad68c1ad9a~mv2.jpeg/v1/fill/w_816,h_816,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/107c0e_e10ba2267bb0433da110b1ad68c1ad9a~mv2.jpeg",
        ,
        "https://productimages.hepsiburada.net/l/42/600-800/10733441515570.jpg",
      ],
      description:
        "An all-rounder body butter crafted with nourishing cold-pressed nut-butters, carrier oils, and essential oils.",
      scents: [
        "Shea Berry Melon",
        "Summer Rain",
        "Rose Petal",
        "Unleashed",
        "Coolmint",
        "Lavender",
      ],
      keyIngredients: [
        {
          name: "Shea Butter",
          description:
            "Shea butter provides hydration and helps repair damaged skin cells.",
        },
        {
          name: "Mango Butter",
          description: "Improves skin elasticity and promotes rejuvenation.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Deep Nourishment",
          description:
            "Provides deep nourishment and helps maintain optimal moisture for skin and hair.",
        },
      ],
    },
    {
      id: 2,
      productName: "Summer Rain",
      productPrice: 22.0,
      quantityAvailable: 80,
      imageURL:
        "https://images.hugoboss.com/is/image/boss/hbeu50436399_001_350?wid=768&qlt=80",
      subImages: [
        "https://productimages.hepsiburada.net/l/36/600-800/10531719315506.jpg",
        "https://productimages.hepsiburada.net/l/35/1000/10473224536114.jpg",
      ],
      description:
        "A refreshing blend of essential oils, perfect for summer hydration.",
      scents: ["Summer Rain", "Shea Berry Melon", "Lavender"],
      keyIngredients: [
        {
          name: "Coconut Oil",
          description: "Locks in moisture for all-day hydration.",
        },
        {
          name: "Almond Oil",
          description: "Rich in vitamins that improve skin texture.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Soothing Hydration",
          description: "Provides a cooling effect and calms irritated skin.",
        },
      ],
    },
    {
      id: 3,
      productName: "Lavender Bliss",
      productPrice: 26.0,
      quantityAvailable: 120,
      imageURL:
        "https://productimages.hepsiburada.net/l/37/1000/10550756540466.jpg",
      subImages: [
        "https://images.hugoboss.com/is/image/boss/hbeu50436399_001_350?wid=768&qlt=80",
        "https://images.hugoboss.com/is/image/boss/hbeu50436399_001_350?wid=768&qlt=80",
      ],
      description:
        "A calming lavender scent perfect for relaxing and soothing your skin.",
      scents: ["Lavender", "Rose Petal", "Coolmint"],
      keyIngredients: [
        {
          name: "Lavender Oil",
          description: "Reduces stress and promotes relaxation.",
        },
        {
          name: "Jojoba Oil",
          description: "Helps control excess oil and balances skin moisture.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Calming Effect",
          description:
            "Relieves stress and provides gentle hydration to the skin.",
        },
      ],
    },
    {
        id: 4,
        productName: "Shea Berry Melon",
        productPrice: 25.0,
      quantityAvailable: 90,
      imageURL:
        "https://productimages.hepsiburada.net/l/35/1000/10473224536114.jpg",
      subImages: [
          "https://productimages.hepsiburada.net/l/41/1000/10709642149938.jpg",
        "https://productimages.hepsiburada.net/l/41/1000/10709642149938.jpg",
      ],
      description:
        "A fruity and fresh body butter enriched with natural extracts for a rejuvenating experience.",
      scents: ["Shea Berry Melon", "Lavender", "Summer Rain"],
      keyIngredients: [
        {
          name: "Berry Extract",
          description: "Packed with antioxidants that promote skin health.",
        },
        {
          name: "Melon Oil",
          description: "Moisturizes and improves skin elasticity.",
        },
      ],
      benefitsAndUses: [
        {
          name: "Skin Rejuvenation",
          description: "Promotes skin cell regeneration and improves elasticity.",
        },
      ],
    },
    {
      id: 5,
      productName: "Coolmint",
      productPrice: 23.0,
      quantityAvailable: 110,
      imageURL:
        "https://productimages.hepsiburada.net/l/41/1000/10709642149938.jpg",
      subImages: [
        "https://productimages.hepsiburada.net/l/35/1000/10473224536114.jpg",
        "https://productimages.hepsiburada.net/s/22/500/9953271382066.jpg",
      ],
      description:
        "A minty fresh body butter that provides a refreshing cooling sensation to your skin.",
      scents: ["Coolmint", "Lavender", "Shea Berry Melon"],
      keyIngredients: [
        {
          name: "Peppermint Oil",
          description: "Provides a cooling sensation and soothes irritated skin.",
        },
        {
            name: "Tea Tree Oil",
          description: "Fights acne and promotes clearer skin.",
        },
      ],
      benefitsAndUses: [
          {
          name: "Cooling Sensation",
          description:
            "Cools the skin and provides relief from irritation and inflammation.",
        },
      ],
    },
    {
        id: 6,
      productName: "Rose Petal",
      productPrice: 28.0,
      quantityAvailable: 75,
      imageURL:
        "https://productimages.hepsiburada.net/l/42/600-800/10733441515570.jpg",
      subImages: [
          "https://productimages.hepsiburada.net/s/22/1500/9949777100850.jpg",
        "https://productimages.hepsiburada.net/s/38/1500/10583086202930.jpg",
      ],
      description:
        "Infused with rose petals and essential oils for luxurious hydration.",
      scents: ["Rose Petal", "Lavender", "Unleashed"],
      keyIngredients: [
          {
              name: "Rose Oil",
              description: "Softens skin and improves its texture.",
        },
        {
          name: "Grapeseed Oil",
          description: "Rich in antioxidants and promotes skin health.",
        },
      ],
      benefitsAndUses: [
          {
              name: "Luxurious Hydration",
              description: "Leaves skin feeling soft, smooth, and nourished.",
        },
      ],
    },
    {
      id: 7,
      productName: "Citrus Splash",
      productPrice: 24.0,
      quantityAvailable: 130,
      imageURL:
        "https://productimages.hepsiburada.net/s/3/1500/9593922158642.jpg",
      subImages: [
        "https://productimages.hepsiburada.net/s/21/1500/9933056540722.jpg",
        "https://productimages.hepsiburada.net/s/22/1500/9949777100850.jpg",
      ],
      description: "A zesty citrus blend that energizes and refreshes your skin.",
      scents: ["Citrus Splash", "Summer Rain", "Coolmint"],
      keyIngredients: [
        {
            name: "Orange Oil",
            description: "Brightens skin and reduces blemishes.",
          },
          {
              name: "Lemon Oil",
          description: "Energizes the skin and promotes a glowing complexion.",
        },
      ],
    //   benefitsAndUse…
    }]

let products =[
      {
            image:'images/6-piece-white-dinner-plate-set.jpg',
            description:'',
        price:''
      },
      {
          image:'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        description:'',
        price:''
    },
    {
        image:'images/athletic-cotton-socks-6-pairs.jpg',
        description:'',
        price:''
      },
      {
        image:'images/backpack.jpg',
        description:'',
        price:''
    },
    {
      image:'images/bathroom-rug.jpg',
        description:'',
        price:''
    },
    {
        image:'images/blackout-curtains-black.jpg',
        description:'',
        price:''
      },
      {
        image:'images/coffeemaker-with-glass-carafe-black.jpg',
        description:'',
        price:''
    },
    {
          image:'images/countertop-blender-64-oz.jpg',
        description:'',
        price:''
      },
    {
        image:'images/double-elongated-twist-french-wire-earrings.webp',
        description:'',
        price:''
      },
    {
      image:'images/electric-glass-and-steel-hot-water-kettle.webp',
      description:'',
      price:''
    },
    {
        image:'images/men-chino-pants-beige.jpg',
        description:'',
        price:''
    },
    {
      image:'images/men-cozy-fleece-zip-up-hoodie-red.jpg',
      description:'',
      price:''
    },
    
  ];
