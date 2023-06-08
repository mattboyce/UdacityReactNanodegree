const logger = store => next => action => {
    console.log('Current action - ', action);
    const returnValue = next(action);
    console.log('Updated state - ', store.getState());

    return returnValue;
};

export default logger;