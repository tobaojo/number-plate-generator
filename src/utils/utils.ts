export const formatNumberPlate = (plate: string) => {
  const splittedPlate = plate?.split("");
  splittedPlate?.splice(4, 0, " ");
  const formattedPlate = splittedPlate?.join("");
  return formattedPlate;
};

export const generateRandomVrm = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let vrm = "";
  for (let i = 0; i < 4; i++) {
    vrm +=
      i < 2
        ? letters.charAt(Math.floor(Math.random() * letters.length))
        : numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  vrm += " ";
  for (let i = 0; i < 3; i++) {
    vrm += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return vrm;
};
