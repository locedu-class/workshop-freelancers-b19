// freelancers
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// get random freelancer from list: freelancers
function getFreelancer() {
  const freelancer =
    freelancers[Math.floor(Math.random() * freelancers.length)];
  return freelancer;
}

const maxRoster = freelancers.length;

/*
list starts with a couple of freelancers
list refreshes periodically with a new entry
*/
// initial freelancers in the roster
const roster = [
  { name: "Alice Wonderland", price: 30, occupation: "dragon-slayer" },
  { name: "Bob Dylan", price: 50, occupation: "musician" },
];

function init() {
  console.log("freelance forum init..");
  // iterate over initial roster list
  initRoster();
}

// iterates through roster list and populates
function initRoster() {
  roster.forEach((item, i) => {
    console.log(item);
    addRoster(item);
  });
}

// add new freelancer to roster
function addRoster(freelancer) {
  const rosterView = document.querySelector("#roster");
  const clone = cloneListItem();
  clone.textContent = `${freelancer.name}, $${freelancer.price}, ${freelancer.occupation}`;
  rosterView.appendChild(clone);
}

function cloneListItem() {
    const templateListItem = document
      .getElementById("listItemFreelancer")
      .content.querySelector("li");
    const clone = document.importNode(templateListItem, true);
    return clone;
  }
// set intervals to add roster
const intervalId = setInterval(() => {});

function endRoster() {
  clearInterval(intervalId);
}

// start main
init();
