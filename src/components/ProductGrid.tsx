import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ShoppingCart, Eye, ArrowRight, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductModal from './ProductModal';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  benefits: string[];
  ingredients: string[];
}

interface Category {
  name: string;
  image: string;
  description: string;
  productCount: number;
  color: string;
}

const categories: Category[] = [
  {
    name: "Fat Burner",
    image: "/category-fat-burner.webp",
    description: "2 in 1 fat burner for metabolism and energy.",
    productCount: 1,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    name: "Pre-Workout",
    image: "/category-pre-workout.webp",
    description: "All natural pre-workout for performance.",
    productCount: 4,
    color: "from-orange-400 to-red-500"
  },
  {
    name: "Protein",
    image: "/category-protein.webp",
    description: "All natural protein for muscle growth.",
    productCount: 3,
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Pure Range",
    image: "/category-pure-range.webp",
    description: "Explore our pure range of supplements.",
    productCount: 3,
    color: "from-cyan-400 to-cyan-600"
  },
  {
    name: "Samples",
    image: "/category-samples.webp",
    description: "All natural protein and supplement samples.",
    productCount: 4,
    color: "from-gray-400 to-gray-600"
  },
  {
    name: "Aminos",
    image: "/category-aminos.webp",
    description: "All natural essential aminos for recovery.",
    productCount: 2,
    color: "from-green-400 to-green-600"
  },
  {
    name: "Mass-Gainer",
    image: "/category-mass-gainer.webp",
    description: "Mega mass-gainer for muscle and weight gain.",
    productCount: 1,
    color: "from-blue-300 to-blue-500"
  },
  {
    name: "Drinks",
    image: "/category-drinks.webp",
    description: "Explore our range of energy and health drinks.",
    productCount: 1,
    color: "from-red-400 to-yellow-500"
  },
  {
    name: "Butter",
    image: "/category-butter.webp",
    description: "Peanut butter and nut butters for healthy snacking.",
    productCount: 1,
    color: "from-yellow-700 to-yellow-900"
  }
];

