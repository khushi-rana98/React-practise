// ✔ Reducer is a pure function
// ✔ Reducer NEVER mutates state
// ✔ Always returns new state
// ✔ Uses switch(action.type)
// ✔ Action = { type, payload }
// ✔ Reducer has NO JSX
// ✔ Same concept used in Redux

// Q1: Why spread operator is used?
// 👉 To avoid mutating the existing state.

// Q2: Why filter for delete?
// // 👉 Because filter removes elements immutably,returns new array.

// Q3: Why map for edit?
// 👉 To update a specific item without changing others.

// Q4: Difference between payload & type?
// 👉 Type defines action, payload carries data.

export const initialState={
  tasks:[]
};

export function TaskReducer(state,action){
  switch(action.type){
    case 'ADD_TASK':
      return{
        tasks:[
          ...state.tasks,
          {id:Date.now(), text: action.payload}
        ]
      };

      case "DELETE_TASK":
        return{
          tasks: state.tasks.filter(
            task=> task.id!==action.payload
          )
        };

        case "EDIT_TASK":
          return{
            tasks: state.tasks.map(task=>
              task.id===action.payload.id?
              {...task, text: action.payload.text}
              :task
            )
          };
          default:
            return state;
  }


}