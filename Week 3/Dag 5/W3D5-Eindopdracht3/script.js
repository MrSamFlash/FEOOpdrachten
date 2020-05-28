// GENERATE ITEM
function MakeListItem() {
  const newTask = document.createElement("li");
  const taskValue = document.querySelector("#newtask").value;
  const taskList = document.querySelector("#tasklist");
  let text = document.createTextNode(taskValue);
  newTask.appendChild(text);

  const deleteButton = document.createElement("img");
  deleteButton.src = "trash-delete-icon.jpg";
  deleteButton.width = 25;

  newTask.append(deleteButton);
  taskList.appendChild(newTask);

  deleteButton.addEventListener("click", () => {
    alert("Het werkt!");
    function DeleteListItem() {
      taskList.removeChild(newTask); //Helaas heb ik dit ook niet werkende kunnen krijgen :(
    }
    DeleteListItem();
    DeleteData();
  });
}

// TAKEN OP PAGINA KRIJGEN!
async function dataList() {
  await GetData(database).then((data) =>
    data.forEach((task) => {
      //Kon het maar niet voor elkaar krijgen dat de tekst in de LI items de taakomschrijving moest worden...
      MakeListItem(task.description);
      console.log(task.description);
    })
  );
}
dataList();

// BUTTON "ADD TASK"
const addButton = document.querySelector("#addbutton");
addButton.addEventListener("click", () => {
  MakeListItem();
  PostData();
  //Dit werkt gelukkig redelijk goed...
});
