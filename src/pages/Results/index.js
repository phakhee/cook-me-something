import {observer} from "mobx-react-lite";
import {ResultsContainer} from "./styles";
import ResultsMenu from "../../components/ResultsMenu";
import RecipeDetails from "../../components/RecipeDetails";
import {useState} from "react";

function Results() {
  const [selected, setSelected] = useState(null);
  const handleSelectedChange = (value) => setSelected(value);


  return (
    <ResultsContainer>
      <ResultsMenu handleSelectedChange={handleSelectedChange} />
      <RecipeDetails selected={selected} handleSelectedChange={handleSelectedChange} />
    </ResultsContainer>
  )
}

export default observer(Results);