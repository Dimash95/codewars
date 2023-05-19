const Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

var bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;


function convert(input, source, target) {

  if (source == dec && target == bin) {
    return Number(input).toString(2);
  };
  if (source == dec && target == oct) {
    return Number(input).toString(8);
  };
  if (source == bin && target == dec) {
    return parseInt(Number(input), 2);
  };
  if (source == bin && target == hex) {
    return parseInt(Number(input), 2).toString(16);
  };
  if (source == dec && target == alpha) {
    return alpha[Number(input)]
  };
  if (source == dec && target == allow) {
    let res = ''
    if ([Number(input)] < 26) {
      res += allow[Number(input)]
    }
    if ([Number(input)] > 26) {
      res += allow[Number(input) - allow.length] + allow[Number(input) - allow.length]
    }
    return res
  };
  if (source == allow && target == hex) {
    let arr = [];
    for (var i = 0; i < input.length; i++) {
      arr[i] = ("00" + input.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + arr.join("\\u");
  };
}


// console.log(convert("15", dec, bin))
// console.log(convert("15", dec, oct))
// console.log(convert("1010", bin, dec))
// console.log(convert("1010", bin, hex))
// console.log(convert("0", dec, alpha))
// console.log(convert("27", dec, allow))
console.log(convert("hello", allow, hex))



// function convert(input, source, target) {
// 	var value = 0;

// 	for(var i=0; i<input.length; i++) {
// 		value = value * source.length + source.indexOf(input.charAt(i));
// 	}

// 	var result = target.charAt(value % target.length);
// 	var remaining = Math.floor(value / target.length);
	
// 	while(remaining){
// 		result = target.charAt(remaining % target.length) + result;
// 		remaining = Math.floor(remaining / target.length);
// 	}
// 	return result;
// }