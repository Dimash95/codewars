const rgb = (r, g, b) => {
  const str1 = r.toString(16).toUpperCase();
  const str2 = g.toString(16).toUpperCase();
  const str3 = b.toString(16).toUpperCase();
  let res1 = "";
  let res2 = "";
  let res3 = "";

  if (r < 0) {
    res1 = "00";
  } else if (r > 255) {
    res1 = "FF";
  } else {
    res1 = str1.padStart(2, "0");
  }

  if (g < 0) {
    res2 = "00";
  } else if (g > 255) {
    res2 = "FF";
  } else {
    res2 = str2.padStart(2, "0");
  }

  if (b < 0) {
    res3 = "00";
  } else if (b > 255) {
    res3 = "FF";
  } else {
    res3 = str3.padStart(2, "0");
  }

  return `${res1}${res2}${res3}`;
};

console.log(rgb(0, 0, -20));
