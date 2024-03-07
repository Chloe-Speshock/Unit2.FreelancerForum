// const names = ["Bob", "Alice", "Frank", "Tina", "Mary"];
// const jobs = ["Doctor", "Writer", "Programmer", "Cleaner", "Driver"];
// const price = [];
const freelancers = [
  {
    name: "Bob",
    occupation: "Doctor",
    price: 70,
  },
  {
    name: "Alice",
    occupation: "Writer",
    price: 50,
  },
];

const newFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const addFreelancerIntervalId = setInterval(addFreelancer, 3000);
render();

function calculateAverage() {
  const sum = freelancers.reduce(
    (accumulator, currentFreelancer) => accumulator + currentFreelancer.price,
    0
  );
  const average = sum / freelancers.length;
  const averagePriceElement = document.querySelector("#averagePrice");
  averagePriceElement.textContent = `Average Price: ${average.toFixed(2)}`;
}
function render() {
  const freelancersList = document.querySelector("#freelancers");
  freelancersList.innerHTML = "";
  const headersRow = document.createElement("tr");
  headersRow.innerHTML = "<th>Name </><th>Occupation </th><th>Price </th>";
  freelancersList.appendChild(headersRow);

  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td> ${freelancer.name}</td>
    <td> ${freelancer.occupation}</td>
    <td> ${freelancer.price}`;
    freelancersList.appendChild(row);
  });
  calculateAverage();

  //   const averagePrice = document.querySelector("#averagePrice");
  //   freelancers.forEach((freelancer) => {
  //     const priceDiv = document.createElement("div");
  //     priceDiv.innerHTML = `<p>price: ${freelancer.price}</p>`;
  //     averagePrice.appendChild(priceDiv);
  //   });
}

function addFreelancer() {
  const freelancer =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
  freelancers.push(freelancer);
  render(freelancer);
  //   calculateAverage();
}
function renderFreelancer(freelancer) {
  const freelancersTable = document.querySelector("#freelancers");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${freelancer.name}</td>
    <td>${freelancer.occupation}</td>
    <td>${freelancer.price}</td>`;

  freelancersTable.appendChild(newRow);
}
