import { Container, HelpIcon, HelpText, SwitcherIcon, ViewSwitcher, ViewSwitcherText } from "./index.styles";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setView } from "../../../redux/slices/config";

const SidePane = () => {
  const dispatch = useAppDispatch();
  const isListView = useAppSelector(state => state.config.isListView);

  const handleOnClickViewSwitch = () => {
    dispatch(setView({
      isListView: !isListView
    }))
  }
  return (
    <Container>
      <ViewSwitcher onClick={handleOnClickViewSwitch}>
        <SwitcherIcon fontSize={"2xl"} />
        <ViewSwitcherText>
          Switch to {!isListView ? 'list' : 'column'} view
        </ViewSwitcherText>
      </ViewSwitcher>
      <ViewSwitcher>
        <HelpIcon fontSize={"2xl"} />
        <HelpText to={'/help'}>Help</HelpText>
      </ViewSwitcher>
    </Container>
  );
}

export default SidePane;