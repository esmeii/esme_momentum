const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
let todos = []; //saving todos
const TODOS_KEY = "todos";


function handleTodoSubmit(event){
    event.preventDefault();
    //todoInput.value="";
    const newTodo=todoInput.value;
    const newTodoObj ={
        text: newTodo,
        id: Date.now()
    }
    
    paintTodo(newTodoObj);
    todos.push(newTodoObj); //add an element in an array
    saveTodo();
}
function deleteTodo(event){
    //어떤 투두를 지울지 결정하기 위해서는 그 투두에 대한 정보를 얻어야 한다.
    // 클릭 시 어떤 요소가 클릭 됐는지 정보를 얻을 수 있다.
    // const deleteLi = event.target.parentElement;
    // todos = todos.filter(todo => todo.id !== deleteLi.id); //todos의 요소들을 deleteLi의 아이디와 비교해서 
    // // 삭제할 것과 아이디가 같으면 거른다(삭제한다.)
    // deleteLi.remove();
    // saveTodo();
    const btn = event.target;
    const li = btn.parentElement;
    li.remove();
    todos = todos.filter((todo)=> todo.id !== parseInt(li.id));
    saveTodo();
}
function saveTodo (){
    //todos 배열을 로컬스토리지에 복사해 놓는다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function paintTodo (newTodo){
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";

    newLi.id = newTodo.id;
    newSpan.innerText=newTodo.text;
     
    delBtn.addEventListener("click", deleteTodo);
    newLi.appendChild(newSpan); //리스트 아이템 안에 스팬을 추가한다.
    newLi.appendChild(delBtn);
    todoList.appendChild(newLi);
} 
todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);
if(savedTodo !== null){
    const parsedTodos = JSON.parse(savedTodo); //string => array
    todos = parsedTodos; //todos 배열에 이전에 저장된 값들을 채워준다.
    parsedTodos.forEach(paintTodo); //어레이의 각각의 요소에 대해 접근할 수 있다.
    //arrow function
}