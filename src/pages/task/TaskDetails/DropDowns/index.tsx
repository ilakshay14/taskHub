import Select from 'react-select';
import { Container, SelectStyles } from "./index.styles";
import { PRIORITY_OPTIONS, STATUS_OPTIONS, getSelectedPriority, getSelectedStatus } from "./index.util";
import FormControl from '../../../../components/atoms/FormControl';

type Props = {
  selectedStatus: string;
  selectedPriority: string;
  onChange: (e: any) => void;
}

const DropDowns = ({
  onChange,
  selectedStatus,
  selectedPriority,
}: Props) => {


  const handleOnChangeStatus = (selection) => {
    onChange({
      target: {
        name: "status",
        value: selection.value,
      }
    })
  }

  const handleOnChangePriority = (selection) => {
    onChange({
      target: {
        name: "priority",
        value: selection.value,
      }
    })
  }

  return (
    <Container>
      <FormControl
        htmlFor='status'
        label='Status'
        required
      >
        <Select
          name="status"
          options={STATUS_OPTIONS}
          styles={SelectStyles}
          value={getSelectedStatus(selectedStatus)}
          onChange={handleOnChangeStatus}
        />
      </FormControl>

      <FormControl
        htmlFor='priority'
        label='Priority'
        required
      >
        <Select
          name="priority"
          options={PRIORITY_OPTIONS}
          styles={SelectStyles}
          value={getSelectedPriority(selectedPriority)}
          onChange={handleOnChangePriority}
        />
      </FormControl>
    </Container>
  );
}

export default DropDowns;