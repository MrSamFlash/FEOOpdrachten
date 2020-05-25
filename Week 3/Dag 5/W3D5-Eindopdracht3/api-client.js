const database = "https://wincacademydatabase.firebaseio.com/Sam/Tasks.json"

// GET TASKS
async function GetData() {
    try {
        const result = await fetch(database)
            .then(result => result.json());

        console.log("Before (the raw result):", result);
        let tasks = Object.keys(result).map(key => ({
            id: key,
            description: result[key].description,
            done: result[key].done
        }));
        console.log("After the tasks array", tasks);
        return tasks;
    } catch (error) {
        console.log(error);
    }
}


//POST TASKS
async function PostData() {
    try {
        const postRes = await fetch(database, { method: "POST", body: JSON.stringify({ description: document.querySelector("#newtask").value, done: false }) })
        console.log(GetData());
        GetData();
        return postRes;

    } catch (error) {
        console.log(error);
    }
}

//DELETE TASK
async function DeleteData() {
    try {
        const delRes = await fetch(`https://wincacademydatabase.firebaseio.com/Sam/Tasks/${task.id}.json`, { method: "DELETE" })
        console.log(GetData());
        GetData();
        return delRes;
    } catch (error) {
        console.log(error);
    }
}