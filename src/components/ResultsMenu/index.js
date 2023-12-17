import {observer} from "mobx-react-lite";
import {ResultsAmount, ResultsListContainer, SearchClickableText} from "./styles";
import {resultsStore} from "../../stores";
import {AmountContainer, ChangeAmountButton, InputContainer, InputRow} from "../../pages/Search/styles";
import {StyledInput} from "../../styles";
import {useEffect, useState} from "react";
import AllResults from "../AllResults";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSearchParams} from "react-router-dom";

function ResultsMenu({handleSelectedChange}) {
  const recipes = resultsStore.recipes;
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  let [searchParams] = useSearchParams();
  const [keywords, setKeywords] = useState(searchParams.get("k"));

  const handleAmountChange = (value) => setAmount(amount + value);
  const onSubmit = () => {
    setLoading(true);

    resultsStore.getResults(keywords, amount).then(success => {
      setLoading(false);

      if (!success) {
        toast.error("Failed to get recipes, try again later.", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      }
    });
  };

  useEffect(() => {
    if (amount <= 0) setAmount(1);
    else if (amount > 5) setAmount(5);
  }, [amount]);

  return (
    <ResultsListContainer>
      <InputRow>
        <InputContainer width="300px">
          <StyledInput
            width="300px"
            size={16}
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <SearchClickableText
            color="#e86324"
            fontSize={16}
            onClick={onSubmit}
          >
            Search
          </SearchClickableText>
        </InputContainer>
        <AmountContainer>
          <p>Recipe Count: </p>
          <ChangeAmountButton onClick={() => handleAmountChange(-1)}><span>-</span></ChangeAmountButton>
          {amount}
          <ChangeAmountButton onClick={() => handleAmountChange(1)}><span>+</span></ChangeAmountButton>
        </AmountContainer>
      </InputRow>
      <p>Found <ResultsAmount>{recipes.length}</ResultsAmount> results</p>

      <AllResults loading={loading} handleSelectedChange={handleSelectedChange} />
      <ToastContainer />
    </ResultsListContainer>
  );
}

export default observer(ResultsMenu);