import './App.css';
import Header from "./components/home/header";
import Main from "./pages/main";
import {useEffect} from "react";
import {getProduct} from "./axios/axios";
import {getProducts} from "./redux/actions/global-actions";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        const data = async () => {
            await getProduct()
                .then(res => {
                    dispatch(getProducts(res.data))
                })
        }
        data()
    },[])

  return (
    <div className="App">
      <Header/>
        <Main/>
    </div>
  );
}

export default App;