const products: Product[] = [
  {
    id: 1,
    name: "Greens Superfood Blend",
    price: 1699,
    rating: 4.8,
    reviews: 1250,
    image: "/greens-drink.png",
    category: "Recovery",
    description: "Premium greens blend with essential nutrients for overall health and recovery support.",
    benefits: ["Nutrient Rich", "Recovery", "Immune Support"],
    ingredients: ["Spirulina", "Chlorella", "Wheatgrass", "Natural Flavors"]
  },
  {
    id: 2,
    name: "Tropical Sunrise Protein",
    price: 2299,
    rating: 4.7,
    reviews: 890,
    image: "/tropical-sunrise-fop.png",
    category: "Protein",
    description: "Delicious tropical flavored protein powder perfect for post-workout recovery.",
    benefits: ["Muscle Growth", "Tropical Taste", "Complete Protein"],
    ingredients: ["Whey Protein", "Natural Tropical Flavors", "Stevia", "Digestive Enzymes"]
  },
  {
    id: 3,
    name: "Creatine 1KG Premium",
    price: 1899,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 2100,
    image: "/creatine1kg-fop.png",
    category: "Strength",
    description: "High-quality creatine monohydrate in bulk size for serious athletes and bodybuilders.",
    benefits: ["Strength", "Power", "Muscle Volume", "Bulk Value"],
    ingredients: ["Creatine Monohydrate", "No Fillers", "Pure Formula"]
  },
  {
    id: 4,
    name: "Sweet Dreams Hot Chocolate",
    price: 1349,
    rating: 4.6,
    reviews: 750,
    image: "/sweetdreams-hotchoc-fop.png",
    category: "Recovery",
    description: "Delicious hot chocolate sleep formula for better rest and recovery.",
    benefits: ["Sleep Quality", "Relaxation", "Recovery"],
    ingredients: ["Melatonin", "Magnesium", "Cocoa", "Natural Flavors"]
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    price: 1299,
    rating: 4.9,
    reviews: 3240,
    image: "/creatine-fop.png",
    category: "Strength",
    description: "Pure creatine monohydrate for strength, power, and muscle volume enhancement.",
    benefits: ["Strength", "Power", "Muscle Volume"],
    ingredients: ["Creatine Monohydrate", "No Fillers", "Pure Formula"]
  },
  {
    id: 6,
    name: "L-Carnitine Formula",
    price: 1599,
    rating: 4.7,
    reviews: 1560,
    image: "/l-carnitine-fop.png",
    category: "Fat Loss",
    description: "Premium L-Carnitine supplement for enhanced fat metabolism and energy production.",
    benefits: ["Fat Metabolism", "Energy", "Endurance"],
    ingredients: ["L-Carnitine", "Natural Flavors", "No Fillers"]
  },
  {
    id: 7,
    name: "Glutamine Recovery",
    price: 1449,
    rating: 4.8,
    reviews: 1920,
    image: "/glutamine-fop.png",
    category: "Recovery",
    description: "Essential amino acid for muscle recovery and immune system support.",
    benefits: ["Muscle Recovery", "Immune Support", "Gut Health"],
    ingredients: ["L-Glutamine", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 8,
    name: "NAC Supplement",
    price: 1699,
    rating: 4.6,
    reviews: 980,
    image: "/nac-fop.png",
    category: "Recovery",
    description: "N-Acetyl Cysteine for antioxidant support and respiratory health.",
    benefits: ["Antioxidant", "Respiratory Health", "Detox Support"],
    ingredients: ["N-Acetyl Cysteine", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 9,
    name: "NMN Anti-Aging",
    price: 2499,
    rating: 4.7,
    reviews: 1420,
    image: "/nmn-fop.png",
    category: "Recovery",
    description: "Nicotinamide Mononucleotide for cellular energy and anti-aging benefits.",
    benefits: ["Anti-Aging", "Cellular Energy", "Longevity"],
    ingredients: ["NMN", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 10,
    name: "Beta-Alanine Performance",
    price: 1349,
    rating: 4.8,
    reviews: 1150,
    image: "/beta-alanine-fop.png",
    category: "Pre-Workout",
    description: "Performance amino acid that reduces muscle fatigue and improves endurance.",
    benefits: ["Reduced Fatigue", "Enhanced Endurance", "Performance Boost"],
    ingredients: ["Beta-Alanine", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 11,
    name: "Inositol Support",
    price: 1199,
    rating: 4.5,
    reviews: 890,
    image: "/inositol-fop.png",
    category: "Recovery",
    description: "Natural supplement for hormonal balance and mental wellness support.",
    benefits: ["Hormonal Balance", "Mental Wellness", "Stress Relief"],
    ingredients: ["Inositol", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 12,
    name: "TMG Performance",
    price: 1499,
    rating: 4.7,
    reviews: 1100,
    image: "/tmg-fop.png",
    category: "Strength",
    description: "Trimethylglycine for enhanced performance and muscle building support.",
    benefits: ["Performance", "Muscle Building", "Energy"],
    ingredients: ["TMG", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 13,
    name: "Mushroom Complex",
    price: 1899,
    rating: 4.6,
    reviews: 750,
    image: "/mushroom-cap-fop.png",
    category: "Recovery",
    description: "Premium mushroom blend for cognitive enhancement and immune support.",
    benefits: ["Cognitive Enhancement", "Immune Support", "Adaptogenic"],
    ingredients: ["Lion's Mane", "Reishi", "Cordyceps", "Natural Flavors"]
  },
  {
    id: 14,
    name: "NAC Capsules",
    price: 1599,
    rating: 4.5,
    reviews: 680,
    image: "/nac-cap-fop.png",
    category: "Recovery",
    description: "N-Acetyl Cysteine in convenient capsule form for antioxidant support.",
    benefits: ["Antioxidant", "Liver Support", "Detox"],
    ingredients: ["N-Acetyl Cysteine", "Pure Formula", "No Fillers"]
  },
  {
    id: 15,
    name: "Shilajit Capsules",
    price: 2199,
    rating: 4.8,
    reviews: 920,
    image: "/shilajit-cap-fop.png",
    category: "Recovery",
    description: "Ancient mineral-rich supplement for energy and vitality enhancement.",
    benefits: ["Energy", "Vitality", "Mineral Rich"],
    ingredients: ["Shilajit", "Pure Formula", "No Fillers"]
  },
  {
    id: 16,
    name: "NMN Capsules",
    price: 2699,
    rating: 4.7,
    reviews: 850,
    image: "/nmn-cap-fop.png",
    category: "Recovery",
    description: "Nicotinamide Mononucleotide capsules for cellular energy and longevity.",
    benefits: ["Cellular Energy", "Longevity", "Anti-Aging"],
    ingredients: ["NMN", "Pure Formula", "No Fillers"]
  },
  {
    id: 17,
    name: "TUDCA Capsules",
    price: 1999,
    rating: 4.6,
    reviews: 720,
    image: "/tudca-cap-fop.png",
    category: "Recovery",
    description: "Tauroursodeoxycholic acid for liver health and bile acid support.",
    benefits: ["Liver Health", "Bile Acid Support", "Detox"],
    ingredients: ["TUDCA", "Pure Formula", "No Fillers"]
  },
  {
    id: 18,
    name: "Greens Tropical Blend",
    price: 1799,
    rating: 4.8,
    reviews: 1350,
    image: "/greens-tropical-fop.png",
    category: "Recovery",
    description: "Tropical flavored greens blend for essential nutrients and recovery.",
    benefits: ["Nutrient Rich", "Tropical Taste", "Recovery"],
    ingredients: ["Spirulina", "Chlorella", "Tropical Flavors", "Natural Ingredients"]
  },
  {
    id: 19,
    name: "AIO Superfoods Vanilla",
    price: 2399,
    rating: 4.9,
    reviews: 1680,
    image: "/aio-superfoods-vanilla-fop.png",
    category: "Protein",
    description: "All-in-one superfood protein blend with vanilla flavor for complete nutrition.",
    benefits: ["Complete Nutrition", "Protein", "Superfoods"],
    ingredients: ["Whey Protein", "Superfoods", "Vanilla", "Natural Flavors"]
  },
  {
    id: 20,
    name: "N/L Protein French Vanilla",
    price: 2299,
    rating: 4.8,
    reviews: 1420,
    image: "/nl-protein-vanilla-fop.png",
    category: "Protein",
    description: "Premium French vanilla protein powder for muscle growth and recovery.",
    benefits: ["Muscle Growth", "French Vanilla", "Recovery"],
    ingredients: ["Whey Protein", "French Vanilla", "Natural Flavors", "Digestive Enzymes"]
  },
  {
    id: 21,
    name: "Aminos Juicy Peach",
    price: 1649,
    rating: 4.7,
    reviews: 980,
    image: "/aminos-peach-fop.png",
    category: "Recovery",
    description: "Delicious juicy peach flavored amino acids for muscle recovery.",
    benefits: ["Muscle Recovery", "Juicy Peach", "Amino Acids"],
    ingredients: ["BCAA", "Juicy Peach", "Natural Flavors", "Electrolytes"]
  },
  {
    id: 22,
    name: "Blue Shaker 700ml",
    price: 899,
    rating: 4.9,
    reviews: 2100,
    image: "/shaker-blue-fop.png",
    category: "Accessories",
    description: "Premium 700ml blue protein shaker bottle for perfect mixing.",
    benefits: ["Perfect Mixing", "Large Capacity", "Durable"],
    ingredients: ["BPA Free Plastic", "Stainless Steel Ball", "Leak Proof"]
  },
  {
    id: 23,
    name: "Pink Shaker 500ml",
    price: 799,
    rating: 4.8,
    reviews: 1850,
    image: "/shaker-pink-fop.png",
    category: "Accessories",
    description: "Stylish 500ml pink protein shaker bottle for on-the-go nutrition.",
    benefits: ["Stylish Design", "Portable", "Perfect Mixing"],
    ingredients: ["BPA Free Plastic", "Stainless Steel Ball", "Leak Proof"]
  },
  {
    id: 24,
    name: "L-Citrulline Performance",
    price: 1499,
    rating: 4.8,
    reviews: 1350,
    image: "/citrulline-fop.png",
    category: "Pre-Workout",
    description: "Nitric oxide precursor for enhanced blood flow and muscle pumps.",
    benefits: ["Improved Blood Flow", "Enhanced Pumps", "Better Vascularity"],
    ingredients: ["L-Citrulline", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 25,
    name: "Protein H2O",
    price: 1899,
    rating: 4.7,
    reviews: 980,
    image: "/protein-h2o-fop.png",
    category: "Protein",
    description: "Clear protein drink for those who prefer transparent protein supplements.",
    benefits: ["Clear Protein", "No Chalky Texture", "Easy Digestion"],
    ingredients: ["Whey Protein Isolate", "Natural Flavors", "No Artificial Colors"]
  },
  {
    id: 26,
    name: "Protein H2O Tropical Sunrise",
    price: 1999,
    rating: 4.8,
    reviews: 1200,
    image: "/protein-h2o-tropical-fop.png",
    category: "Protein",
    description: "Tropical sunrise flavored clear protein drink for refreshing nutrition.",
    benefits: ["Tropical Taste", "Clear Protein", "Refreshing"],
    ingredients: ["Whey Protein Isolate", "Tropical Flavors", "Natural Ingredients"]
  },
  {
    id: 27,
    name: "ShapeShifter Mango",
    price: 2199,
    rating: 4.6,
    reviews: 850,
    image: "/shapeshifter-mango-fop.png",
    category: "Fat Loss",
    description: "Mango flavored weight management supplement for body transformation.",
    benefits: ["Weight Management", "Mango Flavor", "Body Transformation"],
    ingredients: ["Natural Extracts", "Mango Flavor", "Metabolic Support"]
  },
  {
    id: 28,
    name: "Aminos Strawberry Kiwi",
    price: 1749,
    rating: 4.7,
    reviews: 1100,
    image: "/aminos-strawberry-kiwi-fop.png",
    category: "Recovery",
    description: "Delicious strawberry kiwi flavored amino acids for muscle recovery.",
    benefits: ["Muscle Recovery", "Strawberry Kiwi", "Amino Acids"],
    ingredients: ["BCAA", "Strawberry Kiwi", "Natural Flavors", "Electrolytes"]
  },
  {
    id: 29,
    name: "N/L Protein Caramel Swirl",
    price: 2399,
    rating: 4.9,
    reviews: 1680,
    image: "/nl-protein-caramel-fop.png",
    category: "Protein",
    description: "Rich caramel swirl protein powder for indulgent muscle building.",
    benefits: ["Muscle Building", "Caramel Swirl", "Indulgent Taste"],
    ingredients: ["Whey Protein", "Caramel Swirl", "Natural Flavors", "Digestive Enzymes"]
  },
  {
    id: 30,
    name: "N/L Protein Peanut Brittle",
    price: 2449,
    rating: 4.8,
    reviews: 1420,
    image: "/nl-protein-peanut-fop.png",
    category: "Protein",
    description: "Peanut brittle flavored protein powder for nutty muscle growth.",
    benefits: ["Muscle Growth", "Peanut Brittle", "Nutty Flavor"],
    ingredients: ["Whey Protein", "Peanut Brittle", "Natural Flavors", "Digestive Enzymes"]
  },
  {
    id: 31,
    name: "N/L Protein Sample Bag",
    price: 899,
    rating: 4.7,
    reviews: 2100,
    image: "/nl-protein-samplebag-fop.png",
    category: "Protein",
    description: "Sample bag of N/L protein flavors to try before buying full size.",
    benefits: ["Sample Sizes", "Multiple Flavors", "Try Before Buy"],
    ingredients: ["Whey Protein", "Various Flavors", "Natural Ingredients"]
  },
  {
    id: 32,
    name: "AIO Sample Bag",
    price: 799,
    rating: 4.8,
    reviews: 1850,
    image: "/aio-samplebag-fop.png",
    category: "Protein",
    description: "Sample bag of AIO superfoods for complete nutrition trial.",
    benefits: ["Sample Sizes", "Complete Nutrition", "Superfoods"],
    ingredients: ["Whey Protein", "Superfoods", "Various Flavors"]
  },
  {
    id: 33,
    name: "AIO Sample Vanilla",
    price: 699,
    rating: 4.7,
    reviews: 1200,
    image: "/aio-sample-vanilla-fop.png",
    category: "Protein",
    description: "Vanilla flavored AIO superfoods sample for nutrition trial.",
    benefits: ["Sample Size", "Vanilla Flavor", "Complete Nutrition"],
    ingredients: ["Whey Protein", "Superfoods", "Vanilla", "Natural Flavors"]
  },
  {
    id: 34,
    name: "Whey Sample Chocolate",
    price: 599,
    rating: 4.8,
    reviews: 2500,
    image: "/whey-sample-choc-fop.png",
    category: "Protein",
    description: "Chocolate flavored whey protein sample for muscle building trial.",
    benefits: ["Sample Size", "Chocolate Flavor", "Muscle Building"],
    ingredients: ["Whey Protein", "Chocolate", "Natural Flavors"]
  },
  {
    id: 35,
    name: "Whey Sample Vanilla",
    price: 599,
    rating: 4.8,
    reviews: 2300,
    image: "/whey-sample-vanilla-fop.png",
    category: "Protein",
    description: "Vanilla flavored whey protein sample for muscle building trial.",
    benefits: ["Sample Size", "Vanilla Flavor", "Muscle Building"],
    ingredients: ["Whey Protein", "Vanilla", "Natural Flavors"]
  },
  {
    id: 36,
    name: "Water Bottles Drink",
    price: 1299,
    rating: 4.9,
    reviews: 3200,
    image: "/water-bottles-drink-fop.png",
    category: "Accessories",
    description: "Premium water bottles for hydration during workouts and daily use.",
    benefits: ["Hydration", "Durable", "Multiple Sizes"],
    ingredients: ["BPA Free Plastic", "Stainless Steel", "Leak Proof"]
  },
  {
    id: 37,
    name: "Water Bottles Set",
    price: 1499,
    rating: 4.8,
    reviews: 2800,
    image: "/water-bottles-fop.png",
    category: "Accessories",
    description: "Complete set of water bottles for all your hydration needs.",
    benefits: ["Complete Set", "Multiple Sizes", "Hydration"],
    ingredients: ["BPA Free Plastic", "Stainless Steel", "Leak Proof Design"]
  },
  {
    id: 38,
    name: "Raspberry Protein",
    price: 2149,
    rating: 4.7,
    reviews: 950,
    image: "/raspberry-fop.png",
    category: "Protein",
    description: "Delicious raspberry flavored protein powder for muscle building.",
    benefits: ["Muscle Building", "Raspberry Flavor", "Complete Protein"],
    ingredients: ["Whey Protein", "Raspberry", "Natural Flavors", "Digestive Enzymes"]
  },
  {
    id: 39,
    name: "Glutamine Raw Formula",
    price: 1349,
    rating: 4.8,
    reviews: 1680,
    image: "/glutamine-r-fop.png",
    category: "Recovery",
    description: "Raw glutamine formula for maximum muscle recovery and immune support.",
    benefits: ["Muscle Recovery", "Immune Support", "Raw Formula"],
    ingredients: ["L-Glutamine", "Pure Formula", "No Fillers"]
  },
  {
    id: 40,
    name: "Beta-Alanine Raw",
    price: 1249,
    rating: 4.7,
    reviews: 1350,
    image: "/beta-alanine-r-fop.png",
    category: "Pre-Workout",
    description: "Raw beta-alanine formula for maximum performance enhancement.",
    benefits: ["Performance", "Raw Formula", "Endurance"],
    ingredients: ["Beta-Alanine", "Pure Formula", "No Fillers"]
  },
  {
    id: 41,
    name: "Inositol Raw",
    price: 1099,
    rating: 4.6,
    reviews: 890,
    image: "/inositol-r-fop.png",
    category: "Recovery",
    description: "Raw inositol formula for hormonal balance and mental wellness.",
    benefits: ["Hormonal Balance", "Mental Wellness", "Raw Formula"],
    ingredients: ["Inositol", "Pure Formula", "No Fillers"]
  },
  {
    id: 42,
    name: "TMG Raw",
    price: 1399,
    rating: 4.7,
    reviews: 1100,
    image: "/tmg-r-fop.png",
    category: "Strength",
    description: "Raw TMG formula for enhanced performance and muscle building.",
    benefits: ["Performance", "Muscle Building", "Raw Formula"],
    ingredients: ["TMG", "Pure Formula", "No Fillers"]
  },
  {
    id: 43,
    name: "ShapeShifter Mango Original",
    price: 2099,
    rating: 4.6,
    reviews: 780,
    image: "/shapeshifter-mango-original-fop.png",
    category: "Fat Loss",
    description: "Original mango flavored weight management supplement.",
    benefits: ["Weight Management", "Mango Flavor", "Body Transformation"],
    ingredients: ["Natural Extracts", "Mango Flavor", "Metabolic Support"]
  },
  {
    id: 44,
    name: "Greens Tropical Original",
    price: 1699,
    rating: 4.8,
    reviews: 1250,
    image: "/greens-tropical-original-fop.png",
    category: "Recovery",
    description: "Original tropical flavored greens blend for essential nutrients.",
    benefits: ["Nutrient Rich", "Tropical Taste", "Recovery"],
    ingredients: ["Spirulina", "Chlorella", "Tropical Flavors", "Natural Ingredients"]
  },
  {
    id: 45,
    name: "Aminos Classic",
    price: 1549,
    rating: 4.7,
    reviews: 1100,
    image: "/aminos-01-fop.png",
    category: "Recovery",
    description: "Classic amino acids formula for muscle recovery and performance.",
    benefits: ["Muscle Recovery", "Performance", "Amino Acids"],
    ingredients: ["BCAA", "Natural Flavors", "Electrolytes", "Pure Formula"]
  },
  {
    id: 46,
    name: "Greens Classic",
    price: 1599,
    rating: 4.8,
    reviews: 1350,
    image: "/greens-01-fop.png",
    category: "Recovery",
    description: "Classic greens blend for essential nutrients and recovery support.",
    benefits: ["Nutrient Rich", "Recovery", "Essential Nutrients"],
    ingredients: ["Spirulina", "Chlorella", "Wheatgrass", "Natural Flavors"]
  },
  {
    id: 47,
    name: "Greens Box Set",
    price: 1899,
    rating: 4.9,
    reviews: 980,
    image: "/greens-box-fop.png",
    category: "Recovery",
    description: "Complete greens box set for comprehensive nutrition support.",
    benefits: ["Complete Set", "Comprehensive Nutrition", "Greens Blend"],
    ingredients: ["Multiple Greens", "Superfoods", "Natural Ingredients"]
  },
  {
    id: 48,
    name: "Greens Mango Blend",
    price: 1749,
    rating: 4.7,
    reviews: 1200,
    image: "/greens-mango-fop.png",
    category: "Recovery",
    description: "Mango flavored greens blend for delicious nutrition support.",
    benefits: ["Mango Flavor", "Nutrient Rich", "Delicious"],
    ingredients: ["Spirulina", "Chlorella", "Mango", "Natural Flavors"]
  },
  {
    id: 49,
    name: "Greens Strawberry",
    price: 1799,
    rating: 4.8,
    reviews: 1150,
    image: "/greens-strawberry-fop.png",
    category: "Recovery",
    description: "Strawberry flavored greens for sweet nutrition support.",
    benefits: ["Strawberry Flavor", "Nutrient Rich", "Sweet Taste"],
    ingredients: ["Spirulina", "Chlorella", "Strawberry", "Natural Flavors"]
  },
  {
    id: 50,
    name: "Protein AIO Classic",
    price: 2299,
    rating: 4.8,
    reviews: 1420,
    image: "/protein-aio-02-fop.png",
    category: "Protein",
    description: "Classic all-in-one protein blend for complete nutrition.",
    benefits: ["Complete Nutrition", "Protein", "All-in-One"],
    ingredients: ["Whey Protein", "Superfoods", "Natural Flavors", "Digestive Enzymes"]
  },
  {
    id: 51,
    name: "Protein H2O Classic",
    price: 1949,
    rating: 4.7,
    reviews: 1100,
    image: "/protein-h2o-01-fop.png",
    category: "Protein",
    description: "Classic clear protein drink for transparent nutrition.",
    benefits: ["Clear Protein", "Transparent", "Easy Digestion"],
    ingredients: ["Whey Protein Isolate", "Natural Flavors", "No Artificial Colors"]
  },
  {
    id: 52,
    name: "NMN-NAC Combo",
    price: 2899,
    rating: 4.8,
    reviews: 850,
    image: "/nmnnac-fop.png",
    category: "Recovery",
    description: "Combined NMN and NAC for comprehensive anti-aging and antioxidant support.",
    benefits: ["Anti-Aging", "Antioxidant", "Combined Formula"],
    ingredients: ["NMN", "NAC", "Natural Flavors", "Pure Formula"]
  },
  {
    id: 53,
    name: "Mushroom Complex Spill",
    price: 1999,
    rating: 4.6,
    reviews: 720,
    image: "/mushroom-spill-fop.jpg",
    category: "Recovery",
    description: "Premium mushroom complex for cognitive enhancement and immune support.",
    benefits: ["Cognitive Enhancement", "Immune Support", "Mushroom Complex"],
    ingredients: ["Lion's Mane", "Reishi", "Cordyceps", "Natural Extracts"]
  },
  {
    id: 54,
    name: "NAC 3 Capsules",
    price: 1699,
    rating: 4.7,
    reviews: 680,
    image: "/nac-3caps-fop.jpg",
    category: "Recovery",
    description: "NAC in convenient 3-capsule format for antioxidant support.",
    benefits: ["Antioxidant", "Convenient", "Liver Support"],
    ingredients: ["N-Acetyl Cysteine", "Pure Formula", "No Fillers"]
  },
  {
    id: 55,
    name: "NMN Premium",
    price: 2799,
    rating: 4.8,
    reviews: 920,
    image: "/nmnnac-fop.jpg",
    category: "Recovery",
    description: "Premium NMN supplement for cellular energy and longevity.",
    benefits: ["Cellular Energy", "Longevity", "Premium Formula"],
    ingredients: ["NMN", "Pure Formula", "No Fillers"]
  },
  {
    id: 56,
    name: "Shilajit Raw",
    price: 2299,
    rating: 4.7,
    reviews: 780,
    image: "/shilajit-broken-fop.jpg",
    category: "Recovery",
    description: "Raw shilajit for maximum energy and vitality enhancement.",
    benefits: ["Energy", "Vitality", "Raw Formula"],
    ingredients: ["Shilajit", "Pure Formula", "No Fillers"]
  },
  {
    id: 57,
    name: "TUDCA Raw",
    price: 2099,
    rating: 4.6,
    reviews: 650,
    image: "/tudca-fop.jpg",
    category: "Recovery",
    description: "Raw TUDCA for liver health and bile acid support.",
    benefits: ["Liver Health", "Bile Acid Support", "Raw Formula"],
    ingredients: ["TUDCA", "Pure Formula", "No Fillers"]
  },
  {
    id: 58,
    name: "Build Muscle Formula",
    price: 2399,
    rating: 4.8,
    reviews: 1850,
    image: "/build-muscle-fop.png",
    category: "Strength",
    description: "Complete muscle building formula for serious gains and strength.",
    benefits: ["Muscle Building", "Strength", "Complete Formula"],
    ingredients: ["Whey Protein", "Creatine", "BCAA", "Natural Flavors"]
  },
  {
    id: 59,
    name: "Weight Loss Formula",
    price: 2199,
    rating: 4.7,
    reviews: 1650,
    image: "/weight-loss-fop.png",
    category: "Fat Loss",
    description: "Comprehensive weight loss formula for effective fat burning.",
    benefits: ["Fat Burning", "Weight Loss", "Metabolism"],
    ingredients: ["Green Tea Extract", "Caffeine", "L-Carnitine", "Natural Extracts"]
  },
  {
    id: 60,
    name: "Performance Formula",
    price: 1999,
    rating: 4.8,
    reviews: 1420,
    image: "/performance-fop.png",
    category: "Pre-Workout",
    description: "High-performance formula for maximum athletic performance.",
    benefits: ["Performance", "Energy", "Focus"],
    ingredients: ["Caffeine", "Beta-Alanine", "Citrulline", "Natural Flavors"]
  },
  {
    id: 61,
    name: "Health & Wellbeing",
    price: 1899,
    rating: 4.6,
    reviews: 1200,
    image: "/health-wellbeing-fop.png",
    category: "Recovery",
    description: "Complete health and wellbeing formula for overall wellness.",
    benefits: ["Wellness", "Health", "Vitality"],
    ingredients: ["Vitamins", "Minerals", "Antioxidants", "Natural Extracts"]
  },
  {
    id: 62,
    name: "Recovery Formula",
    price: 1749,
    rating: 4.7,
    reviews: 1350,
    image: "/recovery-fop.png",
    category: "Recovery",
    description: "Advanced recovery formula for optimal muscle repair and regeneration.",
    benefits: ["Muscle Recovery", "Repair", "Regeneration"],
    ingredients: ["BCAA", "Glutamine", "Electrolytes", "Natural Flavors"]
  },
  {
    id: 63,
    name: "Endurance Formula",
    price: 1949,
    rating: 4.8,
    reviews: 1100,
    image: "/endurance-fop.png",
    category: "Pre-Workout",
    description: "Endurance formula for extended performance and stamina.",
    benefits: ["Endurance", "Stamina", "Performance"],
    ingredients: ["Beta-Alanine", "Citrulline", "Electrolytes", "Natural Flavors"]
  },
  {
    id: 64,
    name: "Getting Started Kit",
    price: 1599,
    rating: 4.9,
    reviews: 2100,
    image: "/getting-started-fop.png",
    category: "Protein",
    description: "Complete getting started kit for beginners in fitness and nutrition.",
    benefits: ["Beginner Friendly", "Complete Kit", "Easy Start"],
    ingredients: ["Whey Protein", "BCAA", "Multivitamin", "Guide"]
  },
  {
    id: 65,
    name: "Creatine Premium",
    price: 1499,
    rating: 4.8,
    reviews: 1850,
    image: "/creatine-ww-fop.png",
    category: "Strength",
    description: "Premium creatine monohydrate for maximum strength and power gains.",
    benefits: ["Strength", "Power", "Muscle Volume"],
    ingredients: ["Creatine Monohydrate", "Pure Formula", "No Fillers"]
  },
  {
    id: 66,
    name: "Creatine 1KG Premium",
    price: 1899,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 2100,
    image: "/creatine1kg-ww-fop.png",
    category: "Strength",
    description: "High-quality creatine monohydrate in bulk size for serious athletes.",
    benefits: ["Strength", "Power", "Muscle Volume", "Bulk Value"],
    ingredients: ["Creatine Monohydrate", "No Fillers", "Pure Formula"]
  }
];

const ProductGrid: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const { addToCart } = useCart();

  const categoryFilters = ['All', 'Protein', 'Pre-Workout', 'Recovery', 'Strength', 'Fat Loss', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getProductsByCategory = (categoryName: string) => {
    return products.filter(product => {
      if (categoryName === "Build Muscle") return product.category === "Protein" || product.category === "Strength";
      if (categoryName === "Weight Loss") return product.category === "Fat Loss";
      if (categoryName === "Performance") return product.category === "Pre-Workout";
      if (categoryName === "Health & Wellbeing") return product.category === "Recovery";
      if (categoryName === "Recovery") return product.category === "Recovery";
      if (categoryName === "Endurance") return product.category === "Pre-Workout";
      if (categoryName === "Getting Started") return product.category === "Protein";
      return false;
    });
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Fun Floating Bubbles Background - Hidden on Mobile */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-blue-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-2xl">🏆</span>
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-24 w-14 h-14 bg-gradient-to-br from-gray-100/60 to-gray-200/40 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <span className="text-xl">💊</span>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4 w-18 h-18 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <span className="text-2xl">⚡</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gray-900">
            Natural Supplements for the Gym
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 lg:px-0">
            Premium natural supplements in India crafted with 100% natural ingredients for maximum benefits with focus on taste and quality
          </p>
        </motion.div>

        {/* 3x3 Category Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.04 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
              style={{ minHeight: '260px', height: '32vw', maxHeight: 340 }}
              onClick={() => setSelectedCategory(category)}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 group-hover:brightness-90"
              />
              {/* Overlay for readability */}
              <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/60 to-transparent pt-4 pb-8 px-6 z-10">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold drop-shadow-lg tracking-wide">
                  {category.name}
                </h3>
              </div>
              {/* Clickable overlay for accessibility */}
              <span className="absolute inset-0 z-20" aria-label={`Explore ${category.name}`}></span>
            </motion.div>
          ))}
        </div>

        {/* Back to Categories Button */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              <span>Back to Categories</span>
            </motion.button>
          </motion.div>
        )}

        {/* Category Header */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={selectedCategory.image}
                alt={selectedCategory.name}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mr-4"
              />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                {selectedCategory.name}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedCategory.description}
            </p>
          </motion.div>
        )}

        {/* Category Filter */}
        {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 px-4 lg:px-0"
        >
            {categoryFilters.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 text-sm lg:text-base ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        )}

        {/* Product Grid */}
        {selectedCategory && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white rounded-xl lg:rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-50 p-4 sm:p-6 lg:p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 lg:h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Discount Badge */}
                {product.originalPrice && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold"
                  >
                    SAVE ₹{(product.originalPrice - product.price)}
                  </motion.div>
                )}

                {/* Quick View */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-colors shadow-lg"
                  >
                    <Eye className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.button>
                </div>

                {/* Category Tag */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                  <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-blue-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl sm:text-2xl font-bold text-blue-600">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm sm:text-lg text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 rounded-lg lg:rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 text-sm lg:text-base"
                >
                  <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Add to Cart</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        )}

        {/* Call to Action */}
        {!selectedCategory && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
          >
            <span>Shop All Natural Supplements</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.button>
        </motion.div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductGrid;