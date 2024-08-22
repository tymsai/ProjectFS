"use client"
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './app'
export default function Home() {
return (
    <main>
      <Provider store={store}>
      <App/>
      </Provider>
    </main>
  );
}
