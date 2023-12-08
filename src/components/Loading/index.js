import {observer} from "mobx-react-lite";
import {LoadingIndicator} from "../../pages/Search/styles";

function Loading({imageUrl, text}) {
  return (
    <>
      <LoadingIndicator
        src={imageUrl}
        draggable={false}
      />
      <p>{text}</p>
    </>
  );
}

export default observer(Loading);