const aereasNacional = ['Latam', 'Gol', 'Azul']



const airCompanies = [...aereasNacional,"Delta","United AirLines",
"Emirates",];


console.log(airCompanies);

const user = {
    name: "Daniel",
    email: "daniel@gmail.com",
    password: "123456789456312",
};

//destructuring assignment
const { password, ...data } = user;

console.log("Oh meu Deus!", data);