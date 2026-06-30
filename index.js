// === State ===

/** Bank */
let bank = [];

/** Odds*/
let odds = [];

/** Evens */
let evens = [];

function addBank() {}

/** Form that allows user to add to the bank */
function bankForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a number to the bank.
      <input name="addBank" type="number" min="0" />
    </label>
    <button>Add number</button>
    <button id="sort1">Sort 1</button>
    <button id="sortAll">Sort All</button>
  `;
  // TODO: add a `submit` event listener
  const addButton = $form.querySelector("button");
  addButton.addEventListener("click", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    bank.push(Number(data.get("addBank")));

    render();
  });
  //Sort 1 button logic
  const sort1Button = $form.querySelector("#sort1");
  sort1Button.addEventListener("click", (event) => {
    event.preventDefault();
    //access bank array, mod first number, push into corresponding even or odd array.
    if (bank[0] % 2 == 0) {
      evens.push(bank.shift());
    } else if (bank[0] % 2 == 1) {
      odds.push(bank.shift());
    } else {
    }
    render();
  });
  //Sort all button logic
  const sortAllButton = $form.querySelector("#sortAll");
  sortAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    for (let i = 0; i < bank.length; i++) {
      if (bank[i] % 2 == 0) {
        evens.push(bank[i]);
      } else if (bank[i] % 2 == 1) {
        odds.push(bank[i]);
      } else {
      }
    }
    //Resets bank array to empty
    bank = [];
    render();
  });

  return $form;
}

function actualBankForm() {
  // let arrayString = bank.toString();
  // console.log(arrayString);

  // console.log(arrayString);
  const $form = document.createElement("form");
  $form.innerHTML = `
   <h2>Bank</h2>
   <p id="actualBank"></p>
   `;
  //Check if exists first, then resets what is displayed so we don't have past versions of the array displayed too.
  if (document.getElementById("actualBank")) {
    document.getElementById("actualBank").textContent = "";
  }
  //Start writing down every thing in the array.
  for (let x = 0; x < bank.length; x++) {
    document.getElementById("actualBank").innerHTML += bank[x] + " ";
  }
  return $form;
}

function oddsForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
  <h2>Odds</h2>
  <p id="odds"></p>
  `;
  //Check if exists first, then resets what is displayed so we don't have past versions of the array displayed too.
  if (document.getElementById("odds")) {
    document.getElementById("odds").textContent = "";
  }
  //Start writing down every thing in the array.
  for (let x = 0; x < odds.length; x++) {
    document.getElementById("odds").innerHTML += odds[x] + " ";
  }
  return $form;
}

function evensForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
  <h2>Evens</h2>
  <p id="evens"></p>
  `;
  //Check if exists first, then resets what is displayed so we don't have past versions of the array displayed too.
  if (document.getElementById("evens")) {
    document.getElementById("evens").textContent = "";
  }
  //Start writing down every thing in the array.
  for (let x = 0; x < evens.length; x++) {
    document.getElementById("evens").innerHTML += evens[x] + " ";
  }
  return $form;
}

//global body to append thing to
const body = document.querySelector("body");

// render()

const render = () => {
  const initialUI = document.createElement("div");

  initialUI.innerHTML = `
      <h1>Odds and Events</h1>
      <bank></bank>
      <realBank></realBank>
      <odds></odds>
      <evens></evens>
    `;
  initialUI.querySelector("bank").replaceWith(bankForm());
  initialUI.querySelector("realBank").replaceWith(actualBankForm());
  initialUI.querySelector("odds").replaceWith(oddsForm());
  initialUI.querySelector("evens").replaceWith(evensForm());
  body.replaceWith(initialUI);
  // console.log(bank);
  // console.log(odds);
  // console.log(evens);
};

render();

//Reference below. Ignore.

//  const buildStudentForm = ()=>{
//     const form = document.createElement("form")
//     form.innerHTML = `
//     <label for = "studentName">
//         Student Name :
//         <input type = "text" name = "studentName" />
//     </label>
//     <label for = "studentGrade">
//     Grade :
//         <input type = "number" name = "studentGrade" />
//     </label>

//     <p>Do they need help?</p>

//      <label for = "hwHelp">
//      Yes
//         <input type = "radio" name = "hwHelp" value = ${true} />
//     </label>

//      <label for = "hwHelp">
//      No
//         <input type = "radio" name = "hwHelp" value= ${false} />
//     </label>
//     <input type="submit" value ="Add new Student"/>
//     <button type = "button" >Submit Student</button>
// `
//     //add event Listener
//     form.addEventListener("submit",(e)=>{
//         //stoping default behavior
//         e.preventDefault()

