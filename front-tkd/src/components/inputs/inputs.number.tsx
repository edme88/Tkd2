import InputProps from "./inputsprops";

export default function InputNumber({id, labelTxt, placeholder, setInputValue, size=50, maxLength=30}: InputProps) {
    const handleInputTxt = (e: { target: { value: string } }) => {
        console.log(e.target.value)
        setInputValue(e.target.value);
      }

  return (
    <p>
        <label htmlFor={`${id}`}> {labelTxt}: </label>
        <input id={`${id}`} placeholder={`${placeholder}`} data-test={`${id}`} onChange={handleInputTxt} type="number" size={size} maxLength={maxLength}>
        </input>
    </p>
  );
}