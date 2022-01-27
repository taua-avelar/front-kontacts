import CustomizedToastify from "../helpers/toastify/Toastify";

export default async function getContacts(token) {
  try {
    const response = await fetch(
      "https://cubos-api-contacts.herokuapp.com/contatos",
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return CustomizedToastify(error.message);
  }
}
