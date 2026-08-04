export const WHATSAPP_NUMBER = "971581234560";

export const createWhatsAppProductUrl = (product) => {
  const message = `Hello Brand Village Outlet,

I’m interested in the following product:

Product: ${product.name}
Brand: ${product.brand}
Product Code: ${product.productCode}
Category: ${product.category}

Please share the current availability, available sizes or colours, and further ordering details.

Thank you.`.trim();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const createWhatsAppGeneralUrl = () => {
  const message = `Hello Brand Village Outlet,

I would like assistance finding a product. Please help me with the available collections.

Thank you.`.trim();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
