import { useEffect, useState } from "react";
import { Container, Option } from "./style";

interface IOptionToggleButton {
  label: string,
  value: string | number,
}

interface ToggleButtonProps {
  options: IOptionToggleButton[],
  defaultValue?: IOptionToggleButton['value'],
  onChangeValue?(value: IOptionToggleButton['value']): void,
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  options, defaultValue=null, onChangeValue,
}) => {
  const [selected, setSelected] = useState<IOptionToggleButton['value']>('')

  useEffect(() => {
    handleOnClick(defaultValue || options[0]?.value)
  }, [defaultValue])

  function handleOnClick(value: IOptionToggleButton['value']) {
    setSelected(value)

    if(onChangeValue)
      onChangeValue(value)
  }

  return (
    <Container>
      {
        options.map((opt, index) => (
          <Option 
            key={index}
            selected={selected === opt.value}
            onClick={() => handleOnClick(opt.value)}
          >
            {opt.label}
          </Option>
        ))
      }
    </Container>
  )
}

export default ToggleButton;
