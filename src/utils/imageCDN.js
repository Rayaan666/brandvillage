/**
 * Image CDN utility — powered by Cloudinary.
 * 
 * SETUP:
 *   1. Create a free Cloudinary account at https://cloudinary.com
 *   2. Replace CLOUD_NAME below with your actual Cloudinary cloud name.
 *   3. Upload your product photos to Cloudinary's Media Library.
 *   4. Use the Public ID shown in Cloudinary for each image in products.js.
 *
 * HOW IT WORKS:
 *   - f_auto        → Delivers AVIF to modern browsers, WebP to others
 *   - q_auto        → Automatic smart compression, best quality/size ratio
 *   - c_fill,ar_4:5 → Auto-crops to a consistent 4:5 product ratio
 *   - w_{n}         → Delivers the correct size for the visitor's device
 */

// ─── CHANGE THIS to your Cloudinary cloud name ───────────────────────────────
const CLOUD_NAME = 'n185h1km';
// ─────────────────────────────────────────────────────────────────────────────

export const CDN_CONFIG = {
  cloudName: CLOUD_NAME,
  widths: [320, 480, 640, 900, 1200],
  // Tells the browser what portion of the screen each image occupies.
  // On mobile (≤480px): full width. Tablet: half. Desktop: 1/4 of the page.
  sizes: '(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw',
};

/**
 * Build a single optimised Cloudinary URL.
 * @param {string} publicId  - The Cloudinary Public ID of the image.
 * @param {number} width     - The width to request (e.g. 640).
 * @param {string} ar        - The aspect ratio (default '4:5' for product cards).
 */
export const generateImageUrl = (publicId, width, ar = '4:5') => {
  if (!publicId) return '/images/fallback-image.svg';
  const transforms = `f_auto,q_auto,c_fill,ar_${ar},w_${width}`;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
};

/**
 * Build a full srcSet string for responsive image delivery.
 * @param {string} publicId - The Cloudinary Public ID of the image.
 * @param {string} ar       - The aspect ratio.
 */
export const generateSrcSet = (publicId, ar = '4:5') => {
  if (!publicId) return '';
  return CDN_CONFIG.widths
    .map(w => `${generateImageUrl(publicId, w, ar)} ${w}w`)
    .join(', ');
};
