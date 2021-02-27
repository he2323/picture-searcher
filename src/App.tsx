import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home";
import Photos from "./Containers/Photos";

const App = () => {
  /*
    w dokumentacji nie znalazłem niestety niczego o podobnym endpoint'cie, a endpoint który wpisałem poniżej jest 
    wywoływany przez unsplash.com za każdym razem gdy zmienimy wartość szukanej frazy, ale cors nie autoryzuje dostępu do niego osób trzecich
  
    const autoCompleteFetch = async () => {
      axios
        .get(`https://unsplash.com/nautocomplete/${quart}`)
        .then((res) => console.log(`tips: ${res}`));
    };
  */
  const [quary, setQuary] = useState("");
  const [tips, setTips] = useState(["asdasda", "sdadasd"]);
  const [isQuarySet, setIsQuarySet] = useState(false);
  
  const redirect = () => {
    setIsQuarySet(true);
  };
  useEffect(() => {
    if (quary.length > 2) {
      //   autoCompleteFetch();
    }
  }, [quary]);
  return (
    <Router forceRefresh={true}>
      <Switch>
        {isQuarySet ? <Redirect to={`/photos/${quary}`} /> : null}
        <Route exact path={"/"}>
          <Home
            quary={quary}
            setQuary={setQuary}
            tips={tips}
            redirect={redirect}
          />
        </Route>
        <Route path={"/photos/:quary"}>
          <Photos
            quary={quary}
            setQuary={setQuary}
            tips={tips}
            redirect={redirect}
            isQuary = {setIsQuarySet}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
