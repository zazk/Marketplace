const initialState = {
  data: {
    projects: [],
    projectData: {},
  },
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROJECT_SUCCESS':
      return {
        ...state,
        data: {
          ...state.data,
          projectData: action.projectData,
        },
      };
    default:
      return state;
  }
};

export default projectReducer;
