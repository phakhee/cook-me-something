import {observer} from "mobx-react-lite";
import {AllResultsContainer, RecipeCardRow, RecipeName, ResultCard} from "./styles";
import {LoadingContainer} from "../Loading/styles";
import Loading from "../Loading";
import {resultsStore} from "../../stores";
import {CLOCK, PAN} from "../../constants/images";

function AllResults({loading, handleSelectedChange}) {

  if (!loading) {
    return (
      <AllResultsContainer>
        {resultsStore.recipes.map((r, i) => (
          <ResultCard onClick={() => handleSelectedChange(r)} key={`${i}-${r.name}`}>
            <RecipeName>{r.name}</RecipeName>
            <RecipeCardRow verticalAlign>
              <img src={CLOCK} alt="clock"/>
              <p>{r.getTotalTime()} minutes</p>
            </RecipeCardRow>
          </ResultCard>
        ))}
      </AllResultsContainer>
    );
  } else {
    return (
      <LoadingContainer>
        <Loading
          imageUrl={PAN}
          text="Cooking, this might take a while..."
        />
      </LoadingContainer>
    );
  }
}

export default observer(AllResults);