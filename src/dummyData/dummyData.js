import img1_1 from "../assets/houses/house_1/1.jpeg"
import img1_2 from "../assets/houses/house_1/2.jpeg"
import img1_3 from "../assets/houses/house_1/3.jpg"
import img1_4 from "../assets/houses/house_1/4.jpg"
import img2_1 from "../assets/houses/house_2/1.jpg"
import img2_2 from "../assets/houses/house_2/2.jpg"
import img2_3 from "../assets/houses/house_2/3.jpg"
import img3_1 from "../assets/houses/house_3/1.jpeg"
import img3_2 from "../assets/houses/house_3/2.jpeg"
import img3_3 from "../assets/houses/house_3/3.jpeg"
import img3_4 from "../assets/houses/house_3/4.jpeg"
import img3_5 from "../assets/houses/house_3/5.jpeg"

export const dummyData = [
    {
        id: 1, 
        location: "Alte. Brown 642, Doomselar", 
        price: 52700, 
        image_links: [img1_1, img1_2, img1_3, img1_4], 
        currency: "USD", 
        env: {
        Int16: 3, 
        Valid: true, 
        },
        bathrooms: {
        Int16: 1, 
        Valid: true, 
        },
        bedrooms: {
        Int16: 2, 
        Valid: true, 
        },
        garages: {
        Int16: 1, 
        Valid: true, 
        },
        total_surface: {
        Int16: 250, 
        Valid: true, 
        },
        covered_surface: {
        Int16: 230, 
        Valid: true, 
        },
        link_ml: {
        String: "https://example.com/link_ml", 
        Valid: true, 
        },
        link_zonaprop: {
        String: "", 
        Valid: false, 
        },
        link_argenprop: {
        String: "", 
        Valid: false, 
        },
    },
    {
        id: 2, 
        location: "Castelli 740, San Vicente", 
        price: 63000.00, 
        image_links: [img2_1, img2_2, img2_3], 
        currency: "USD", 
        env: {
        Int16: 3, 
        Valid: true, 
        },
        bathrooms: {
        Int16: 1, 
        Valid: true, 
        },
        bedrooms: {
        Int16: 2, 
        Valid: true, 
        },
        garages: {
        Int16: 1, 
        Valid: true, 
        },
        total_surface: {
        Int16: 150, 
        Valid: true, 
        },
        covered_surface: {
        Int16: 100, 
        Valid: true, 
        },
        link_ml: {
        String: "https://example.com/link_ml", 
        Valid: true, 
        },
        link_zonaprop: {
        String: "https://example.com/link_zonaprop", 
        Valid: true, 
        },
        link_argenprop: {
        String: "https://example.com/link_argenprop", 
        Valid: true, 
        },
    },
    {
        id: 3, 
        location: "Castelli 588, San Vicente", 
        price: 63000, 
        image_links: [img3_1, img3_2, img3_3, img3_4, img3_5], 
        currency: "USD", 
        env: {
        Int16: 6, 
        Valid: true, 
        },
        bathrooms: {
        Int16: 2, 
        Valid: true, 
        },
        bedrooms: {
        Int16: 4, 
        Valid: true, 
        },
        garages: {
        Int16: 0, 
        Valid: false, 
        },
        total_surface: {
        Int16: 350, 
        Valid: true, 
        },
        covered_surface: {
        Int16: 320, 
        Valid: true, 
        },
        link_ml: {
        String: "https://example.com/link_ml", 
        Valid: true, 
        },
        link_zonaprop: {
        String: "https://example.com/link_zonaprop", 
        Valid: true, 
        },
        link_argenprop: {
        String: "", 
        Valid: false, 
        },
    },
]
    