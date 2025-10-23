import {
  FaPrint,
  FaLock,
  FaPalette,
  FaCube,
  FaLeaf,
  FaCut,
} from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "technology", title: "Technology" },
  { id: "portfolio", title: "Portfolio" },
  { id: "contact", title: "Contact" },
];

export const servicesData = [
  {
    title: "Offset Printing",
    icon: FaPalette,
    description:
      "High-volume, superior color fidelity and consistency for commercial projects.",
  },
  {
    title: "Digital Printing",
    icon: FaPrint,
    description:
      "Fast turnarounds and short runs with exceptional detail and variable data capability.",
  },
  {
    title: "Security Printing",
    icon: FaLock,
    description:
      "Holograms, microtext, and watermarks to protect your documents and products.",
  },
  {
    title: "Embossing & Foil",
    icon: BsBoxes,
    description:
      "Luxury tactile finishes using precise pressure and metallic foils for an elite touch.",
  },
  {
    title: "UV Coating & Gloss",
    icon: MdOutlineSecurity,
    description:
      "Durable, high-gloss finishes and spot UV for eye-catching visual effects.",
  },
  {
    title: "Die-Cutting",
    icon: FaCut,
    description:
      "Precision custom shapes and intricate cutouts for unique marketing and packaging materials.",
  },
  {
    title: "Luxury Packaging",
    icon: FaCube,
    description:
      "End-to-end design and production of premium boxes, sleeves, and specialized containers.",
  },
  {
    title: "Eco-Friendly",
    icon: FaLeaf,
    description:
      "Sustainable printing solutions using recycled stocks and VOC-free vegetable-based inks.",
  },
];

export const technologySteps = [
  // Assuming these images exist in src/assets/images/
  {
    name: "Color Layering",
    description:
      "CMYK separation and offset plate preparation for deep, rich color depth.",
    visual: "11.jpg",
  },
  {
    name: "Foil Stamping",
    description:
      "Application of metallic accents with heat and pressure for a reflective, premium finish.",
    visual: "32.jpg",
  },
  {
    name: "Embossing Press",
    description:
      "Creating three-dimensional texture and tactile relief without ink for an elegant feel.",
    visual: "14.jpg",
  },
  {
    name: "Hologram Integration",
    description:
      "Embedding advanced security features to authenticate and protect valuable items.",
    visual: "20.jpg",
  },
];

export const portfolioItems = [
  // Assuming these images exist in src/assets/images/
  {
    id: 1,
    category: "Packaging",
    title: "Luxury Box Mockup",
    image: "40.jpg",
  },
  {
    id: 2,
    category: "Branding",
    title: "Foil Business Cards",
    image: "10.jpg",
  },
  {
    id: 3,
    category: "Documents",
    title: "Security Certificate",
    image: "27.jpg",
  },
  {
    id: 4,
    category: "Brochures",
    title: "Embossed Catalog",
    image: "34.jpg",
  },
  {
    id: 5,
    category: "Labels",
    title: "Product Labels",
    image: "10.jpg",
  },
  {
    id: 6,
    category: "Books",
    title: "Hardcover Book",
    image: "31.jpg",
  },
  {
    id: 7,
    category: "Marketing",
    title: "Promotional Flyer",
    image: "25.jpg",
  },
  {
    id: 8,
    category: "Custom",
    title: "Custom Die-Cut",
    image: "39.jpg",
  },
];

// Your actual contact information
export const contactInfo = {
  address: "L16/3, FB Indus-Area Block 21\nGulberg Town, Karachi, 75950", // <-- Updated from your map image
  email: "info@alabbasprinters.com", // Placeholder: Replace with your actual email if different
  phone1: "+9221 36311486", // <-- Updated
  phone2: "+9221 36311487", // <-- Updated
  mapScreenshot: "contact_map_screenshot.png", // Assuming you've placed this in src/assets/images/
};
