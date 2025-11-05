const notesData = {
  Algebra: [
    { name: "1.2 Equations", filename: "1.2 Equations.pdf", path: "/pdfs/Algebra/1.2 Equations.pdf" },
    { name: "1.4 Quadratics", filename: "1.4 Quadratics.pdf", path: "/pdfs/Algebra/1.4 Quadratics.pdf" },
    { name: "2.1 Exponents and Radicals", filename: "2.1 Exponents and Radicals.pdf", path: "/pdfs/Algebra/2.1 Exponents and Radicals.pdf" },
    { name: "2.2 Logarithms", filename: "2.2 Logarithms.pdf", path: "/pdfs/Algebra/2.2 Logarithms.pdf" },
    { name: "3.2 Arithmetic Sequences and Series", filename: "3.2 Arithmetic Sequences and Series.pdf", path: "/pdfs/Algebra/3.2 Arithmetic Sequences and Series.pdf" },
    { name: "3.3 Geometric Sequences and Series", filename: "3.3 Geometric Sequences and Series.pdf", path: "/pdfs/Algebra/3.3 Geometric Sequences and Series.pdf" },
    { name: "3.4 Further Sequences and Series", filename: "3.4 Further Sequences and Series.pdf", path: "/pdfs/Algebra/3.4 Further Sequences and Series.pdf" },
    { name: "4 Coordinate Geometry", filename: "4 Coordinate Geometry.pdf", path: "/pdfs/Algebra/4 Coordinate Geometry.pdf" },
    { name: "4.1 Polynomials", filename: "4.1 Polynomials.pdf", path: "/pdfs/Algebra/4.1 Polynomials.pdf" },
    { name: "5.1 Functions", filename: "5.1 Functions.pdf", path: "/pdfs/Algebra/5.1 Functions.pdf" },
    { name: "5.2 Function Transformations", filename: "5.2 Function Transformations.pdf", path: "/pdfs/Algebra/5.2 Function Transformations.pdf" },
    { name: "6.2 Unit Circle Trigonometry", filename: "6.2 Unit Circle Trigonometry.pdf", path: "/pdfs/Algebra/6.2 Unit Circle Trigonometry.pdf" },
    { name: "9 Logic, Proof & Games", filename: "9 Logic, Proof & Games.pdf", path: "/pdfs/Algebra/9 Logic, Proof & Games.pdf" },
  ],
  
  "Basics And Arithmetic": [
    { name: "Arithmetic - Graphs, and Statistics", filename: "Arithmetic - Graphs, and Statistics.pdf", path: "/pdfs/Basics And Arithmetic/Arithmetic - Graphs, and Statistics.pdf" },
    { name: "Arithmetic Ratio, Proportion", filename: "Arithmetic Ratio, Proportion.pdf", path: "/pdfs/Basics And Arithmetic/Arithmetic Ratio, Proportion.pdf" },
    { name: "Arithmetic Time, Work, TSD", filename: "Arithmetic Time, Work, TSD.pdf", path: "/pdfs/Basics And Arithmetic/Arithmetic Time, Work, TSD.pdf" },
    { name: "Basics - TSD and Time-Work", filename: "Basics - TSD and Time-Work.pdf", path: "/pdfs/Basics And Arithmetic/Basics - TSD and Time-Work.pdf" },
    { name: "Basics, Arithmetic", filename: "Basics, Arithmetic.pdf", path: "/pdfs/Basics And Arithmetic/Basics, Arithmetic.pdf" },
    { name: "Basics, Decimals", filename: "Basics, Decimals.pdf", path: "/pdfs/Basics And Arithmetic/Basics, Decimals.pdf" },
    { name: "Basics, Fractions", filename: "Basics, Fractions.pdf", path: "/pdfs/Basics And Arithmetic/Basics, Fractions.pdf" },
    { name: "Basics, Geometry", filename: "Basics, Geometry.pdf", path: "/pdfs/Basics And Arithmetic/Basics, Geometry.pdf" },
    { name: "Basics, Measurement and Time", filename: "Basics, Measurement and Time.pdf", path: "/pdfs/Basics And Arithmetic/Basics, Measurement and Time.pdf" },
    { name: "Basics, Number Theory", filename: "Basics, Number Theory.pdf", path: "/pdfs/Basics And Arithmetic/Basics, Number Theory.pdf" },
    { name: "Basics, Percentage", filename: "Basics, Percentage.pdf", path: "/pdfs/Basics And Arithmetic/Basics, Percentage.pdf" },
  ],

  Calculus: [
    { name: "C01 Limits", filename: "C01 Limits.pdf", path: "/pdfs/Calculus/C01 Limits.pdf" },
    { name: "C02 Differentiation", filename: "C02 Differentiation.pdf", path: "/pdfs/Calculus/C02 Differentiation.pdf" },
    { name: "C03 Integration", filename: "C03 Integration.pdf", path: "/pdfs/Calculus/C03 Integration.pdf" },
    { name: "C04 Calculus Topics", filename: "C04 Calculus Topics.pdf", path: "/pdfs/Calculus/C04 Calculus Topics.pdf" },
    { name: "C4 Differential Equations", filename: "C4 Differential Equations.pdf", path: "/pdfs/Calculus/C4 Differential Equations.pdf" },
    { name: "C5 Calculus Topics", filename: "C5 Calculus Topics.pdf", path: "/pdfs/Calculus/C5 Calculus Topics.pdf" },
    { name: "C06 Multivariable Calculus", filename: "C06 Multivariable Calculus.pdf", path: "/pdfs/Calculus/C06 Multivariable Calculus.pdf" },
  ],

  "Counting and Probability": [
    { name: "S1 Sets", filename: "S1 Sets.pdf", path: "/pdfs/Counting and Probability/S1 Sets.pdf" },
    { name: "S2 Counting Rules", filename: "S2 Counting Rules.pdf", path: "/pdfs/Counting and Probability/S2 Counting Rules.pdf" },
    { name: "S3 Permutations", filename: "S3 Permutations.pdf", path: "/pdfs/Counting and Probability/S3 Permutations.pdf" },
    { name: "S4 Combinations", filename: "S4 Combinations.pdf", path: "/pdfs/Counting and Probability/S4 Combinations.pdf" },
    { name: "S5 Binomial Theorem", filename: "S5 Binomial Theorem.pdf", path: "/pdfs/Counting and Probability/S5 Binomial Theorem.pdf" },
    { name: "S6 Combinatorics Topics", filename: "S6 Combinatorics Topics.pdf", path: "/pdfs/Counting and Probability/S6 Combinatorics Topics.pdf" },
    { name: "S7 Distinguishability", filename: "S7 Distinguishability.pdf", path: "/pdfs/Counting and Probability/S7 Distinguishability.pdf" },
    { name: "S08 Random Variables", filename: "S08 Random Variables.pdf", path: "/pdfs/Counting and Probability/S08 Random Variables.pdf" },
    { name: "T1 Probability", filename: "T1 Probability.pdf", path: "/pdfs/Counting and Probability/T1 Probability.pdf" },
    { name: "T2 Prob with Counting", filename: "T2 Prob with Counting.pdf", path: "/pdfs/Counting and Probability/T2 Prob with Counting.pdf" },
    { name: "T3 Probability Topics", filename: "T3 Probability Topics.pdf", path: "/pdfs/Counting and Probability/T3 Probability Topics.pdf" },
    { name: "T4 D. Geo Combi", filename: "T4 D. Geo Combi.pdf", path: "/pdfs/Counting and Probability/T4 D. Geo Combi.pdf" },
    { name: "T5 C. Geo Combi", filename: "T5 C. Geo Combi.pdf", path: "/pdfs/Counting and Probability/T5 C. Geo Combi.pdf" },
    { name: "U9.1 Random Variables", filename: "U9.1 Random Variables.pdf", path: "/pdfs/Counting and Probability/U9.1 Random Variables.pdf" },
  ],

  Geometry: [
    { name: "G01 Lines and Angles", filename: "G01 Lines and Angles.pdf", path: "/pdfs/Geometry/G01 Lines and Angles.pdf" },
    { name: "G03 Polygons", filename: "G03 Polygons.pdf", path: "/pdfs/Geometry/G03 Polygons.pdf" },
    { name: "G03.1 Quadrilaterals", filename: "G03.1 Quadrilaterals.pdf", path: "/pdfs/Geometry/G03.1 Quadrilaterals.pdf" },
    { name: "G04 Circles", filename: "G04 Circles.pdf", path: "/pdfs/Geometry/G04 Circles.pdf" },
    { name: "G05 3D Shapes", filename: "G05 3D Shapes.pdf", path: "/pdfs/Geometry/G05 3D Shapes.pdf" },
    { name: "G06 Similarity", filename: "G06 Similarity.pdf", path: "/pdfs/Geometry/G06 Similarity.pdf" },
    { name: "G2.1 Triangles", filename: "G2.1 Triangles.pdf", path: "/pdfs/Geometry/G2.1 Triangles.pdf" },
    { name: "G2.2 Pythagorean Theorem", filename: "G2.2 Pythagorean Theorem.pdf", path: "/pdfs/Geometry/G2.2 Pythagorean Theorem.pdf" },
    { name: "G2.3 Congruence", filename: "G2.3 Congruence.pdf", path: "/pdfs/Geometry/G2.3 Congruence.pdf" },
    { name: "G2.4 Further Triangles", filename: "G2.4 Further Triangles.pdf", path: "/pdfs/Geometry/G2.4 Further Triangles.pdf" },
  ],

  "Number Theory": [
    { name: "N1 Basics", filename: "N1 Basics.pdf", path: "/pdfs/Number Theory/N1 Basics.pdf" },
    { name: "N1.1 Factor Arithmetic", filename: "N1.1 Factor Arithmetic.pdf", path: "/pdfs/Number Theory/N1.1 Factor Arithmetic.pdf" },
    { name: "N2 Number Systems", filename: "N2 Number Systems.pdf", path: "/pdfs/Number Theory/N2 Number Systems.pdf" },
    { name: "N3 Diophantine Equations", filename: "N3 Diophantine Equations.pdf", path: "/pdfs/Number Theory/N3 Diophantine Equations.pdf" },
    { name: "N4 Mod Arithmetic", filename: "N4 Mod Arithmetic.pdf", path: "/pdfs/Number Theory/N4 Mod Arithmetic.pdf" },
  ],

  "Science Handouts": [
    { name: "01 - Chemistry", filename: "01 - Chemistry.pdf", path: "/pdfs/Science Handouts/01 - Chemistry.pdf" },
    { name: "P01 Kinematics", filename: "P01 Kinematics.pdf", path: "/pdfs/Science Handouts/P01 Kinematics.pdf" },
    { name: "P02 NLM", filename: "P02 NLM.pdf", path: "/pdfs/Science Handouts/P02 NLM.pdf" },
    { name: "P03 Energy, Work and Power", filename: "P03 Energy, Work and Power.pdf", path: "/pdfs/Science Handouts/P03 Energy, Work and Power.pdf" },
    { name: "P04 Rotational Mechanics", filename: "P04 Rotational Mechanics.pdf", path: "/pdfs/Science Handouts/P04 Rotational Mechanics.pdf" },
    { name: "P05 Oscillations", filename: "P05 Oscillations.pdf", path: "/pdfs/Science Handouts/P05 Oscillations.pdf" },
  ],

  Statistics: [
    { name: "00 - Statistics", filename: "00 - Statistics.pdf", path: "/pdfs/Statistics/00 - Statistics.pdf" },
  ],
};

export default notesData;
