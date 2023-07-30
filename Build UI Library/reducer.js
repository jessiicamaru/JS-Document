const init = {
    cars: ['BMW'],
};

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'ADD':
            return {
                ...state,
                cars: state.cars.concat(args),
            };
        default:
            return state;
    }
}

//cars: ['BMW','Mercedes', 'Honda']
