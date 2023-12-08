import {observer} from "mobx-react-lite";
import {AllResultsContainer, RecipeCardRow, RecipeName, ResultCard} from "./styles";
import {LoadingContainer} from "../Loading/styles";
import Loading from "../Loading";
import {resultsStore} from "../../stores";

function AllResults({loading}) {

  if (!loading) {
    return (
      <AllResultsContainer>
        {resultsStore.recipes.map(r => (
          <ResultCard>
            <RecipeName>{r.name}</RecipeName>
            <RecipeCardRow verticalAlign>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/cook-me-something.appspot.com/o/clock.png?alt=media&token=82955290-09ab-4b91-88b3-5d254e3db0d2"
                alt="clock"
              />
              <p>{parseInt(r.cookTime) + parseInt(r.prepTime)} minutes</p>
            </RecipeCardRow>
          </ResultCard>
        ))}
      </AllResultsContainer>
    );
  } else {
    return (
      <LoadingContainer>
        <Loading
          imageUrl={"https://firebasestorage.googleapis.com/v0/b/cook-me-something.appspot.com/o/cooking-indicator.png?alt=media&token=001c6940-2db0-4251-9304-61059187f2b6"}
          text="Cooking..."
        />
      </LoadingContainer>
    );
  }
}

export default observer(AllResults);