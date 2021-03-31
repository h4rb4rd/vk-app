import state from './redux/store';
import { rerender } from './render';
rerender(state);

// import './index.css';

// import App from './components/app';
// import state, {
//   onAddPost,
//   onPostTextUpdate,
//   onAddMessage,
//   onMessageTextUpdate,
// } from './redux/store';

// export const rerender = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App
//         state={state}
//         onAddPost={onAddPost}
//         onPostTextUpdate={onPostTextUpdate}
//         onAddMessage={onAddMessage}
//         onMessageTextUpdate={onMessageTextUpdate}
//       />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// };
// rerender();
