import { CSSProperties, FC } from "react";
import { useScreenSize } from "../../utils/useScreenSize";

interface FormInputProps {
  type?: string;
  label?: string;
  labelClass?: string;
  labelStyle?: CSSProperties;
  inputStyle?: CSSProperties;
  inputClass?: string;
  register?: object;
  value?: string;
  error?: string | undefined;
  placeholder?: string;
}

const FormInput: FC<FormInputProps> = ({
  type,
  label,
  labelClass,
  labelStyle,
  inputStyle,
  inputClass,
  register,
  error,
  value,
  placeholder,
}: FormInputProps) => {
  const { isMobile, isTablet } = useScreenSize();

  return (
    <label
      className={ labelClass ? labelClass : 'block mb-2' }
      style={ {
        width: (isMobile || isTablet) ? '100%' : '45%',
        margin: (isMobile || isTablet) ? '0 0 2rem 0' : '0 3% 2rem 0',
        fontSize: '12px',
        ...labelStyle
      } }
    >
      { label }
      <input
        type={ type }
        placeholder={ placeholder }
        style={ {
          outline: 'none',
          fontSize: '12px',
          ...inputStyle
        } }
        value={ value }
        className={ inputClass ? inputClass : 'border-b border-black p-1 w-full' }
        { ...register }
      />
      { error && <span className="text-red-500">{ error }</span> }
    </label>
  );
}

export default FormInput;