function formatPhoneNumber(phoneNumber: string) {
  const pattern = "(d{3})(d{4})(d{4})";
  const regex = new RegExp(pattern);
  const formattedPhoneNumber = phoneNumber.replace(regex, "$1-$2-$3");
  return formattedPhoneNumber;
}

export default formatPhoneNumber;