//         //get the dataObject from the form
//         const data = new FormData(form)

//         //pulling data from the dataObject
//         const newStudentName = data.get("studentName")
//         const newStudentGrade = data.get("studentGrade")
//         const newStudentHelp = data.get("hwHelp")

//         //Using that data to create a new Student
//         const newStudent = {
//             name:newStudentName,
//             grade:newStudentGrade,
//             hwHelp:newStudentHelp
//         }

//         //adding the stuent to our array
//         studentData.unshift(newStudent)

//         //rerendering our page to show new student
//         render()
//     })

//     return(form)

// }

// const studentData = [
//     {
//         name:"Terry",
//         grade:1,
//         hwHelp:true,
//     },

//     {
//         name:"Maxine",
//         grade:3,
//         hwHelp:true,
//     },

//     {
//         name:"April",
//         grade:5,
//         hwHelp:false,
//     },

//     {
//         name:"Noah",
//         grade:2,
//         hwHelp:false,
//     },

//     {
//         name:"Zeke",
//         grade:1,
//         hwHelp:true,
//     }
// ]

// //global body to append thing to
// const body = document.querySelector("body")

// const removeStudent=(index)=>{
//     studentData.splice(index, 1)
//     render()
// }
// //function that evaluates studentData array and creates and appends a new component to the appropriate container
// const appendStudents = (arr)=>{
//     const studentCards = arr.map((student,index)=>{
//             //create container
//             const parentDiv = document.createElement("div")

//             //create each child and it's textContent
//             const nameTag = document.createElement("p")
//             nameTag.textContent = `Student Name : ${student.name}`

//             const gradeTag = document.createElement("p").textContent = `grade : ${student.grade}`

//             const hwHelp = document.createElement("p")
//             hwHelp.textContent = `Needs Help : ${student.hwHelp ? "yes":"no"}`

//             const removeButton = document.createElement("p")
//             removeButton.textContent = "X"
//             //pass in an anonymous function before our function
//             removeButton.addEventListener("click",()=>removeStudent(index))

//             //append children elements to the conatiner
//             parentDiv.append(nameTag, gradeTag, hwHelp, removeButton)

//             //push out/return the student car component created from the map
//             return parentDiv
//     })
//     //get the container that these cards will be appended to
//     const studentContainer = document.querySelector("#students")
//     //append the cards
//     studentContainer.replaceChildren(...studentCards)
// }

// const buildStudentForm = ()=>{
//     const form = document.createElement("form")
//     form.innerHTML = `
//     <label for = "studentName">
//         Student Name :
//         <input type = "text" name = "studentName" />
//     </label>
//     <label for = "studentGrade">
//     Grade :
//         <input type = "number" name = "studentGrade" />
//     </label>

//     <p>Do they need help?</p>

//      <label for = "hwHelp">
//      Yes
//         <input type = "radio" name = "hwHelp" value = ${true} />
//     </label>

//      <label for = "hwHelp">
//      No
//         <input type = "radio" name = "hwHelp" value= ${false} />
//     </label>
//     <input type="submit" value ="Add new Student"/>
//     <button type = "button" >Submit Student</button>
// `
//     //add event Listener
//     form.addEventListener("submit",(e)=>{
//         //stoping default behavior
//         e.preventDefault()

//         //get the dataObject from the form
//         const data = new FormData(form)

//         //pulling data from the dataObject
//         const newStudentName = data.get("studentName")
//         const newStudentGrade = data.get("studentGrade")
//         const newStudentHelp = data.get("hwHelp")

//         //Using that data to create a new Student
//         const newStudent = {
//             name:newStudentName,
//             grade:newStudentGrade,
//             hwHelp:newStudentHelp
//         }

//         //adding the stuent to our array
//         studentData.unshift(newStudent)

//         //rerendering our page to show new student
//         render()
//     })

//     return(form)

// }

// //Render

// const render = ()=>{
//     const initialUI = document.createElement("div")
//     initialUI.innerHTML=`
//         <h1>Homework Help!!</h1>
//         <div id = "formHolder"></div>
//         <div id = "students"></div>
//     `
//     body.replaceWith(initialUI)

//     const formHolder = document.querySelector("#formHolder")
//     formHolder && formHolder.replaceWith(buildStudentForm())
//     appendStudents(studentData)
// }

// //console.log(studentData)
// // const clickString = document.getElementById("clickString")
// // const button = document.querySelector("button")

// // console.log(clickString, button)

// // const changeString = ()=>{
// //     clickString.textContent = "The button was clicked!!"
// // }
// // button.addEventListener("click", changeString)
