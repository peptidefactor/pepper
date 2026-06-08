// 1. Clean Product Database (Redundant manual price ranges removed)
const PRODUCTS_DATA = [
    {
        id: "tirzepatide",
        name: "Tirzepatide",
        image: "Tirzepatide.png",
        description: "Premium grade Tirzepatide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form. For research and development purposes only.",
        variants: [
            { spec: "5mg", price: 43.00 }, { spec: "10mg", price: 63.00 },
            { spec: "15mg", price: 80.00 }, { spec: "20mg", price: 94.00 },
            { spec: "30mg", price: 114.00 }, { spec: "40mg", price: 143.00 },
            { spec: "50mg", price: 171.00 }, { spec: "60mg", price: 186.00 },
            { spec: "70mg", price: 214.00 }, { spec: "80mg", price: 243.00 },
            { spec: "90mg", price: 271.00 }, { spec: "100mg", price: 300.00 },
            { spec: "120mg", price: 329.00 }
        ]
    },
    {
        id: "semaglutide",
        name: "Semaglutide",
        image: "Semaglutide.png",
        description: "Premium grade Semaglutide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 40.00 }, { spec: "10mg", price: 63.00 },
            { spec: "15mg", price: 74.00 }, { spec: "20mg", price: 89.00 },
            { spec: "30mg", price: 109.00 }
        ]
    },
    {
        id: "retatrutide",
        name: "Retatrutide",
        image: "Retatrutide.png",
        description: "Premium grade Retatrutide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 77.00 }, { spec: "10mg", price: 114.00 },
            { spec: "15mg", price: 129.00 }, { spec: "20mg", price: 143.00 },
            { spec: "30mg", price: 214.00 }, { spec: "40mg", price: 257.00 },
            { spec: "50mg", price: 314.00 }, { spec: "60mg", price: 371.00 }
        ]
    },
    {
        id: "oxytocin",
        name: "Oxytocin Acetate",
        image: "Oxytocin Acetate.png",
        description: "Premium grade Oxytocin Acetate research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 29.00 },
            { spec: "5mg", price: 51.00 }
        ]
    },
    {
        id: "5-amino-1mq",
        name: "5-amino-1mq",
        image: "5-amino-1mq.png",
        description: "Premium grade 5-amino-1mq research chemical. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in high-quality form for developmental research.",
        variants: [
            { spec: "5mg", price: 57.00 },
            { spec: "50mg", price: 114.00 }
        ]
    },
    {
        id: "adipotide",
        name: "Adipotide",
        image: "Adipotide.png",
        description: "Premium grade Adipotide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 86.00 },
            { spec: "5mg", price: 186.00 }
        ]
    },
    {
        id: "aicar",
        name: "AICAR",
        image: "AICAR.png",
        description: "Premium grade AICAR research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "50mg", price: 74.00 }
        ]
    },
    {
        id: "aod9604",
        name: "AOD9604",
        image: "AOD9604.png",
        description: "Premium grade AOD9604 research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 57.00 },
            { spec: "5mg", price: 109.00 }
        ]
    },
    {
        id: "cagrilintide",
        name: "Cagrilintide",
        image: "Cagrilintide.png",
        description: "Premium grade Cagrilintide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 129.00 },
            { spec: "10mg", price: 251.00 }
        ]
    },
    {
        id: "tesamorelin",
        name: "Tesamorelin",
        image: "Tesamorelin.png",
        description: "Premium grade Tesamorelin research compound. Manufactured under strict laboratory conditions to ensure 99%+ purity.",
        variants: [
            { spec: "2mg", price: 57.00 },
            { spec: "5mg", price: 117.00 },
            { spec: "10mg", price: 223.00 }
        ]
    },
    {
        id: "bpc157",
        name: "BPC-157",
        image: "BPC-157.png",
        description: "Premium grade BPC-157 research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 43.00 },
            { spec: "10mg", price: 84.00 }
        ]
    },
    {
        id: "tb500",
        name: "TB-500 (Thymosin Beta-4)",
        image: "TB-500.png",
        description: "Premium grade TB-500 research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 46.00 },
            { spec: "5mg", price: 94.00 },
            { spec: "10mg", price: 186.00 }
        ]
    },
    {
        id: "bpc-tb-blend",
        name: "BPC-157 + TB-500 Blend",
        image: "BPC-TB-Blend.png",
        description: "Premium grade BPC-157 and TB-500 blended research peptide. Ideal for combinatorial tissue and cellular repair studies.",
        variants: [
            { spec: "5mg+5mg", price: 129.00 }
        ]
    },
    {
        id: "cjc-ipamorelin",
        name: "CJC-1295 No DAC + Ipamorelin",
        image: "CJC-Ipamorelin.png",
        description: "Premium grade CJC-1295 and Ipamorelin formulation for advanced cellular research and secretion studies.",
        variants: [
            { spec: "10mg", price: 123.00 }
        ]
    },
    {
        id: "igf-1lr3",
        name: "IGF-1 LR3",
        image: "IGF-1LR3.png",
        description: "Premium grade Long R3 IGF-1 research peptide. Highly stable analogue engineered for extended half-life in laboratory mediums.",
        variants: [
            { spec: "0.1mg", price: 46.00 },
            { spec: "1mg", price: 223.00 }
        ]
    },
    {
        id: "semax",
        name: "Semax",
        image: "Semax.png",
        description: "Premium grade acetylated and amidated Semax variant. Specifically engineered for enhanced enzymatic stability in in-vitro systems.",
        variants: [
            { spec: "5mg", price: 57.00 },
            { spec: "10mg", price: 86.00 }
        ]
    },
    {
        id: "selank",
        name: "Selank",
        image: "Selank.png",
        description: "Premium grade N-Acetyl Selank compound for specialized neurotransmitter and neuropsychiatric vector evaluations.",
        variants: [
            { spec: "5mg", price: 57.00 },
            { spec: "10mg", price: 86.00 }
        ]
    },
    {
        id: "epithalon",
        name: "Epithalon",
        image: "Epithalon.png",
        description: "Premium grade Epitalon research peptide. Highly requested for telomere and anti-aging cell-line lifespan research.",
        variants: [
            { spec: "10mg", price: 43.00 },
            { spec: "50mg", price: 186.00 }
        ]
    },
    {
        id: "ghk-cu",
        name: "GHK-Cu",
        image: "GHK-Cu.png",
        description: "Premium grade GHK copper complex. Fully lyophilized and balanced for tissue remodeling and skin matrix analysis.",
        variants: [
            { spec: "50mg", price: 34.00 },
            { spec: "100mg", price: 63.00 }
        ]
    },
    {
        id: "mots-c",
        name: "MOTS-c",
        image: "MOTS-c.png",
        description: "Premium grade Mitochondrial-Derived MOTS-c research peptide. Ideal for cellular energy and metabolic homeostasis sequencing.",
        variants: [
            { spec: "10mg", price: 70.00 },
            { spec: "20mg", price: 135.00 }
        ]
    },
    {
        id: "benzyl-alcohol",
        name: "Benzyl Alcohol 0.9%",
        image: "benzyl-alcohol.png",
        description: "Purified 0.9% Benzyl Alcohol lab solution. Extensively validated for solution preservation and baseline control testing.",
        variants: [
            { spec: "30ml", price: 10.00 },
            { spec: "50ml", price: 15.00 }
        ]
    }
];

/**
 * Helper function to calculate the display price range
 * @param {Object} product - The product object from PRODUCTS_DATA
 * @returns {string} - Formatted price or range (e.g., "$40.00" or "$40.00 – $109.00")
 */
function getPriceRange(product) {
    if (!product.variants || product.variants.length === 0) return "N/A";
    
    const prices = product.variants.map(v => v.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    if (minPrice === maxPrice) {
        return `$${minPrice.toFixed(2)}`;
    }
    return `$${minPrice.toFixed(2)} – $${maxPrice.toFixed(2)}`;
}
