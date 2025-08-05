const sampleListings = [
  {
    title: "Cozy Cottage",
    description: "Peaceful cottage in the Scottish Highlands.",
    price: 18000,
    location: "Inverness",
    country: "United Kingdom",
    img: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "listingimage"
    }
  },
  {
    title: "Urban Loft",
    description: "Stylish loft in downtown Toronto.",
    price: 27000,
    location: "Toronto",
    country: "Canada",
    img: {
      url: "https://plus.unsplash.com/premium_photo-1661963579906-f146cde83bf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJiYW4lMjBsb2Z0JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Parisian Apartment",
    description: "Charming apartment with Eiffel Tower view.",
    price: 32000,
    location: "Paris",
    country: "France",
    img: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      filename: "listingimage"
    }
  },
  {
    title: "Beachside Villa",
    description: "Luxury villa steps from Bondi Beach.",
    price: 45000,
    location: "Sydney",
    country: "Australia",
    img: {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      filename: "listingimage"
    }
  },
  {
    title: "Tokyo Studio",
    description: "Minimalist studio in central Shibuya.",
    price: 22000,
    location: "Tokyo",
    country: "Japan",
    img: {
      url: "https://images.unsplash.com/photo-1598016677484-ad34c3fd766e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0dWRpb3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Ski Lodge",
    description: "Warm and cozy ski lodge near the Alps.",
    price: 20000,
    location: "Zermatt",
    country: "Switzerland",
    img: {
      url: "https://images.unsplash.com/photo-1577130215747-c1a51019ca95?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Penthouse Suite",
    description: "Modern penthouse with skyline view.",
    price: 50000,
    location: "New York City",
    country: "USA",
    img: {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      filename: "listingimage"
    }
  },
  {
    title: "Canal Home",
    description: "Traditional home on the canals.",
    price: 24000,
    location: "Amsterdam",
    country: "Netherlands",
    img: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "listingimage"
    }
  },
  {
    title: "Jungle Retreat",
    description: "Eco-retreat surrounded by rainforest.",
    price: 12000,
    location: "Bali",
    country: "Indonesia",
    img: {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      filename: "listingimage"
    }
  },
  {
    title: "Dubai Marina Condo",
    description: "Luxury condo with marina views.",
    price: 48000,
    location: "Dubai",
    country: "UAE",
    img: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      filename: "listingimage"
    }
  },
  {
    title: "City Apartment",
    description: "Clean and modern apartment in Berlin.",
    price: 23000,
    location: "Berlin",
    country: "Germany",
    img: {
      url: "https://images.unsplash.com/photo-1718980887129-d2162fce2a46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNpdHklMjBhcGFydG1uZXQlMjByb29tfGVufDB8fDB8fHww",
      filename: "listingimage"
    }
  },
  {
    title: "Historic Flat",
    description: "Flat in a 19th century building.",
    price: 20000,
    location: "Prague",
    country: "Czech Republic",
    img: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      filename: "listingimage"
    }
  },
  {
    title: "Luxury Cabin",
    description: "Cabin with mountain views and hot tub.",
    price: 26000,
    location: "Aspen",
    country: "USA",
    img: {
      url: "https://images.unsplash.com/photo-1652904274962-2a7a5b1fea65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGx1eHVyeSUyMGNhYmlufGVufDB8fDB8fHww",
      filename: "listingimage"
    }
  },
  {
    title: "Hillside Home",
    description: "Home nestled in the Tuscan hills.",
    price: 27000,
    location: "Tuscany",
    country: "Italy",
    img: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "listingimage"
    }
  },
  {
    title: "Seaview Apartment",
    description: "Bright apartment with ocean views.",
    price: 21000,
    location: "Barcelona",
    country: "Spain",
    img: {
      url: "https://images.unsplash.com/photo-1627100687999-ce91c10c3b0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudCUyMG5lYXIlMjBvY2VhbnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Cultural Flat",
    description: "Flat near local temples and food spots.",
    price: 16000,
    location: "Chiang Mai",
    country: "Thailand",
    img: {
      url: "https://images.unsplash.com/photo-1546592109-f2a1f53c3304?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGNoaW5hfGVufDB8fDB8fHww",
      filename: "listingimage"
    }
  },
  {
    title: "City Center Condo",
    description: "In the heart of the city with all amenities.",
    price: 29000,
    location: "Seoul",
    country: "South Korea",
    img: {
      url: "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Lakeside House",
    description: "Quiet house by the lake with nature trails.",
    price: 19000,
    location: "Queenstown",
    country: "New Zealand",
    img: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "listingimage"
    }
  },
  {
    title: "Mountain Cabin",
    description: "Cabin ideal for winter and hiking lovers.",
    price: 17000,
    location: "Banff",
    country: "Canada",
    img: {
      url: "https://plus.unsplash.com/premium_photo-1686090450574-214118216bdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bmF0aW4lMjBjYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Modern Flat",
    description: "Fully furnished flat with workspace.",
    price: 25000,
    location: "Singapore",
    country: "Singapore",
    img: {
      url: "https://plus.unsplash.com/premium_photo-1680100256112-2e1231d9d0df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxtb2Rlcm4lMjBmbGF0fGVufDB8fDB8fHww",
      filename: "listingimage"
    }
  },
  {
    title: "Desert Retreat",
    description: "Stylish home near desert dunes.",
    price: 15000,
    location: "Marrakech",
    country: "Morocco",
    img: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      filename: "listingimage"
    }
  },
  {
    title: "Island Bungalow",
    description: "Bungalow with private beach access.",
    price: 35000,
    location: "Phuket",
    country: "Thailand",
    img: {
      url: "https://images.unsplash.com/photo-1602002418655-57aef867418e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXNsYW5kJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Cozy 1BHK Apartment",
    description: "Ideal for students and singles.",
    price: 10000,
    location: "Rasta Peth, Pune",
    country: "India",
    img: {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Luxury High-Rise Flat",
    description: "3BHK flat in Powai with lake view.",
    price: 45000,
    location: "Powai, Mumbai",
    country: "India",
    img: {
      url: "https://plus.unsplash.com/premium_photo-1661963890332-64aca322d1e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaGlnaCUyMHJpc2UlMjBmYWx0fGVufDB8fDB8fHww",
      filename: "listingimage"
    }
  },
  {
    title: "Modern PG Accommodation",
    description: "Fully furnished PG near Electronic City.",
    price: 12000,
    location: "Electronic City, Bengaluru",
    country: "India",
    img: {
      url: "https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    }
  },
  {
    title: "Independent Duplex",
    description: "4BHK duplex home with private lawn.",
    price: 35000,
    location: "Gachibowli, Hyderabad",
    country: "India",
    img: {
      url: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWV8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    }
  }
];

module.exports = sampleListings;
