import {
  SiteDescription,
  SearchContainer,
  SiteName,
  ForkKnife,
  InputContainer, InputRow, AmountContainer, ChangeAmountButton,
} from "./styles";
import {observer} from "mobx-react-lite";
import {Row, StyledButton, StyledInput} from "../../styles";
import {useEffect, useState} from "react";
import {resultsStore} from "../../stores";
import {toast, ToastContainer} from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../components/Loading";

function Search() {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState("");
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  const onSubmit = () => {
    setLoading(true);

    resultsStore.getResults(keywords, amount).then(success => {
      setLoading(false);

      if (!success) {
        toast.error("Failed to get recipes, try again later.", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      } else navigate("/results");
    });
  };

  const handleAmountChange = (value) => setAmount(amount + value);

  useEffect(() => {
    if (amount <= 0) setAmount(1);
    else if (amount > 5) setAmount(5);
  }, [amount]);

  return (
    <SearchContainer>
      {!loading && (
        <>
          <Row verticalAlign>
            <SiteName>Cook me something</SiteName>
            <ForkKnife
              src={"https://firebasestorage.googleapis.com/v0/b/cook-me-something.appspot.com/o/diet.png?alt=media&token=02830a25-d4b0-478d-86dd-55672eff89dd"}
              draggable={false}
            />
          </Row>
          <SiteDescription>Find recipes based on the ingredients you have.</SiteDescription>

          <InputRow>
            <InputContainer width="30vw">
              <StyledInput
                size={16}
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Ingredients e.g. chicken, broccoli, rice"
              />
            </InputContainer>

            <AmountContainer>
              <p>Amount: </p>
              <ChangeAmountButton onClick={() => handleAmountChange(-1)}><span>-</span></ChangeAmountButton>
              {amount}
              <ChangeAmountButton onClick={() => handleAmountChange(1)}><span>+</span></ChangeAmountButton>
            </AmountContainer>
          </InputRow>

          <StyledButton
            padding={16}
            borderRadius={25}
            background="#e86324"
            color="white"
            onClick={onSubmit}
            disabled={keywords.length === 0 || loading}
          >
            Start cooking!
          </StyledButton>

          <ToastContainer />
        </>
      )}
      {loading && (
        <>
          <Loading
            imageUrl={"https://firebasestorage.googleapis.com/v0/b/cook-me-something.appspot.com/o/cooking-indicator.png?alt=media&token=001c6940-2db0-4251-9304-61059187f2b6"}
            text="Cooking..."
          />
        </>
      )}
    </SearchContainer>
  )
}

export default observer(Search);