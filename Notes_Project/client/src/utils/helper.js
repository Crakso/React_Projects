export const shortForm = (name) => {
  if (!name) return "";
  let shortName = "";
  const short = name.split(" ");
  for (let i = 0; i < short.length; i++) {
    shortName += short[i][0];
  }
  return shortName.toUpperCase();
};

export const validateEmail = (email) => {
  const emailRegex = /^[a-z0-9]+[\._-]?[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}$/;
  return emailRegex.test(email);
};
