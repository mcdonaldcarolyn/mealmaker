export const createGoalAction = goal => {
  return (dispatch, getState, { getFirestore }) => {
    
    const firestore = getFirestore()
    firestore.collection('goalz').add({
        ...goal
    }).then(() => {
        dispatch({ type: 'CREATE_GOAL', goal })
    }).catch((err) => {
        dispatch({ type: 'CREATE_GOAL_ERROR', err})
      })
  }
};

export const deleteGoal = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('goalz').doc(id).delete();
  }
}

export const updateGoal = (updatedGoal, id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('goalz').doc(id).update({
      ...updatedGoal
    });
  }
}

export const getAGoal = (goalID) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore.collection('goalz').doc(goalID).get().then((doc) => {
      if (doc.exists) {
        const data = doc.data()
        dispatch({ type: 'GET_GOAL', data })
      } else {
        console.log('does not exist')
        }
      })
  }
}