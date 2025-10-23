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

// =======================================================================
// CRITICAL FIX: Image Imports for Vite/Deployment (Images in src/assets/images/)
// If your file names have different casing (e.g., 11.JPG), adjust the imports above.
// =======================================================================
import img11 from "../assets/images/11.jpg";
import img32 from "../assets/images/32.jpg";
import img14 from "../assets/images/14.jpg";
import img20 from "../assets/images/20.jpg";
import img40 from "../assets/images/40.jpg";
import img10 from "../assets/images/10.jpg";
import img27 from "../assets/images/27.jpg";
import img34 from "../assets/images/34.jpg";
import img31 from "../assets/images/31.jpg";
import img25 from "../assets/images/25.jpg";
import img39 from "../assets/images/39.jpg";

// NOTE: Add an import for 'contact_map_screenshot.png' if it's used in a component
// import mapScreenshot from '../assets/images/contact_map_screenshot.png';

// --- Navigation Links ---
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "services", title: "Services" },
  { id: "technology", title: "Technology" },
  { id: "portfolio", title: "Portfolio" },
  { id: "contact", title: "Contact" },
];

// --- Services Data ---
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

// --- Technology Steps Data ---
export const technologySteps = [
  {
    name: "Color Layering",
    description:
      "CMYK separation and offset plate preparation for deep, rich color depth.",
    visual: img11, // <-- FIX: Use imported variable
  },
  {
    name: "Foil Stamping",
    description:
      "Application of metallic accents with heat and pressure for a reflective, premium finish.",
    visual: img32, // <-- FIX: Use imported variable
  },
  {
    name: "Embossing Press",
    description:
      "Creating three-dimensional texture and tactile relief without ink for an elegant feel.",
    visual: img14, // <-- FIX: Use imported variable
  },
  {
    name: "Hologram Integration",
    description:
      "Embedding advanced security features to authenticate and protect valuable items.",
    visual: img20, // <-- FIX: Use imported variable
  },
];

// --- Portfolio Items Data ---
export const portfolioItems = [
  {
    id: 1,
    category: "Packaging",
    title: "Luxury Box Mockup",
    image: img40, // <-- FIX: Use imported variable
  },
  {
    id: 2,
    category: "Branding",
    title: "Foil Business Cards",
    image: img10, // <-- FIX: Use imported variable
  },
  {
    id: 3,
    category: "Documents",
    title: "Security Certificate",
    image: img27, // <-- FIX: Use imported variable
  },
  {
    id: 4,
    category: "Brochures",
    title: "Embossed Catalog",
    image: img34, // <-- FIX: Use imported variable
  },
  {
    id: 5,
    category: "Labels",
    title: "Product Labels",
    image: img10, // <-- FIX: Use imported variable
  },
  {
    id: 6,
    category: "Books",
    title: "Hardcover Book",
    image: img31, // <-- FIX: Use imported variable
  },
  {
    id: 7,
    category: "Marketing",
    title: "Promotional Flyer",
    image: img25, // <-- FIX: Use imported variable
  },
  {
    id: 8,
    category: "Custom",
    title: "Custom Die-Cut",
    image: img39, // <-- FIX: Use imported variable
  },
];

// --- Contact Information ---
export const contactInfo = {
  address:
    "L16/3, F.B. Industrial Area, Block 21, Gulberg Town, Karachi, 75950",
  email: "info@alabbasprinters.com",
  phone1: "+9221 36311486",
  phone2: "+9221 36311487",
  // If you use this path in a component, you must also import it at the top!
  mapScreenshot: "contact_map_screenshot.png",
};
