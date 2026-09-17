import { products, testimonials, stats } from "../utils/content";

// Content is static today; swap these getters for API calls later without touching components.
export const getProducts = () => products;
export const getProduct = (slug) => products.find((p) => p.slug === slug);
export const getTestimonials = () => testimonials;
export const getStats = () => stats;
