
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

/*
list starts with a couple of freelancers
list refreshes periodically with a new entry

*/

const roster = [
    {name: "Alice Wonderland", price: 30, occupation: "dragon-slayer"},
    {name: "Bob Dylan", price: 50, occupation: "musician"}
];
function init() {
    console.log('freelance forum init..');
    // iterate over initial roster list
    const rosterView = document.querySelector('#roster');
    roster.forEach((item, i)=>{
        const el = document.createElement("li");
        console.log(item); 
        el.innerHTML = item.name;
        rosterView.appendChild(el);
    })

}

// add new freelancer to roster
function addToRoster(){
    console.log('add to roster');
    
}
init();
