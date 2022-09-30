import React from 'react';
import { render } from 'react-dom';
import './style.css';
import axios from 'axios';
import Forms from './form.js';
// import { Provider } from 'react-redux';
// import { store } from './store';
import UserList from './userList.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

//       email: 'eve.holt@reqres.in',
//       password: 'cityslicka',

const App = () => {
  const [usersList, setUsersList] = React.useState([]);

  const fetchUsers = () => {
    axios(`https://reqres.in/api/users/`, {
      method: 'get',
      headers: {
        Authorization: `${localStorage.getItem('auth-token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      setUsersList(res.data.data);
      // store.dispatch({
      //   type: 'ADD_USERS',
      //   text: 'Read the docs',
      // });
      console.log('Consoling users data', res.data.data);
    });
    return false;
  };

  return (
    <div className="wrapper">
      <div>
        {usersList.length ? (
          <div>
            <div> Hello you have signed in successfully</div>
            <UserList usersList={usersList} />
          </div>
        ) : (
          <div>
            {/* <h3>Hello there, Sign in to continue</h3> */}

            <Forms fetchUsers={fetchUsers} />
          </div>
        )}
      </div>
    </div>
  );
};

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
