export function fetchStories() {
  return {
    type: 'FETCH_STORIES_SUCCESS',
    payload: [
      {id: 1, title: 'Education Grants', description: 'Prepare your students for cloud computing with free credits.', type: 'green'},
      {id: 2, title: 'July Webinar Series', description: 'Learn about containers, Node.js and migration to the cloud.', type: 'yellow'},
      {id: 3, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'},
      {id: 4, title: 'VM Migration', description: 'Resources for migrating a VM to Google Compute Engine.', type: 'red'}
    ]
  }
}


// const uid = () => Math.random().toString(34).slice(2);

// export function addTodo(text) {
//   return {
//     type: 'ADD_TODO',
//     payload: {
//       id: uid(),
//       isDone: false,
//       text: text
//     }
//   };
// }
