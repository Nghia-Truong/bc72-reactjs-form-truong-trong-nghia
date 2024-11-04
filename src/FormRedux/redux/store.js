import { createStore } from 'redux';
import userReducer from './formReducer'; // Đảm bảo đường dẫn này đúng với reducer của bạn

const store = createStore(userReducer);

export default store;