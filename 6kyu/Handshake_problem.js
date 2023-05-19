const getParticipants = (handshakes) => {
  let farmers = 0;

  while (handshakes > 0) {
    handshakes = handshakes - farmers;
    farmers++;
  }
  return farmers;
}

console.log(getParticipants(7));
