import TaskModel from 'models/Task'

// STATE INITIAL
const initialState = {
  counter: 0,
  list: {
    data: [
      new TaskModel({ id: 1, title: 'Finaliser les maquettes', completed: true, priority: "high" }),
      new TaskModel({ id: 2, title: 'Développer l\'interface', completed: false, priority: "high" }),
      new TaskModel({ id: 3, title: 'Completer l\'API', completed: false, priority: "medium" }),
      new TaskModel({ id: 4, title: 'Préparer la démo', completed: false, priority: "low" }),
    ],
    error: null,
    loading: false
  }
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return { ...state, counter: state.counter + action.payload }
    case 'DECREMENT': return { ...state, counter: state.counter - action.payload }
    case 'TASK/FETCH/STARTED': return { ...state, list: { ...state.list, loading: true, error: null } }
    case 'TASK/FETCH/SUCCESS': return { ...state, list: { data: action.payload, loading: false, error: null } }
    case 'TASK/FETCH/FAILURE': return { ...state, list: { data: [], error: action.payload, loading: false } }
    default: return state
  }
}

export default reducer