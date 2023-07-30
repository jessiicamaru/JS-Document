function createStore(reducer) {
    var state = reducer(undefined, {});
    var subscribers = [];
    return {
        getState() {
            return state;
        },
        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(function (subscriber) {
                subscriber();
            });
        },
        subscribe(subscriber) {
            subscribers.push(subscriber);
        },
    };
}
