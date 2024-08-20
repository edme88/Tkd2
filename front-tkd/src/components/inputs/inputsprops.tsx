export default interface InputProps {
    id: string;
    placeholder?: string;
    labelTxt: string;
    setInputValue(state: string): any;
    size?: number;
    maxLength?: number;
}