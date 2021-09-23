import API, { arrToObj, objToArr } from 'api'

// ACTION CREATOR
export const increment = (nb = 1) => ({ type: 'INCREMENT', payload: nb })
export const decrement = (nb = 1) => ({ type: 'DECREMENT', payload: nb })

export const fetchTasksBegin = () => ({ type: 'TASK/FETCH/STARTED' })
export const fetchTasksSuccess = (tasks) => ({ type: 'TASK/FETCH/SUCCESS', payload: tasks })
export const fetchTasksFailure = (error) => ({ type: 'TASK/FETCH/FAILURE', payload: error })


export const fetchTasks = (endpoint = 'tasks.json') => async (dispatch, getState) => {
  dispatch(fetchTasksBegin())
  try {
    const res = await fetch(`${API}${endpoint}`)
    if (!res.ok) throw new Error(res.statusText)
    else {
      const tasks = await res.json()
      if (tasks)
        dispatch(fetchTasksSuccess(tasks.filter(task => task !== null)))
      else throw new Error('404 : Ressource introuvable')
    }
  } catch (e) {
    dispatch(fetchTasksFailure(e))
  }

}