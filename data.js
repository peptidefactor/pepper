const PRODUCTS_DATA = [
    {
        id: "tirzepatide",
        name: "Tirzepatide",
        image: "Tirzepatide.png",
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
        variants: [
            { spec: "2mg", price: 29.00 }, { spec: "5mg", price: 51.00 }
        ]
    },
    {
        id: "5-amino-1mq",
        name: "5-amino-1mq",
        image: "5-amino-1mq.png",
        variants: [
            { spec: "5mg", price: 57.00 }, { spec: "50mg", price: 114.00 }
        ]
    },
    {
        id: "adipotide",
        name: "Adipotide",
        image: "Adipotide.png",
        variants: [
            { spec: "2mg", price: 86.00 }, { spec: "5mg", price: 186.00 }
        ]
    },
    {
        id: "aicar",
        name: "AICAR",
        image: "AICAR.png",
        variants: [
            { spec: "50mg", price: 74.00 }
        ]
    },
    {
        id: "aod9604",
        name: "AOD9604",
        image: "AOD9604.png",
        variants: [
            { spec: "2mg", price: 57.00 }, { spec: "5mg", price: 109.00 }
        ]
    },
    {
        id: "cagrilintide",
        name: "Cagrilintide",
        image: "Cagrilintide.png",
        variants: [
            { spec: "5mg", price: 129.00 }, { spec: "10mg", price: 251.00 }
        ]
    },
    {
        id: "tesamorelin",
        name: "Tesamorelin",
        image: "Tesamorelin.png",
        variants: [
            { spec: "2mg", price: 57.00 }, { spec: "5mg", price: 117.00 }, { spec: "10mg", price: 223.00 }
        ]
    },
    {
        id: "bpc157",
        name: "BPC-157",
        image: "BPC-157.png",
        variants: [
            { spec: "5mg", price: 43.00 }, { spec: "10mg", price: 84.00 }
        ]
    },
    {
        id: "tb500",
        name: "TB-500 (Thymosin Beta-4)",
        image: "TB-500.png",
        variants: [
            { spec: "2mg", price: 46.00 }, { spec: "5mg", price: 94.00 }, { spec: "10mg", price: 186.00 }
        ]
    },
    {
        id: "bpc-tb-blend",
        name: "BPC-157 + TB-500 Blend",
        image: "BPC-TB-Blend.png",
        variants: [
            { spec: "5mg+5mg", price: 129.00 }
        ]
    },
    {
        id: "cjc-ipamorelin",
        name: "CJC-1295 No DAC + Ipamorelin",
        image: "CJC-Ipamorelin.png",
        variants: [
            { spec: "10mg", price: 123.00 }
        ]
    },
    {
        id: "igf-1lr3",
        name: "IGF-1 LR3",
        image: "IGF-1LR3.png",
        variants: [
            { spec: "0.1mg", price: 46.00 }, { spec: "1mg", price: 223.00 }
        ]
    },
    {
        id: "semax",
        name: "Semax",
        image: "Semax.png",
        variants: [
            { spec: "5mg", price: 57.00 }, { spec: "10mg", price: 86.00 }
        ]
    },
    {
        id: "selank",
        name: "Selank",
        image: "Selank.png",
        variants: [
            { spec: "5mg", price: 57.00 }, { spec: "10mg", price: 86.00 }
        ]
    },
    {
        id: "epithalon",
        name: "Epithalon",
        image: "Epithalon.png",
        variants: [
            { spec: "10mg", price: 43.00 }, { spec: "50mg", price: 186.00 }
        ]
    },
    {
        id: "ghk-cu",
        name: "GHK-Cu",
        image: "GHK-Cu.png",
        variants: [
            { spec: "50mg", price: 34.00 }, { spec: "100mg", price: 63.00 }
        ]
    },
    {
        id: "mots-c",
        name: "MOTS-c",
        image: "MOTS-c.png",
        variants: [
            { spec: "10mg", price: 70.00 }, { spec: "20mg", price: 135.00 }
        ]
    },
    {
        id: "benzyl-alcohol",
        name: "Benzyl Alcohol 0.9%",
        image: "benzyl-alcohol.png",
        variants: [
            { spec: "30ml", price: 10.00 }, { spec: "50ml", price: 15.00 }
        ]
    }
];
