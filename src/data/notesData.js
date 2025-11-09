// data/notesData.js
import slugify from "slugify";

const rawNotesData = {
  Algebra: [
    { 
      name: "1.2 Equations", 
      path: "/pdfs/Algebra/1.2 Equations.pdf",
      keywords: ["algebra", "equations", "solving equations", "mathematics", "linear equations"]
    },
    { 
      name: "1.4 Quadratics", 
      path: "/pdfs/Algebra/1.4 Quadratics.pdf",
      keywords: ["algebra", "quadratic equations", "factorization", "roots", "math notes"]
    },
    { 
      name: "2.1 Exponents and Radicals", 
      path: "/pdfs/Algebra/2.1 Exponents and Radicals.pdf",
      keywords: ["algebra", "exponents", "radicals", "powers", "square roots"]
    },
    { 
      name: "2.2 Logarithms", 
      path: "/pdfs/Algebra/2.2 Logarithms.pdf",
      keywords: ["algebra", "logarithms", "log rules", "antilog", "log properties"]
    },
    { 
      name: "3.2 Arithmetic Sequences and Series", 
      path: "/pdfs/Algebra/3.2 Arithmetic Sequences and Series.pdf",
      keywords: ["algebra", "sequences", "series", "arithmetic progression"]
    },
    { 
      name: "3.3 Geometric Sequences and Series", 
      path: "/pdfs/Algebra/3.3 Geometric Sequences and Series.pdf",
      keywords: ["algebra", "geometric series", "geometric progression", "ratio"]
    },
    { 
      name: "3.4 Further Sequences and Series", 
      path: "/pdfs/Algebra/3.4 Further Sequences and Series.pdf",
      keywords: ["algebra", "advanced series", "summation", "math"]
    },
    { 
      name: "4 Coordinate Geometry", 
      path: "/pdfs/Algebra/4 Coordinate Geometry.pdf",
      keywords: ["algebra", "coordinate geometry", "lines", "slopes", "distance formula"]
    },
    { 
      name: "4.1 Polynomials", 
      path: "/pdfs/Algebra/4.1 Polynomials.pdf",
      keywords: ["algebra", "polynomials", "roots", "equations", "coefficients"]
    },
    { 
      name: "5.1 Functions", 
      path: "/pdfs/Algebra/5.1 Functions.pdf",
      keywords: ["functions", "algebra", "domain", "range", "mapping"]
    },
    { 
      name: "5.2 Function Transformations", 
      path: "/pdfs/Algebra/5.2 Function Transformations.pdf",
      keywords: ["functions", "transformations", "graphs", "translations", "reflections"]
    },
    { 
      name: "6.2 Unit Circle Trigonometry", 
      path: "/pdfs/Algebra/6.2 Unit Circle Trigonometry.pdf",
      keywords: ["trigonometry", "unit circle", "sin", "cos", "angles"]
    },
    { 
      name: "9 Logic, Proof & Games", 
      path: "/pdfs/Algebra/9 Logic, Proof & Games.pdf",
      keywords: ["logic", "proofs", "mathematics", "reasoning", "games"]
    },
  ],

  "Basics And Arithmetic": [
    { 
      name: "Arithmetic - Graphs, and Statistics", 
      path: "/pdfs/Basics And Arithmetic/Arithmetic - Graphs, and Statistics.pdf",
      keywords: ["arithmetic", "graphs", "statistics", "data", "averages"]
    },
    { 
      name: "Arithmetic Ratio, Proportion", 
      path: "/pdfs/Basics And Arithmetic/Arithmetic Ratio, Proportion.pdf",
      keywords: ["ratio", "proportion", "arithmetic", "math basics"]
    },
    { 
      name: "Arithmetic Time, Work, TSD", 
      path: "/pdfs/Basics And Arithmetic/Arithmetic Time, Work, TSD.pdf",
      keywords: ["time speed distance", "work problems", "math reasoning"]
    },
    { 
      name: "Basics - TSD and Time-Work", 
      path: "/pdfs/Basics And Arithmetic/Basics - TSD and Time-Work.pdf",
      keywords: ["basics", "time", "work", "math"]
    },
    { 
      name: "Basics, Arithmetic", 
      path: "/pdfs/Basics And Arithmetic/Basics, Arithmetic.pdf",
      keywords: ["arithmetic", "numbers", "operations"]
    },
    { 
      name: "Basics, Decimals", 
      path: "/pdfs/Basics And Arithmetic/Basics, Decimals.pdf",
      keywords: ["decimals", "place value", "math operations"]
    },
    { 
      name: "Basics, Fractions", 
      path: "/pdfs/Basics And Arithmetic/Basics, Fractions.pdf",
      keywords: ["fractions", "numerator", "denominator", "simplification"]
    },
    { 
      name: "Basics, Geometry", 
      path: "/pdfs/Basics And Arithmetic/Basics, Geometry.pdf",
      keywords: ["geometry", "shapes", "angles"]
    },
    { 
      name: "Basics, Measurement and Time", 
      path: "/pdfs/Basics And Arithmetic/Basics, Measurement and Time.pdf",
      keywords: ["measurement", "time", "conversion"]
    },
    { 
      name: "Basics, Number Theory", 
      path: "/pdfs/Basics And Arithmetic/Basics, Number Theory.pdf",
      keywords: ["number theory", "factors", "divisibility"]
    },
    { 
      name: "Basics, Percentage", 
      path: "/pdfs/Basics And Arithmetic/Basics, Percentage.pdf",
      keywords: ["percentage", "ratios", "arithmetic"]
    },
  ],

  Calculus: [
    { 
      name: "C01 Limits", 
      path: "/pdfs/Calculus/C01 Limits.pdf",
      keywords: ["limits", "calculus", "approach", "continuity"]
    },
    { 
      name: "C02 Differentiation", 
      path: "/pdfs/Calculus/C02 Differentiation.pdf",
      keywords: ["differentiation", "derivatives", "slopes", "tangent"]
    },
    { 
      name: "C03 Integration", 
      path: "/pdfs/Calculus/C03 Integration.pdf",
      keywords: ["integration", "antiderivative", "area under curve"]
    },
    { 
      name: "C04 Calculus Topics", 
      path: "/pdfs/Calculus/C04 Calculus Topics.pdf",
      keywords: ["calculus", "advanced topics", "math"]
    },
    { 
      name: "C4 Differential Equations", 
      path: "/pdfs/Calculus/C4 Differential Equations.pdf",
      keywords: ["differential equations", "calculus", "functions"]
    },
    { 
      name: "C5 Calculus Topics", 
      path: "/pdfs/Calculus/C5 Calculus Topics.pdf",
      keywords: ["calculus", "mathematics"]
    },
    { 
      name: "C06 Multivariable Calculus", 
      path: "/pdfs/Calculus/C06 Multivariable Calculus.pdf",
      keywords: ["multivariable calculus", "partial derivatives", "3D surfaces"]
    },
  ],

  Geometry: [
    { 
      name: "G01 Lines and Angles", 
      path: "/pdfs/Geometry/G01 Lines and Angles.pdf",
      keywords: ["geometry", "lines", "angles", "parallel lines"]
    },
    { 
      name: "G03 Polygons", 
      path: "/pdfs/Geometry/G03 Polygons.pdf",
      keywords: ["polygons", "geometry", "shapes", "angles"]
    },
    { 
      name: "G04 Circles", 
      path: "/pdfs/Geometry/G04 Circles.pdf",
      keywords: ["geometry", "circles", "radius", "chord"]
    },
  ],
};

// Flatten all categories into one array with SEO-friendly slugs
const notesData = Object.entries(rawNotesData).flatMap(([category, notes]) =>
  notes.map((note) => ({
    id: `${category}-${note.name}`,
    title: note.name,
    category,
    description: `${note.name} notes from ${category} category — download or view online.`,
    slug: slugify(`${category}-${note.name}`, { lower: true, strict: true }),
    pdfUrl: note.path,
    keywords: note.keywords || [], // ✅ includes manual keywords
  }))
);

export default notesData;
