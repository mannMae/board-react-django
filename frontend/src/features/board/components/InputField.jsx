import { Input, Label } from './InputField.style';

export const InputField = ({ label, placeholder, value, setValue }) => {
  return (
    <Label onChange={(e) => setValue(e.target.value)}>
      {label}
      <Input placeholder={placeholder} value={value} />
    </Label>
  );
};
