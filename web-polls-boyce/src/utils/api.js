import {
    _getUsers,
    _getPolls,
    _savePoll,
    _savePollAnswer,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getPolls(),
    ]).then(([users, polls]) => ({
      users,
      polls,
    }))
  }
  
  export function savePoll (question) {
    return _savePoll(question)
  }
  
  export function savePollAnswer (authedUser, qid, answer) {
    return _savePollAnswer(authedUser, qid, answer)
  }