interface Todo {
  id: number;
  title: string;
  completedOn?: Date;
  status: TodoStatus;
}

enum TodoStatus {
  Done = "done",
  Innprogress = "in-progress",
  Todo = "todo`",
}

const todoItems: Todo[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: TodoStatus.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: TodoStatus.Innprogress },
  { id: 3, title: "Write the best app in the world", status: TodoStatus.Todo },
];

function addTodoItem(todo: string): Todo {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: TodoStatus.Todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId(items) {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}
// function getNextId<T extends { id: number }>(items: T[]): number {
//     return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
// }
const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
