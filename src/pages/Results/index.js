import {observer} from "mobx-react-lite";
import {ResultsContainer} from "./styles";
import ResultsMenu from "../../components/ResultsMenu";

function Results() {

  return (
    <ResultsContainer>
      <ResultsMenu />
    </ResultsContainer>
  )
}

export default observer(Results);