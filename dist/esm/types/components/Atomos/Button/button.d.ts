/// <reference types="react" />
interface ButtonProps {
    onClick?: () => void;
    width?: string;
    height?: string;
    color?: string;
    fontSize: string;
    legend?: string;
    click?: any;
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
