import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import DynamicFormContainer from "./pages/DynamicFormContainer";
import FormLists from "./pages/FormLists";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<FormLists />}></Route>
          <Route path="/dynamicForm" element={<DynamicFormContainer />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
