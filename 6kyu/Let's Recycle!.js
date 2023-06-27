function recycle(array) {
  const output = [];
  let paper = [];
  let glass = [];
  let organic = [];
  let plastic = [];

  array.forEach((e) => {
    if (e.material === "paper") {
      paper.push(e.type);
    }
    if (e.material === "glass") {
      glass.push(e.type);
    }
    if (e.material === "organic") {
      organic.push(e.type);
    }
    if (e.material === "plastic") {
      plastic.push(e.type);
    }
    if (e.secondMaterial) {
      if (e.secondMaterial === "paper") {
        paper.push(e.type);
      }
      if (e.secondMaterial === "glass") {
        glass.push(e.type);
      }
      if (e.secondMaterial === "organic") {
        organic.push(e.type);
      }
      if (e.secondMaterial === "plastic") {
        plastic.push(e.type);
      }
    }
  });

  output.push(paper);
  output.push(glass);
  output.push(organic);
  output.push(plastic);
  return output;
}
console.log(
  recycle([
    { type: "rotten apples", material: "organic" },
    {
      type: "out of date yogurt",
      material: "organic",
      secondMaterial: "plastic",
    },
    { type: "wine bottle", material: "glass", secondMaterial: "paper" },
    { type: "amazon box", material: "paper" },
    { type: "beer bottle", material: "glass", secondMaterial: "paper" },
  ])
);
