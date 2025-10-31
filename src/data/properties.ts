export interface PropertyData {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: "Apartment" | "Villa" | "Plot" | "Commercial";
  image: string;
  images: string[];
  featured?: boolean;
  sold?: boolean;
  description: string;
  amenities: string[];
  yearBuilt?: string;
  facing?: string;
  floorPlan?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const properties: PropertyData[] = [
  {
    id: "1",
    title: "Luxury 3BHK Apartment in Narsingi",
    price: "₹85 Lakhs",
    location: "Narsingi, Hyderabad",
    bedrooms: 3,
    bathrooms: 3,
    area: "1650 sq.ft",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    ],
    featured: true,
    description: "Premium 3BHK apartment with modern amenities in a gated community. Located in the heart of Narsingi with excellent connectivity to IT hubs.",
    amenities: ["24/7 Security", "Gym", "Swimming Pool", "Power Backup", "Children's Play Area", "Covered Parking", "Clubhouse"],
    yearBuilt: "2023",
    facing: "East",
    coordinates: { lat: 17.3850, lng: 78.4867 },
  },
  {
    id: "2",
    title: "Spacious 4BHK Villa with Garden",
    price: "₹1.2 Crore",
    location: "Rajapushpa Provincia, Narsingi",
    bedrooms: 4,
    bathrooms: 4,
    area: "2800 sq.ft",
    type: "Villa",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop",
    ],
    featured: true,
    description: "Stunning independent villa with private garden and modern interiors. Perfect for families looking for spacious luxury living.",
    amenities: ["Private Garden", "Modular Kitchen", "24/7 Security", "Covered Parking", "Servant Room", "Power Backup"],
    yearBuilt: "2022",
    facing: "North",
    coordinates: { lat: 17.3842, lng: 78.4850 },
  },
  {
    id: "3",
    title: "Ready to Move 2BHK Apartment",
    price: "₹52 Lakhs",
    location: "Gachibowli, Hyderabad",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq.ft",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
    description: "Well-maintained 2BHK apartment close to IT parks and shopping malls. Excellent investment opportunity.",
    amenities: ["Gym", "Parking", "Security", "Power Backup"],
    yearBuilt: "2021",
    facing: "South",
    coordinates: { lat: 17.4435, lng: 78.3479 },
  },
  {
    id: "4",
    title: "Premium Plot in Gated Community",
    price: "₹45 Lakhs",
    location: "Kokapet, Hyderabad",
    bedrooms: 0,
    bathrooms: 0,
    area: "200 sq.yards",
    type: "Plot",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    ],
    description: "RERA approved plot in a premium gated community with all modern infrastructure. Build your dream home here.",
    amenities: ["Gated Community", "Underground Drainage", "Water Supply", "Street Lights", "Parks"],
    facing: "East",
    coordinates: { lat: 17.4239, lng: 78.3465 },
  },
  {
    id: "5",
    title: "Modern 3BHK in IT Corridor",
    price: "₹72 Lakhs",
    location: "HITEC City, Hyderabad",
    bedrooms: 3,
    bathrooms: 2,
    area: "1450 sq.ft",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
    ],
    sold: true,
    description: "Recently sold premium apartment in the heart of IT corridor. Similar properties available on request.",
    amenities: ["Swimming Pool", "Gym", "Clubhouse", "Security", "Parking"],
    yearBuilt: "2020",
    facing: "West",
    coordinates: { lat: 17.4485, lng: 78.3808 },
  },
  {
    id: "6",
    title: "Commercial Space in Prime Location",
    price: "₹1.8 Crore",
    location: "Financial District, Hyderabad",
    bedrooms: 0,
    bathrooms: 2,
    area: "3500 sq.ft",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    ],
    description: "Premium commercial office space in the financial district. Ideal for IT companies and corporate offices.",
    amenities: ["Central AC", "Power Backup", "High-Speed Elevators", "Security", "Ample Parking", "Cafeteria"],
    yearBuilt: "2023",
    facing: "North",
    coordinates: { lat: 17.4241, lng: 78.3421 },
  },
];

export function getFeaturedProperties() {
  return properties.filter((p) => p.featured);
}

export function getPropertyById(id: string) {
  return properties.find((p) => p.id === id);
}
