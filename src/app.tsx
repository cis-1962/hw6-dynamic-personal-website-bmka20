import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import Introduction from './components/Introduction';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Introduction />
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
