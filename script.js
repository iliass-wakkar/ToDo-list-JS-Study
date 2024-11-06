
        
            let deletedtitle="";
            var completed = document.getElementById("completed");
            var Tasks =  JSON.parse(localStorage.getItem("Tasks")) || [] ;
            
            console.log("Tasks: " + Tasks);
            saveTasksToStorage();
            function saveTasksToStorage(){
                localStorage.setItem("Tasks", JSON.stringify(Tasks));
            }
            // var Tasks = [
            //     {
            //         "title": "Task 1",
            //         "description": "This is a sample task",
            //         "status": "In progress",
            //     },
            //     {
            //         "title": "Task 2",
            //         "description": "This is another sample task",
            //         "status": "Completed",
            //     },
            //     {
            //         "title": "Task 3",
            //         "description": "This is a third sample task",
            //         "status": "In progress",
            //     }
            // ]
            var stat = "all";
            function createElement(task) {
                var divContainer = document.createElement("div");
                divContainer.classList.add("flex", "flex-col");
                var FistLinediv = document.createElement("div");
                FistLinediv.classList.add("pl-4", "pr-3", "pb-3", "grid-cols-4", "flex", "justify-left", "items-center", "rounded-lg")

                var titleDiv = document.createElement("div");
                if (task.status === "Completed")
                titleDiv.classList.add("titleDiv", "w-4/5", "hover:text-green-500");
                else
                titleDiv.classList.add( "titleDiv", "w-4/5", "hover:text-blue-500");
                titleDiv.appendChild(document.createTextNode(task.title));

                var descriptionDiv = document.createElement("div");
                if (task.status === "Completed")
                descriptionDiv.classList.add("descDiv", "ml-4", "hover:text-green-500");
                else
                descriptionDiv.classList.add("descDiv", "ml-4", "hover:text-blue-500");
                descriptionDiv.appendChild(document.createTextNode(task.description));

                var checkDiv = document.createElement("div");
                checkDiv.setAttribute("onclick", "checkStatus(this)");
                if(task.status === "Completed")
                checkDiv.classList.add( "Check", "cursor-pointer", "mh-3", "bg-green-400", "w-8", "h-8", "rounded-full", "flex", "justify-center", "items-center");
                else
                checkDiv.classList.add( "Check", "cursor-pointer", "mh-3", "hover:bg-gray-300", "w-8", "h-8", "rounded-full", "flex", "justify-center", "items-center");                var checkIcon = document.createElement("i");
                if(task.status === "Completed")
                checkIcon.classList.add("text-white" , "fa-solid", "fa-check");
                else
                checkIcon.classList.add( "fa-solid", "fa-check");
                checkDiv.appendChild(checkIcon);

                var DeleteDiv = document.createElement("div");
                DeleteDiv.setAttribute("onclick", "confDelete(this)");
                DeleteDiv.classList.add("Delete", "cursor-pointer", "mh-3", "hover:bg-gray-300", "w-8", "h-8", "rounded-full", "flex", "justify-center", "items-center");
                var DeleteIcon = document.createElement("i");
                DeleteIcon.classList.add("hover:text-red-700", "fa-solid", "fa-trash");
                DeleteDiv.appendChild(DeleteIcon);

                var EditDiv = document.createElement("div");
                EditDiv.setAttribute("onclick", "showEditForm(this)");
                EditDiv.classList.add("Edite", "cursor-pointer", "mh-3", "hover:bg-gray-300", "w-8", "h-8", "rounded-full", "flex", "justify-center", "items-center");
                var EditIcon = document.createElement("i");
                EditIcon.classList.add("hover:text-blue-600", "fa-solid", "fa-pen-to-square");
                EditDiv.appendChild(EditIcon);

                var hrElement = document.createElement("hr");
                hrElement.classList.add("my-2", "border-t-2", "border-gray-300");

                FistLinediv.append(titleDiv, checkDiv, DeleteDiv, EditDiv);
                divContainer.append(FistLinediv, descriptionDiv, hrElement);
                document.getElementById("TasksSpace").appendChild(divContainer);
            }

            function filterTask(stat) {
                document.getElementById("TasksSpace").innerHTML = ""
                if (stat == "all")
                    Tasks.filter(task => task.status != stat).map((task) => {
                        createElement(task);
                    });
                Tasks.filter(task => task.status === stat).map((task) => {
                    createElement(task);
                });
            }
            filterTask(stat);
            function inProgress() {
                document.getElementById("inProgress").classList.add(`text-blue-600`, `border-blue-600`);
                document.getElementById("all").classList.remove(`text-gray-600`, `border-gray-600`);
                document.getElementById("completed").classList.remove(`text-green-600`, `border-green-600`);
                stat = "In progress";
                filterTask(stat);
            }
            function Completed() {
                document.getElementById("completed").classList.add(`text-green-600`, `border-green-600`);
                document.getElementById("all").classList.remove(`text-gray-600`, `border-gray-600`);
                document.getElementById("inProgress").classList.remove(`text-blue-600`, `border-blue-600`);
                stat = "Completed";
                filterTask(stat);
            }
            function allstat() {
                document.getElementById("all").classList.add(`text-gray-600`, `border-gray-600`);
                document.getElementById("completed").classList.remove(`text-green-600`, `border-green-600`);
                document.getElementById("inProgress").classList.remove(`text-blue-600`, `border-blue-600`);
                stat = "all"
                filterTask(stat);
            }
            function showForm() {
                document.getElementById("Title").value = "";
                document.getElementById("Title").removeAttribute("disabled");
                document.getElementById("Description").value = "";
                document.getElementById("TaskForm").classList.remove("hidden");
                document.getElementById("ExitForm").classList.remove("hidden");
            };
            function ExitForm() {
                document.getElementById("TaskForm").classList.add("hidden");
                document.getElementById("ExitForm").classList.add("hidden");
                document.getElementById("ConfDelete").classList.add("hidden");
            };
            function confDelete(task){
                    var parent = task.parentNode;
                    deletedtitle = parent.querySelector(".titleDiv").innerHTML;
                    document.getElementById("ConfDelete").classList.remove("hidden");
                    document.getElementById("ExitForm").classList.remove("hidden");
                    
                };
            function deleteTask()  {
                Tasks = Tasks.filter(task => task.title != deletedtitle); 
                filterTask(stat);
                document.getElementById("ConfDelete").classList.add("hidden");
                document.getElementById("ExitForm").classList.add("hidden");
                saveTasksToStorage();
            }
            function showEditForm(task)  {
                    var parent = task.parentNode;
                    var grandparent = parent.parentNode;
                    var title = parent.querySelector(".titleDiv").innerHTML;
                    var description = grandparent.querySelector(".descDiv").innerHTML;
                    document.getElementById("Title").value = title;
                    document.getElementById("Title").setAttribute("disabled", "disabled");
                    document.getElementById("Description").value = description;
                    document.getElementById("TaskForm").classList.remove("hidden");
                    document.getElementById("ExitForm").classList.remove("hidden");
                }
                function checkStatus(task) {
                    var parent = task.parentNode;
                    var title = parent.querySelector(".titleDiv").innerHTML;
                    Tasks.forEach((task) => {
                        if (task.title === title) {
                            task.status = (task.status === "In progress") ? "Completed" : "In progress";

                            filterTask(stat);
                        }
                    });
                    saveTasksToStorage();
                }
                function saveTask() {
                var title = document.getElementById("Title").value;
                var description = document.getElementById("Description").value;
                if (title == "") {
                    alert("Please fill in all fields");
                    return;
                }console.log(Tasks.filter( task=> task.title == title).length );
                document.getElementById("TaskForm").classList.add("hidden");
                document.getElementById("ExitForm").classList.add("hidden");
                document.getElementById("ConfDelete").classList.add("hidden");
                if(Tasks.filter( task=> task.title == title).length > 0){
                Tasks.map((task) => {
                    if (task.title === title) {
                        task.description = description;
                        filterTask(stat);
                        console.log("1df");
                    } 
                });}
                else{
                    Tasks.push({
                            "title": title,
                            "description": description,
                            "status": "In progress",
                        });
                        console.log("1");
                        filterTask(stat);
                }
                saveTasksToStorage();
            }
            
            
                
        
        