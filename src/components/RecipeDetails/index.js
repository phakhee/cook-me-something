import {observer} from "mobx-react-lite";
import {
  CloseButton,
  DurationRow, RecipeSection,
  RecipeDetailsContainer,
  RecipeDetailsHeader,
  RecipeDetailsRow, RecipeSectionHeader, RecipeSteps, RecipeStep, NoneSelectedText
} from "./styles";
import {RecipeName} from "../AllResults/styles";
import {CLOCK, SERVINGS} from "../../constants/images";

function RecipeDetails({selected, handleSelectedChange}) {

  return (
    <RecipeDetailsContainer open={selected !== null}>
      {selected && (
        <>
          <RecipeDetailsHeader verticalAlign>
            <RecipeName>{selected.name}</RecipeName>
            <CloseButton onClick={() => handleSelectedChange(null)}>✕</CloseButton>
          </RecipeDetailsHeader>

          <RecipeDetailsRow>
            <DurationRow>
              <img src={CLOCK} alt="prep-time-duration" />
              <p><b>Prep time:</b>{` ${selected.prepTime} minutes`}</p>
            </DurationRow>
            <DurationRow>
              <img src={CLOCK} alt="cook-time-duration" />
              <p><b>Cook time:</b>{` ${selected.cookTime} minutes`}</p>
            </DurationRow>
            <DurationRow>
              <img src={CLOCK} alt="total-time-duration" />
              <p><b>Total time:</b>{` ${selected.getTotalTime()} minutes`}</p>
            </DurationRow>
          </RecipeDetailsRow>

          <RecipeDetailsRow>
            <DurationRow>
              <img src={SERVINGS} alt="servings-amount" />
              <p><b>Yield: </b>{selected.servings} servings</p>
            </DurationRow>
          </RecipeDetailsRow>

          <RecipeSection>{selected.description}</RecipeSection>

          <RecipeSection>
            <RecipeSectionHeader>Ingredients</RecipeSectionHeader>
            <RecipeSteps>
              {selected.ingredients.map(ig => (
                <RecipeStep><b>•</b>{ig}</RecipeStep>
              ))}
            </RecipeSteps>
          </RecipeSection>

          <RecipeSection>
            <RecipeSectionHeader>Instructions</RecipeSectionHeader>
            <RecipeSteps>
              {selected.steps.map((s, i) => (
                <RecipeStep><b>{i+1})</b>{s}</RecipeStep>
              ))}
            </RecipeSteps>
          </RecipeSection>
        </>
      )}
      {!selected && (
        <NoneSelectedText>Choose a recipe from the list to see more information.</NoneSelectedText>
      )}
    </RecipeDetailsContainer>
  );
}

export default observer(RecipeDetails);