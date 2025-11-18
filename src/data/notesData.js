// data/notesData.js
import slugify from "slugify";

const rawNotesData = {
  Algebra: [
    {
      name: "1.1 Expressions",
      path: "/pdfs/Algebra/1.1 Expressions.pdf",
      keywords: ["algebra", "expressions", "simplifying expressions", "variables", "math basics"],
      description:
        "Introduction to algebraic expressions, including terms, coefficients, like terms, and techniques for simplifying expressions."
    },
    { 
      name: "1.2 Equations", 
      path: "/pdfs/Algebra/1.2 Equations.pdf",
      keywords: ["algebra", "equations", "solving equations", "mathematics", "linear equations"],
      description:
        "Step-by-step notes on solving linear equations, simplifying expressions, and tackling word problems involving one-variable equations."
    },
    {
      name: "1.3 Abs. Value & Inequalities",
      path: "/pdfs/Algebra/1.3 Abs. Value & Inequalities.pdf",
      keywords: ["algebra", "absolute value", "inequalities", "number line", "solution sets"],
      description:
        "Covers absolute value, linear inequalities, graphing solution sets on the number line, and solving basic absolute value inequalities."
    },
    { 
      name: "1.4 Quadratics", 
      path: "/pdfs/Algebra/1.4 Quadratics.pdf",
      keywords: ["algebra", "quadratic equations", "factorization", "roots", "math notes"],
      description:
        "Comprehensive notes on quadratic equations, including factorisation, completing the square, quadratic formula, and graphing parabolas."
    },
    { 
      name: "2.1 Exponents and Radicals", 
      path: "/pdfs/Algebra/2.1 Exponents and Radicals.pdf",
      keywords: ["algebra", "exponents", "radicals", "powers", "square roots"],
      description:
        "Covers laws of exponents, simplifying expressions with powers, and working with square roots and other radicals."
    },
    { 
      name: "2.2 Logarithms", 
      path: "/pdfs/Algebra/2.2 Logarithms.pdf",
      keywords: ["algebra", "logarithms", "log rules", "antilog", "log properties"],
      description:
        "Introduction to logarithms, log rules, converting between exponential and logarithmic forms, and solving basic logarithmic equations."
    },
    {
      name: "3.1 Sequences and Series",
      path: "/pdfs/Algebra/3.1 Sequences and Series.pdf",
      keywords: ["algebra", "sequences", "series", "patterns", "math"],
      description:
        "General introduction to sequences and series, recognising patterns, and using notation for terms and partial sums."
    },
    { 
      name: "3.2 Arithmetic Sequences and Series", 
      path: "/pdfs/Algebra/3.2 Arithmetic Sequences and Series.pdf",
      keywords: ["algebra", "sequences", "series", "arithmetic progression"],
      description:
        "Notes on arithmetic sequences and series, including nth term, sum of n terms, and applications of arithmetic progressions."
    },
    { 
      name: "3.3 Geometric Sequences and Series", 
      path: "/pdfs/Algebra/3.3 Geometric Sequences and Series.pdf",
      keywords: ["algebra", "geometric series", "geometric progression", "ratio"],
      description:
        "Explains geometric sequences and series, common ratio, nth term formula, and sum of finite and infinite geometric series."
    },
    { 
      name: "3.4 Further Sequences and Series", 
      path: "/pdfs/Algebra/3.4 Further Sequences and Series.pdf",
      keywords: ["algebra", "advanced series", "summation", "math"],
      description:
        "Advanced sequences and series, including mixed sequences, recurrence relations, and introductory sigma notation."
    },
    { 
      name: "4 Coordinate Geometry", 
      path: "/pdfs/Algebra/4 Coordinate Geometry.pdf",
      keywords: ["algebra", "coordinate geometry", "lines", "slopes", "distance formula"],
      description:
        "Coordinate geometry basics: distance formula, midpoint, slope, and equations of lines in different forms."
    },
    { 
      name: "4.1 Polynomials", 
      path: "/pdfs/Algebra/4.1 Polynomials.pdf",
      keywords: ["algebra", "polynomials", "roots", "equations", "coefficients"],
      description:
        "Overview of polynomials, including operations, factorisation, roots, and relationships between coefficients and roots."
    },
    { 
      name: "5.1 Functions", 
      path: "/pdfs/Algebra/5.1 Functions.pdf",
      keywords: ["functions", "algebra", "domain", "range", "mapping"],
      description:
        "Introduction to functions as mappings, with focus on function notation, domain, range, and basic types of functions."
    },
    { 
      name: "5.2 Floor and Ceiling", 
      path: "/pdfs/Algebra/5.2 Floor and Ceiling.pdf",
      keywords: ["functions", "floor function", "ceiling function", "rounding", "discrete math"],
      description:
        "Explores floor and ceiling functions, their graphs, properties, and applications in discrete mathematics and contest problems."
    },
    { 
      name: "6.1 Right Triangle Trigonometry", 
      path: "/pdfs/Algebra/6.1 Right Triangle Trigonometry.pdf",
      keywords: ["trigonometry", "right triangles", "sine", "cosine", "tangent"],
      description:
        "Defines sine, cosine, and tangent using right triangles, with applications to angle problems, heights, distances, and word problems."
    },
    { 
      name: "6.2 Unit Circle Trigonometry", 
      path: "/pdfs/Algebra/6.2 Unit Circle Trigonometry.pdf",
      keywords: ["trigonometry", "unit circle", "sin", "cos", "angles"],
      description:
        "Unit circle-based trigonometry, with key angle values, radians, and sine–cosine definitions using coordinates on the circle."
    },
    {
      name: "6.3 Trig Graphs and Equations",
      path: "/pdfs/Algebra/6.3 Trig Graphs and Equations.pdf",
      keywords: ["trigonometry", "graphs", "periodic functions", "trig equations"],
      description:
        "Graphs of sine, cosine, and tangent functions, transformations, and solving standard trigonometric equations."
    },
    {
      name: "6.4 Trig Identities",
      path: "/pdfs/Algebra/6.4 Trig Identities.pdf",
      keywords: ["trigonometry", "identities", "trig formulas", "simplifying trig"],
      description:
        "Fundamental trigonometric identities, including Pythagorean, angle-sum, and double-angle identities, with simplification and proof examples."
    },
    {
      name: "6.5 Further Topics",
      path: "/pdfs/Algebra/6.5 Further Topics.pdf",
      keywords: ["trigonometry", "advanced trig", "algebra", "math topics"],
      description:
        "Further trigonometry and algebra topics that build on earlier sections, typically used for advanced problem-solving and contests."
    },
    {
      name: "7.1 Vectors",
      path: "/pdfs/Algebra/7.1 Vectors.pdf",
      keywords: ["vectors", "algebra", "magnitude", "direction", "dot product"],
      description:
        "Introduction to vectors in the plane and space, including magnitude, direction, vector operations, and basic applications."
    },
    {
      name: "7.2 3D Geometry",
      path: "/pdfs/Algebra/7.2 3D Geometry.pdf",
      keywords: ["3D geometry", "space", "coordinates", "lines", "planes"],
      description:
        "Covers three-dimensional coordinate geometry with points, lines, and planes, and visualisation of shapes in space."
    },
    {
      name: "7.3 Determinants and Matrices",
      path: "/pdfs/Algebra/7.3 Determinants and Matrices.pdf",
      keywords: ["matrices", "determinants", "linear algebra", "systems of equations"],
      description:
        "Basic matrix operations, determinants, and their use in solving systems of linear equations and simple linear algebra problems."
    },
    {
      name: "8 Complex Numbers",
      path: "/pdfs/Algebra/8 Complex Numbers.pdf",
      keywords: ["complex numbers", "imaginary unit", "argand plane", "algebra"],
      description:
        "Introduction to complex numbers, including the imaginary unit, addition, multiplication, modulus, argument, and Argand diagram."
    },
    { 
      name: "9 Logic, Proof & Games", 
      path: "/pdfs/Algebra/9 Logic, Proof & Games.pdf",
      keywords: ["logic", "proofs", "mathematics", "reasoning", "games"],
      description:
        "Covers mathematical logic, proof techniques, and problem-solving through puzzles and strategy games to build reasoning skills."
    }
  ],

  "Basics And Arithmetic": [
    { 
      name: "Arithmetic - Graphs, and Statistics", 
      path: "/pdfs/Basics And Arithmetic/Arithmetic - Graphs, and Statistics.pdf",
      keywords: ["arithmetic", "graphs", "statistics", "data", "averages"],
      description:
        "Introduction to bar graphs, line graphs, pie charts, and basic statistics such as mean, median, mode, and data interpretation."
    },
    { 
      name: "Arithmetic Ratio, Proportion", 
      path: "/pdfs/Basics And Arithmetic/Arithmetic Ratio, Proportion.pdf",
      keywords: ["ratio", "proportion", "arithmetic", "math basics"],
      description:
        "Foundational notes on ratios and proportions, including unitary method and real-life applications like mixing and scaling."
    },
    { 
      name: "Arithmetic Time, Work, TSD", 
      path: "/pdfs/Basics And Arithmetic/Arithmetic Time, Work, TSD.pdf",
      keywords: ["time speed distance", "work problems", "math reasoning"],
      description:
        "Covers time–speed–distance and time–work problems, with techniques for combined work and relative speed questions."
    },
    { 
      name: "Basics - TSD and Time-Work", 
      path: "/pdfs/Basics And Arithmetic/Basics - TSD and Time-Work.pdf",
      keywords: ["basics", "time", "work", "math"],
      description:
        "Basic introduction to time–speed–distance and time–work concepts, aimed at building intuition through simple examples."
    },
    { 
      name: "Basics, Arithmetic", 
      path: "/pdfs/Basics And Arithmetic/Basics, Arithmetic.pdf",
      keywords: ["arithmetic", "numbers", "operations"],
      description:
        "Core arithmetic concepts: types of numbers, four operations, order of operations, and simple mental math strategies."
    },
    { 
      name: "Basics, Decimals", 
      path: "/pdfs/Basics And Arithmetic/Basics, Decimals.pdf",
      keywords: ["decimals", "place value", "math operations"],
      description:
        "Understanding decimal place value, comparing decimals, and performing addition, subtraction, multiplication, and division with decimals."
    },
    { 
      name: "Basics, Fractions", 
      path: "/pdfs/Basics And Arithmetic/Basics, Fractions.pdf",
      keywords: ["fractions", "numerator", "denominator", "simplification"],
      description:
        "Notes on fractions: types of fractions, simplification, equivalent fractions, and operations with like and unlike denominators."
    },
    { 
      name: "Basics, Geometry", 
      path: "/pdfs/Basics And Arithmetic/Basics, Geometry.pdf",
      keywords: ["geometry", "shapes", "angles"],
      description:
        "Basic geometry for beginners, including common shapes, types of angles, perimeter, and introductory area concepts."
    },
    { 
      name: "Basics, Measurement and Time", 
      path: "/pdfs/Basics And Arithmetic/Basics, Measurement and Time.pdf",
      keywords: ["measurement", "time", "conversion"],
      description:
        "Covers standard units of length, mass, and capacity, unit conversions, and reading clocks and calendars accurately."
    },
    { 
      name: "Basics, Number Theory", 
      path: "/pdfs/Basics And Arithmetic/Basics, Number Theory.pdf",
      keywords: ["number theory", "factors", "divisibility"],
      description:
        "Introductory number theory: factors, multiples, prime numbers, LCM, HCF, and common divisibility rules."
    },
    { 
      name: "Basics, Percentage", 
      path: "/pdfs/Basics And Arithmetic/Basics, Percentage.pdf",
      keywords: ["percentage", "ratios", "arithmetic"],
      description:
        "Working with percentages, including conversion to fractions and decimals, percentage increase/decrease, discounts, and simple profit–loss."
    }
  ],

  Calculus: [
    { 
      name: "C01 Limits", 
      path: "/pdfs/Calculus/C01 Limits.pdf",
      keywords: ["limits", "calculus", "approach", "continuity"],
      description:
        "Conceptual and computational introduction to limits, including evaluating limits from graphs and basic algebraic techniques."
    },
    { 
      name: "C02 Differentiation", 
      path: "/pdfs/Calculus/C02 Differentiation.pdf",
      keywords: ["differentiation", "derivatives", "slopes", "tangent"],
      description:
        "Differentiation rules, derivatives of standard functions, and applications to slopes of tangents and rates of change."
    },
    { 
      name: "C03 Integration", 
      path: "/pdfs/Calculus/C03 Integration.pdf",
      keywords: ["integration", "antiderivative", "area under curve"],
      description:
        "Fundamentals of integration as the reverse of differentiation, basic antiderivatives, and area under curves using definite integrals."
    },
    { 
      name: "C04 Differential Equations", 
      path: "/pdfs/Calculus/C04 Differential Equations.pdf",
      keywords: ["differential equations", "calculus", "functions"],
      description:
        "Introduction to first-order differential equations, separable equations, and simple models involving growth and decay."
    },
    { 
      name: "C05 Calculus Topics", 
      path: "/pdfs/Calculus/C05 Calculus Topics.pdf",
      keywords: ["calculus", "mathematics", "mixed topics"],
      description:
        "Further calculus topics, extending core ideas of limits, derivatives, and integrals to more challenging problems and techniques."
    },
    { 
      name: "C06 Multivariable Calculus", 
      path: "/pdfs/Calculus/C06 Multivariable Calculus.pdf",
      keywords: ["multivariable calculus", "partial derivatives", "3D surfaces"],
      description:
        "Introduction to multivariable calculus, including functions of several variables, partial derivatives, and visualising surfaces in 3D."
    }
  ],

  "Counting and Probability": [
    {
      name: "S1 Sets",
      path: "/pdfs/Counting and Probability/S1 Sets.pdf",
      keywords: ["sets", "set theory", "notation", "union", "intersection"],
      description:
        "Basic set theory, including notation, subsets, union, intersection, complement, and simple Venn diagram problems."
    },
    {
      name: "S2 Counting Rules",
      path: "/pdfs/Counting and Probability/S2 Counting Rules.pdf",
      keywords: ["counting", "addition rule", "multiplication rule", "combinatorics"],
      description:
        "Fundamental counting principles: addition and multiplication rules, with structured examples and contest-style problems."
    },
    {
      name: "S3 Permutations",
      path: "/pdfs/Counting and Probability/S3 Permutations.pdf",
      keywords: ["permutations", "arrangements", "factorial", "counting"],
      description:
        "Permutations and arrangements, including factorial notation, permutations with and without restrictions, and ordering problems."
    },
    {
      name: "S4 Combinations",
      path: "/pdfs/Counting and Probability/S4 Combinations.pdf",
      keywords: ["combinations", "nCr", "selection", "binomial coefficient"],
      description:
        "Introduction to combinations and binomial coefficients, focusing on choosing subsets and typical competition questions."
    },
    {
      name: "S5 Binomial Theorem",
      path: "/pdfs/Counting and Probability/S5 Binomial Theorem.pdf",
      keywords: ["binomial theorem", "expansion", "nCr", "algebra"],
      description:
        "Binomial expansion formulas, coefficients, and methods for finding specific terms and sums in expanded expressions."
    },
    {
      name: "S6 Combinatorics Topics",
      path: "/pdfs/Counting and Probability/S6 Combinatorics Topics.pdf",
      keywords: ["combinatorics", "advanced counting", "problem solving"],
      description:
        "Further combinatorics topics, including more sophisticated counting problems and strategies used in math contests."
    },
    {
      name: "S7 Distinguishability",
      path: "/pdfs/Counting and Probability/S7 Distinguishability.pdf",
      keywords: ["distinguishable objects", "permutations", "counting", "combinatorics"],
      description:
        "Counting permutations of objects with repetitions and understanding distinguishable vs indistinguishable arrangements."
    },
    {
      name: "S08 Random Variables",
      path: "/pdfs/Counting and Probability/S08 Random Variables.pdf",
      keywords: ["random variables", "discrete probability", "expectation"],
      description:
        "Introduction to discrete random variables, probability distributions, and basic expected value concepts."
    },
    {
      name: "T1 Probability",
      path: "/pdfs/Counting and Probability/T1 Probability.pdf",
      keywords: ["probability", "events", "sample space", "basic probability"],
      description:
        "Core probability ideas: sample spaces, events, basic probability rules, and simple theoretical and experimental problems."
    },
    {
      name: "T2 Prob with Counting",
      path: "/pdfs/Counting and Probability/T2 Prob with Counting.pdf",
      keywords: ["probability", "counting", "combinatorics", "nCr", "cases"],
      description:
        "Uses counting methods like permutations and combinations to solve probability questions efficiently."
    },
    {
      name: "T3 Probability Topics",
      path: "/pdfs/Counting and Probability/T3 Probability Topics.pdf",
      keywords: ["probability", "advanced topics", "conditional", "independence"],
      description:
        "Additional probability topics, such as conditional probability, independence, and multi-step experiments."
    },
    {
      name: "T4 D. Geo Combi",
      path: "/pdfs/Counting and Probability/T4 D. Geo Combi.pdf",
      keywords: ["discrete geometry", "combinatorics", "counting", "geometry"],
      description:
        "Discrete geometry and combinatorics problems, blending geometric configurations with counting arguments."
    },
    {
      name: "T5 C. Geo Combi",
      path: "/pdfs/Counting and Probability/T5 C. Geo Combi.pdf",
      keywords: ["combinatorial geometry", "counting", "geometry", "problem solving"],
      description:
        "Combinatorial geometry topics, focusing on counting geometric objects and configurations in the plane."
    },
    {
      name: "U9.1 Random Variables",
      path: "/pdfs/Counting and Probability/U9.1 Random Variables.pdf",
      keywords: ["random variables", "probability", "expectation", "variance"],
      description:
        "Further work with random variables, expectation, and variance, with more advanced examples suited for contest preparation."
    }
  ],

  Geometry: [
    { 
      name: "G01 Lines and Angles", 
      path: "/pdfs/Geometry/G01 Lines and Angles.pdf",
      keywords: ["geometry", "lines", "angles", "parallel lines"],
      description:
        "Covers types of angles, angle relationships with parallel lines and transversals, and basic angle-chasing problems."
    },
    {
      name: "G2.1 Triangles",
      path: "/pdfs/Geometry/G2.1 Triangles.pdf",
      keywords: ["geometry", "triangles", "angles", "sides"],
      description:
        "Fundamentals of triangles, including classification by sides and angles, triangle inequality, and basic angle properties."
    },
    {
      name: "G2.2 Pythagorean Theorem",
      path: "/pdfs/Geometry/G2.2 Pythagorean Theorem.pdf",
      keywords: ["pythagorean theorem", "right triangles", "geometry"],
      description:
        "Pythagorean theorem and its applications in right triangles, distance problems, and simple coordinate geometry."
    },
    {
      name: "G2.3 Congruence",
      path: "/pdfs/Geometry/G2.3 Congruence.pdf",
      keywords: ["triangle congruence", "SSS", "SAS", "ASA", "AAS"],
      description:
        "Triangle congruence criteria (SSS, SAS, ASA, AAS), with proofs and applications to geometric problems."
    },
    {
      name: "G2.4 Further Triangles",
      path: "/pdfs/Geometry/G2.4 Further Triangles.pdf",
      keywords: ["geometry", "triangles", "advanced", "inequalities"],
      description:
        "Further properties of triangles, including special points (centroid, incenter, etc.), inequalities, and challenge problems."
    },
    { 
      name: "G03 Polygons", 
      path: "/pdfs/Geometry/G03 Polygons.pdf",
      keywords: ["polygons", "geometry", "shapes", "angles"],
      description:
        "Properties of polygons, including classification, angle sums, and basic regular polygon ideas."
    },
    {
      name: "G03.1 Quadrilaterals",
      path: "/pdfs/Geometry/G03.1 Quadrilaterals.pdf",
      keywords: ["quadrilaterals", "parallelogram", "rectangle", "square", "trapezium"],
      description:
        "Detailed study of quadrilaterals, including parallelograms, rectangles, squares, rhombi, and trapeziums with their properties."
    },
    { 
      name: "G04 Circles", 
      path: "/pdfs/Geometry/G04 Circles.pdf",
      keywords: ["geometry", "circles", "radius", "chord"],
      description:
        "Circle geometry fundamentals: radius, diameter, chords, arcs, central and inscribed angles, and key theorems about tangents."
    },
    {
      name: "G05 3D Shapes",
      path: "/pdfs/Geometry/G05 3D Shapes.pdf",
      keywords: ["3D shapes", "geometry", "volume", "surface area"],
      description:
        "Introduction to three-dimensional shapes, nets, volume, and surface area for common solids such as prisms and cylinders."
    },
    {
      name: "G06 Similarity",
      path: "/pdfs/Geometry/G06 Similarity.pdf",
      keywords: ["similarity", "scale factor", "triangles", "geometry"],
      description:
        "Similarity of figures, especially triangles, including scale factors, proportionality, and typical exam-style problems."
    },
    {
      name: "G3.2 Polygons",
      path: "/pdfs/Geometry/G3.2 Polygons.pdf",
      keywords: ["polygons", "regular polygons", "geometry"],
      description:
        "Further work on polygons, focusing on regular polygons, angle relationships, and tiling-style problems."
    }
  ],

  "Number Theory": [
    {
      name: "N1 Basics",
      path: "/pdfs/Number Theory/N1 Basics.pdf",
      keywords: ["number theory", "integers", "divisibility", "math basics"],
      description:
        "Basic number theory concepts, including divisibility, prime and composite numbers, and simple properties of integers."
    },
    {
      name: "N1.1 Factor Arithmetic",
      path: "/pdfs/Number Theory/N1.1 Factor Arithmetic.pdf",
      keywords: ["factors", "multiples", "number theory", "prime factorization"],
      description:
        "Factor arithmetic, prime factorisation, finding number of divisors, and related problems common in contests."
    },
    {
      name: "N2 Number Systems",
      path: "/pdfs/Number Theory/N2 Number Systems.pdf",
      keywords: ["number systems", "bases", "integers", "representation"],
      description:
        "Different number systems and base representations, with conversions between bases and typical exam questions."
    },
    {
      name: "N3 Diophantine Equations",
      path: "/pdfs/Number Theory/N3 Diophantine Equations.pdf",
      keywords: ["diophantine equations", "integer solutions", "number theory"],
      description:
        "Linear and simple non-linear Diophantine equations, methods for finding integer solutions, and classic problem types."
    },
    {
      name: "N4 Mod Arithmetic",
      path: "/pdfs/Number Theory/N4 Mod Arithmetic.pdf",
      keywords: ["modular arithmetic", "remainders", "congruences", "number theory"],
      description:
        "Introduction to modular arithmetic, congruences, working with remainders, and applications to contest problems."
    }
  ],

  "Science Handouts": [
    {
      name: "01 - Chemistry",
      path: "/pdfs/Science Handouts/01 - Chemistry.pdf",
      keywords: ["chemistry", "science notes", "atoms", "reactions"],
      description:
        "Core chemistry concepts appropriate for school science: particles, atoms, simple reactions, and fundamental ideas."
    },
    {
      name: "P01 Kinematics",
      path: "/pdfs/Science Handouts/P01 Kinematics.pdf",
      keywords: ["physics", "kinematics", "motion", "velocity", "acceleration"],
      description:
        "Kinematics in one and two dimensions, covering displacement, velocity, acceleration, and basic motion equations."
    },
    {
      name: "P02 NLM",
      path: "/pdfs/Science Handouts/P02 NLM.pdf",
      keywords: ["physics", "newton's laws", "forces", "dynamics"],
      description:
        "Newton’s Laws of Motion, free-body diagrams, forces, and typical problems involving tension, friction, and weight."
    },
    {
      name: "P03 Energy, Work and Power",
      path: "/pdfs/Science Handouts/P03 Energy, Work and Power.pdf",
      keywords: ["physics", "work", "energy", "power"],
      description:
        "Definitions and relationships between work, energy, and power, with calculations and conceptual examples."
    },
    {
      name: "P04 Rotational Mechanics",
      path: "/pdfs/Science Handouts/P04 Rotational Mechanics.pdf",
      keywords: ["physics", "rotation", "torque", "angular momentum"],
      description:
        "Rotational motion, torque, moment of inertia, and basic angular dynamics, parallel to linear motion concepts."
    },
    {
      name: "P05 Oscillations",
      path: "/pdfs/Science Handouts/P05 Oscillations.pdf",
      keywords: ["physics", "oscillations", "SHM", "periodic motion"],
      description:
        "Oscillatory motion and simple harmonic motion, including amplitude, period, frequency, and classic spring–mass examples."
    }
  ],

  Statistics: [
    {
      name: "00 - Statistics",
      path: "/pdfs/Statistics/00 - Statistics.pdf",
      keywords: ["statistics", "data", "mean", "median", "mode"],
      description:
        "Introduction to statistics, covering data types, measures of central tendency, and basic ideas of data representation."
    }
  ]
};

// Flatten all categories into one array with SEO-friendly slugs
const notesData = Object.entries(rawNotesData).flatMap(([category, notes]) =>
  notes.map((note) => ({
    id: `${category}-${note.name}`,
    title: note.name,
    category,
    description:
      note.description ||
      `${note.name} notes from ${category} category — download or view online.`,
    slug: slugify(`${category}-${note.name}`, { lower: true, strict: true }),
    pdfUrl: note.path.replace("public", ""), // if you serve from /pdfs/... under public
    keywords: note.keywords || []
  }))
);

export default notesData;
