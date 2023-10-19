export const validationCep = (cep) => {
  const cepNumber = cep;

  fetch(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
    response.json().then((data) => console.log(data));
  });
};
