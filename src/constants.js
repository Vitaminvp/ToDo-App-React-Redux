export const TASKS = [
  {
    id: 1,
    text: "Learn ReactJS",
    isCompleted: true,
    comments: [
      {
        id: 11,
        text: "Lorem ipsum dolor sit amet."
      },
      {
        id: 12,
        text: "Lorem ipsum dolor sit amet."
      }
    ]
  },
  {
    id: 2,
    text: "Learn Redux",
    isCompleted: false,
    comments: [
      {
        id: 11,
        text: "Lorem ipsum dolor sit amet."
      },
      {
        id: 12,
        text: "Lorem ipsum dolor sit amet."
      }
    ]
  },
  {
    id: 3,
    text: "Learn React Router",
    isCompleted: false,
    comments: [
      {
        id: 11,
        text: "Lorem ipsum dolor sit amet."
      },
      {
        id: 12,
        text: "Lorem ipsum dolor sit amet."
      }
    ]
  }
];

export const FILTERS = [
  {
    text: "All",
    id: "all"
  },
  {
    text: "Active",
    id: "active"
  },
  {
    text: "Completed",
    id: "completed"
  }
];

export const BASE_FILTER = "all";

export const ACTIONS_TYPE = {
  ADD_TASK: "ADD_TASK",
  REMOVE_TASK: "REMOVE_TASK",
  COMPLETE_TASK: "COMPLETE_TASK",
  CHANGE_FILTER: "CHANGE_FILTER",
  ADD_COMMENT: "ADD_COMMENT"
};
