const imageIds = [
  // First Set (Screenshots and MFD photos)
  "Screenshot_2026-07-25_at_5.54.15_PM_mzjxnd",
  "cosmetics_design_only_246x306_2_cxciog",
  "MFD05390.jpg_qfzrdt",
  "MFD05395.jpg_ox1bob",
  "MFD05398.jpg_gonxzq",
  "MFD05388.jpg_oo6j0o",
  "MFD05402.jpg_nhgq22",
  "Screenshot_2026-07-25_at_5.55.56_PM_gn0inx",
  "Screenshot_2026-07-25_at_5.55.22_PM_lsrsvk",
  "Screenshot_2026-07-25_at_5.57.38_PM_ys2zgg",
  "Screenshot_2026-07-25_at_5.56.34_PM_k9hcxu",
  "Screenshot_2026-07-25_at_5.58.40_PM_qltoxi",
  "Screenshot_2026-07-25_at_5.58.15_PM_dbydnk",
  "Screenshot_2026-07-25_at_5.58.58_PM_qiy0yk",
  "Screenshot_2026-07-25_at_6.00.21_PM_v2zbqz",
  "Screenshot_2026-07-25_at_6.00.57_PM_kfy9kg",
  "Screenshot_2026-07-25_at_6.01.50_PM_wofelo",
  "Screenshot_2026-07-25_at_6.02.35_PM_kguviy",
  "Screenshot_2026-07-25_at_6.04.35_PM_rxdf8z",
  "Screenshot_2026-07-25_at_6.05.49_PM_jyefxr",
  "Screenshot_2026-07-25_at_6.06.35_PM_l722pd",
  "Screenshot_2026-07-25_at_6.08.01_PM_sl9dfn",
  "Screenshot_2026-07-25_at_6.07.29_PM_hpsjiu",
  "Screenshot_2026-07-25_at_6.08.46_PM_kknlbk",
  "Screenshot_2026-07-25_at_6.09.48_PM_fxh3c2",
  "Screenshot_2026-07-25_at_6.11.27_PM_ylou50",
  "Screenshot_2026-07-25_at_6.21.20_PM_tzmvat",
  "Screenshot_2026-07-25_at_6.20.57_PM_nyw2ar",
  "Screenshot_2026-07-25_at_6.19.25_PM_dya6a0",
  "Screenshot_2026-07-25_at_6.16.45_PM_jt2s25",
  "Screenshot_2026-07-25_at_6.17.01_PM_fgtjiu",
  "Screenshot_2026-07-25_at_6.15.55_PM_qvwbmm",
  "Screenshot_2026-07-25_at_6.16.20_PM_qkewyw",
  "Screenshot_2026-07-25_at_6.13.18_PM_nbjjki",
  "Screenshot_2026-07-25_at_6.12.44_PM_x0948z",
  "Screenshot_2026-07-25_at_6.10.45_PM_zitauv",

  // Second Set
  "2_1_s3reaw",
  "1_1_qbf3q7",
  "3_1_qjhsnl",
  "4_svybhw",
  "7_f3cpys",
  "8_xii6uf",
  "9_yqbcjw",
  "10_2_sucydm",
  "1_2_jee7m3",
  "3_2_cvp7hs",
  "2_2_ye27qw",
  "5_akw9rf",
  "4_1_o46j1q",
  "6_twh5sd",
  "7_1_mmfprx",
  "8_1_pqy6tt",
  "10_3_revqke",
  "9_1_h5qssb",
  "11_coqg4l",
  "12_wvleug",
  "14_qfgpts",
  "13_btlqfu",
  "2_3_r7tgyd",
  "1_3_zz6xqp",
  "3_3_fzecnd",
  "4_2_kxgog5",
  "4c5b51b3c90927b8864d6d5771796d88.jpg_c3zuz1",
  "4c731ad81b6f565d513c15a5b2e15a8f_xpjwsr",
  "luxury-women-michael-michael-kors-used-handbags-p1292047-001_mvnqw5",
  "61RHVtPaTGL._AC_SY606_.jpg_tpfcwc"
];

