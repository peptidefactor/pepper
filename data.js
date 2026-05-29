// Global product database containing specs, ranges, and descriptions
const PRODUCTS_DATA = [
    {
        id: "tirzepatide",
        name: "Tirzepatide",
        image: "Tirzepatide.png",
        priceRange: "$43.00 – $329.00",
        description: "Premium grade Tirzepatide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form. For research and development purposes only.",
        variants: [
            { spec: "5mg", price: 43.00 }, { spec: "10mg", price: 65.00 },
            { spec: "15mg", price: 88.00 }, { spec: "20mg", price: 115.00 },
            { spec: "30mg", price: 145.00 }, { spec: "40mg", price: 168.00 },
            { spec: "50mg", price: 192.00 }, { spec: "60mg", price: 215.00 },
            { spec: "70mg", price: 238.00 }, { spec: "80mg", price: 265.00 },
            { spec: "90mg", price: 288.00 }, { spec: "100mg", price: 310.00 },
            { spec: "120mg", price: 329.00 }
        ]
    },
    {
        id: "semaglutide",
        name: "Semaglutide",
        image: "Semaglutide.png",
        priceRange: "$40.00 – $109.00",
        description: "Premium grade Semaglutide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 40.00 }, { spec: "10mg", price: 58.00 },
            { spec: "15mg", price: 75.00 }, { spec: "20mg", price: 92.00 },
            { spec: "30mg", price: 109.00 }
        ]
    },
    {
        id: "retatrutide",
        name: "Retatrutide",
        image: "Retatrutide.png",
        priceRange: "$77.00 – $371.00",
        description: "Premium grade Retatrutide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 77.00 }, { spec: "10mg", price: 119.00 },
            { spec: "15mg", price: 161.00 }, { spec: "20mg", price: 203.00 },
            { spec: "30mg", price: 245.00 }, { spec: "40mg", price: 287.00 },
            { spec: "50mg", price: 329.00 }, { spec: "60mg", price: 371.00 }
        ]
    },
    {
        id: "oxytocin",
        name: "Oxytocin Acetate",
        image: "Oxytocin Acetate.png",
        priceRange: "$29.00 – $51.00",
        description: "Premium grade Oxytocin Acetate research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 29.00 },
            { spec: "5mg", price: 51.00 }
        ]
    }
];
// ----------------------------------------------------------------
    // 以下为新加入的其余全部产品，格式与您的 Tirzepatide 等完全一致
    // ----------------------------------------------------------------
    {
        id: "5-amino-1mq",
        name: "5-amino-1mq",
        image: "5-amino-1mq.png",
        priceRange: "$57.00 – $114.00",
        description: "Premium grade 5-amino-1mq research chemical. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in high-quality form for developmental research.",
        variants: [
            { spec: "50mg", price: 57.00 },
            { spec: "100mg", price: 114.00 }
        ]
    },
    {
        id: "adipotide",
        name: "Adipotide",
        image: "Adipotide.png",
        priceRange: "$86.00 – $186.00",
        description: "Premium grade Adipotide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 86.00 },
            { spec: "5mg", price: 135.00 },
            { spec: "10mg", price: 186.00 }
        ]
    },
    {
        id: "aicar",
        name: "AICAR",
        image: "AICAR.png",
        priceRange: "$74.00",
        description: "Premium grade AICAR research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "50mg", price: 74.00 }
        ]
    },
    {
        id: "aod9604",
        name: "AOD9604",
        image: "AOD9604.png",
        priceRange: "$57.00 – $109.00",
        description: "Premium grade AOD9604 research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 57.00 },
            { spec: "5mg", price: 83.00 },
            { spec: "10mg", price: 109.00 }
        ]
    },
    {
        id: "cagrilintide",
        name: "Cagrilintide",
        image: "Cagrilintide.png",
        priceRange: "$145.00 – $260.00",
        description: "Premium grade Cagrilintide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 145.00 },
            { spec: "5mg", price: 205.00 },
            { spec: "10mg", price: 260.00 }
        ]
    },
    {
        id: "tesofensine",
        name: "Tesofensine",
        image: "Tesofensine.png",
        priceRange: "$85.00 – $160.00",
        description: "Premium grade Tesofensine research compound. Manufactured under strict laboratory conditions to ensure 99%+ purity.",
        variants: [
            { spec: "250mcg", price: 85.00 },
            { spec: "500mcg", price: 160.00 }
        ]
    },
    {
        id: "liraglutide",
        name: "Liraglutide",
        image: "Liraglutide.png",
        priceRange: "$90.00 – $170.00",
        description: "Premium grade Liraglutide research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 90.00 },
            { spec: "10mg", price: 170.00 }
        ]
    },
    {
        id: "bpc157",
        name: "BPC-157",
        image: "BPC-157.png",
        priceRange: "$45.00 – $85.00",
        description: "Premium grade BPC-157 research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "5mg", price: 45.00 },
            { spec: "10mg", price: 85.00 }
        ]
    },
    {
        id: "tb500",
        name: "TB-500 (Thymosin Beta-4)",
        image: "TB-500.png",
        priceRange: "$48.00 – $90.00",
        description: "Premium grade TB-500 research peptide. Manufactured under strict laboratory conditions to ensure 99%+ purity. Provided in lyophilized powder form.",
        variants: [
            { spec: "2mg", price: 48.00 },
            { spec: "5mg", price: 69.00 },
            { spec: "10mg", price: 90.00 }
        ]
    },
    {
        id: "bpc-tb-blend",
        name: "BPC-157 + TB-500 Blend",
        image: "BPC-TB-Blend.png",
        priceRange: "$80.00 – $150.00",
        description: "Premium grade BPC-157 and TB-500 blended research peptide. Ideal for combinatorial tissue and cellular repair studies.",
        variants: [
            { spec: "5mg+5mg", price: 80.00 },
            { spec: "10mg+10mg", price: 150.00 }
        ]
    },
    {
        id: "cjc-ipamorelin",
        name: "CJC-1295 + Ipamorelin",
        image: "CJC-Ipamorelin.png",
        priceRange: "$70.00 – $130.00",
        description: "Premium grade CJC-1295 and Ipamorelin formulation for advanced cellular research and secretion studies.",
        variants: [
            { spec: "2mg+2mg", price: 70.00 },
            { spec: "5mg+5mg", price: 130.00 }
        ]
    },
    {
        id: "follistatin344",
        name: "Follistatin 344",
        image: "Follistatin344.png",
        priceRange: "$95.00 – $180.00",
        description: "Premium grade Follistatin 344 research peptide. Manufactured under strict laboratory conditions to ensure high purity and cellular activity.",
        variants: [
            { spec: "1mg", price: 95.00 },
            { spec: "2mg", price: 180.00 }
        ]
    },
    {
        id: "igf1-lr3",
        name: "IGF-1 LR3",
        image: "IGF-1-LR3.png",
        priceRange: "$68.00 – $120.00",
        description: "Premium grade Long R3 IGF-1 research peptide. Highly stable analogue engineered for extended half-life in laboratory mediums.",
        variants: [
            { spec: "1mg", price: 68.00 },
            { spec: "2mg", price: 120.00 }
        ]
    },
    {
        id: "igf1-des",
        name: "IGF-1 DES",
        image: "IGF-1-DES.png",
        priceRange: "$75.00 – $135.00",
        description: "Premium grade Des(1-3)IGF-1 research peptide truncated variant for specialized muscle and receptor affinity research.",
        variants: [
            { spec: "1mg", price: 75.00 },
            { spec: "2mg", price: 135.00 }
        ]
    },
    {
        id: "mk2866",
        name: "MK-2866 (Ostarine)",
        image: "MK2866.png",
        priceRange: "$50.00 – $95.00",
        description: "Premium grade MK-2866 research chemical. Formulated under strict regulations to support targeted selective receptor pathway studies.",
        variants: [
            { spec: "25mg", price: 50.00 },
            { spec: "50mg", price: 95.00 }
        ]
    },
    {
        id: "mk677",
        name: "MK-677 (Ibutamoren)",
        image: "MK677.png",
        priceRange: "$55.00 – $105.00",
        description: "Premium grade MK-677 research compound. Extensively analyzed for selective secretagogue research applications.",
        variants: [
            { spec: "25mg", price: 55.00 },
            { spec: "50mg", price: 105.00 }
        ]
    },
    {
        id: "rad140",
        name: "RAD-140 (Testolone)",
        image: "RAD140.png",
        priceRange: "$60.00 – $115.00",
        description: "Premium grade RAD-140 research compound. High-affinity formula curated for advanced endocrine and pathway mapping.",
        variants: [
            { spec: "10mg", price: 60.00 },
            { spec: "20mg", price: 115.00 }
        ]
    },
    {
        id: "cerebrolysin",
        name: "Cerebrolysin",
        image: "Cerebrolysin.png",
        priceRange: "$85.00 – $160.00",
        description: "Premium grade Cerebrolysin solution analogue peptide mix. Perfect for multi-pathway neurogenesis and cognitive decline studies.",
        variants: [
            { spec: "5ml", price: 85.00 },
            { spec: "10ml", price: 160.00 }
        ]
    },
    {
        id: "dihexa",
        name: "Dihexa",
        image: "Dihexa.png",
        priceRange: "$90.00 – $175.00",
        description: "Premium grade Dihexa oligopeptide research variant. Noted for high permeability and potency in synaptic activity modeling.",
        variants: [
            { spec: "10mg", price: 90.00 },
            { spec: "20mg", price: 175.00 }
        ]
    },
    {
        id: "semax",
        name: "N-Acetyl Semax Amidate",
        image: "Semax.png",
        priceRange: "$65.00 – $120.00",
        description: "Premium grade acetylated and amidated Semax variant. Specifically engineered for enhanced enzymatic stability in in-vitro systems.",
        variants: [
            { spec: "10mg", price: 65.00 },
            { spec: "20mg", price: 120.00 }
        ]
    },
    {
        id: "selank",
        name: "N-Acetyl Selank Oxatate",
        image: "Selank.png",
        priceRange: "$60.00 – $115.00",
        description: "Premium grade N-Acetyl Selank compound for specialized neurotransmitter and neuropsychiatric vector evaluations.",
        variants: [
            { spec: "10mg", price: 60.00 },
            { spec: "20mg", price: 115.00 }
        ]
    },
    {
        id: "epitalon",
        name: "Epitalon",
        image: "Epitalon.png",
        priceRange: "$45.00 – $85.00",
        description: "Premium grade Epitalon research peptide. Highly requested for telomere and anti-aging cell-line lifespan research.",
        variants: [
            { spec: "10mg", price: 45.00 },
            { spec: "50mg", price: 85.00 }
        ]
    },
    {
        id: "ghk-cu",
        name: "GHK-Cu (Copper Peptide)",
        image: "GHK-Cu.png",
        priceRange: "$50.00 – $140.00",
        description: "Premium grade GHK copper complex. Fully lyophilized and balanced for tissue remodeling and skin matrix analysis.",
        variants: [
            { spec: "50mg", price: 50.00 },
            { spec: "100mg", price: 140.00 }
        ]
    },
    {
        id: "mots-c",
        name: "MOTS-c",
        image: "MOTS-c.png",
        priceRange: "$70.00 – $135.00",
        description: "Premium grade Mitochondrial-Derived MOTS-c research peptide. Ideal for cellular energy and metabolic homeostasis sequencing.",
        variants: [
            { spec: "10mg", price: 70.00 },
            { spec: "20mg", price: 135.00 }
        ]
    },
    {
        id: "nad",
        name: "NAD+",
        image: "NAD.png",
        priceRange: "$60.00 – $110.00",
        description: "Premium laboratory-grade Nicotinamide Adenine Dinucleotide (NAD+) for high-precision coenzyme and sirtuin response research.",
        variants: [
            { spec: "500mg", price: 60.00 },
            { spec: "1000mg", price: 110.00 }
        ]
    },
    {
        id: "ta1",
        name: "Thymosin Alpha 1 (TA1)",
        image: "TA1.png",
        priceRange: "$65.00 – $120.00",
        description: "Premium grade Thymosin Alpha 1 research peptide. Synthesized under strict oversight for immune-modulatory and T-cell line cultures.",
        variants: [
            { spec: "10mg", price: 65.00 },
            { spec: "20mg", price: 120.00 }
        ]
    },
    {
        id: "melanotan2",
        name: "Melanotan 2 (MT-2)",
        image: "Melanotan2.png",
        priceRange: "$35.00 – $65.00",
        description: "Premium grade Melanotan II alpha-MSH analogue. Formulated to high standards for melanogenesis and receptor binding verification.",
        variants: [
            { spec: "10mg", price: 35.00 },
            { spec: "20mg", price: 65.00 }
        ]
    },
    {
        id: "pt141",
        name: "PT-141 (Bremelanotide)",
        image: "PT141.png",
        priceRange: "$45.00 – $85.00",
        description: "Premium grade Bremelanotide research peptide. Specifically isolated for central nervous system and melanocortin receptor assay designs.",
        variants: [
            { spec: "10mg", price: 45.00 },
            { spec: "20mg", price: 85.00 }
        ]
    },
    {
        id: "acetic-acid",
        name: "Acetic Acid 0.6%",
        image: "Acetic-Acid.png",
        priceRange: "$10.00 – $15.00",
        description: "Laboratory-grade 0.6% Acetic Acid solution. Purified for solvent and stability control protocols in scientific research.",
        variants: [
            { spec: "30ml", price: 10.00 },
            { spec: "50ml", price: 15.00 }
        ]
    },
    {
        id: "benzyl-alcohol",
        name: "Benzyl Alcohol 0.9%",
        image: "Benzyl-Alcohol.png",
        priceRange: "$10.00 – $15.00",
        description: "Purified 0.9% Benzyl Alcohol lab solution. Extensively validated for solution preservation and baseline control testing.",
        variants: [
            { spec: "30ml", price: 10.00 },
            { spec: "50ml", price: 15.00 }
        ]
    }
