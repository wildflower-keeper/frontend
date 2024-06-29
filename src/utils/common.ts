function formatPhoneNumber(phoneNumber: string) {
  if (!phoneNumber) {
    return "";
  }
  const pattern =
    phoneNumber.length === 11
      ? /(\d{3})(\d{4})(\d{4})/
      : /(\d{2,3})(\d{4})(\d{4})/;

  const formattedPhoneNumber = phoneNumber.replace(pattern, "$1-$2-$3");
  return formattedPhoneNumber;
}

export default formatPhoneNumber;