const categories = ["Fashion", "Footwear", "Accessories", "Beauty", "Home & Lifestyle", "Kids"];
const subcategories = {
  Fashion: ["Outerwear", "Tops", "Trousers", "Dresses", "Activewear"],
  Footwear: ["Sneakers", "Boots", "Heels", "Loafers"],
  Accessories: ["Bags", "Wallets", "Eyewear", "Jewellery"],
  Beauty: ["Skincare", "Fragrance", "Cosmetics"],
  "Home & Lifestyle": ["Decor", "Fragrance", "Tableware"],
  Kids: ["Clothing", "Footwear", "Accessories"]
};
const genders = ["Women", "Men", "Unisex"];
const brands = ["Urban Thread", "Aura Collection", "Stride Studio", "Form & Function", "Lumière Beauty", "Atelier Accessories"];
const collections = ["New Season Edit", "Everyday Essentials", "Statement Finds"];

// Override specific products with real names / categories
const productOverrides = {
  1: {
    name: "GUESS Effect Eau de Toilette (100ml)",
    category: "Fragrance",
    subcategory: "Men's Perfume",
  },
  4: {
    name: "ALDO Women's Suede Ballet Flats",
    category: "Footwear",
    subcategory: "Women's Flats",
  },
  10: {
    name: "GUESS Bella Vita Gift Set for Women",
    category: "Fragrance",
    subcategory: "Women's Gift Set",
  },
  13: {
    name: "GUESS Seductive Noir Gift Set for Women",
    category: "Fragrance",
    subcategory: "Women's Gift Set",
  },
  16: {
    name: "GUESS Uomo Acqua Gift Set for Men",
    category: "Fragrance",
    subcategory: "Men's Gift Set",
  },
  19: {
    name: "Anniversary Classic Leather Watch",
    category: "Accessories",
    subcategory: "Watches",
  },
  22: {
    name: "Silver Stainless Steel Analog Watch",
    category: "Accessories",
    subcategory: "Watches",
  },
  25: {
    name: "Silver Chronograph Watch with Red Dial",
    category: "Accessories",
    subcategory: "Watches",
  },
  34: {
    name: "CAT Yellow Dial Chronograph Watch",
    category: "Accessories",
    subcategory: "Watches",
  },
};

const products = imageIds.map((id, index) => {
  const itemNum = index + 1;
  const override = productOverrides[itemNum] || {};
  const category = override.category || categories[index % categories.length];
  const subcatList = subcategories[category] || subcategories[categories[index % categories.length]];
  const subcategory = override.subcategory || subcatList[index % subcatList.length];
  const gender = genders[index % genders.length];
  const brand = brands[index % brands.length];
  const collection = collections[index % collections.length];

  return {
    id: itemNum,
    slug: `product-item-${itemNum}`,
    name: override.name || `Outlet Collection Item ${itemNum}`,
    brand: brand,
    category: category,
    subcategory: subcategory,
    gender: gender,
    productCode: `BVO-PRD-${String(itemNum).padStart(3, '0')}`,
    shortDescription: "Premium brand outlet piece available for direct enquiry.",
    description: "Curated high-quality item available at Brand Village Outlet with everyday value and guaranteed authenticity.",
    images: [id],
    colors: ["Default"],
    sizes: ["Standard"],
    material: "Premium Quality",
    careInstructions: "Handle with care.",
    availability: index % 5 === 0 ? "Limited Availability" : "Available",
    featured: index % 3 === 0,
    newArrival: index % 2 === 0,
    collection: collection,
    tags: [category.toLowerCase(), subcategory.toLowerCase()]
  };
});

export const storeProducts = products.filter(p => ![28, 30, 31, 32, 33].includes(p.id));

