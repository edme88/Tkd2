import InputProps from "./inputsprops";

export default function InputDate({id, labelTxt, setInputValue}: InputProps) {
    const handleInputTxt = (e: { target: { value: string } }) => {
        console.log(e.target.value)
        setInputValue(e.target.value);
      }

  return (
    <p>
        <label htmlFor={`${id}`}> {labelTxt}: </label>
        <input id={`${id}`} data-test={`${id}`} onChange={handleInputTxt} type="date">
        </input>
    </p>
  );
}