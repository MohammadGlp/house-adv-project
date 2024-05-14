import { useField, FieldHookConfig } from "formik";

type inputProps = JSX.IntrinsicElements["input"] &
  FieldHookConfig<string> & {
    label: string;
    classInput: string;
    classLabel: string;
    id: string;
    // classError: string;
    classForm: string;
    type: string;
  };

export const InputFeild = ({
  label,
  classInput,
  classLabel,
  id,
  // classError,
  classForm,
  type,
  ...props
}: inputProps): JSX.Element => {
  const [field] = useField(props);
  return (
    <div className={classForm}>
      <label htmlFor={id} className={classLabel}>
        {label}
      </label>
      <input className={classInput} type={type} id={id} {...props} {...field} />
      {/* {meta.touched && meta.error ? (
        <div className={classError}>{meta.error}</div>
      ) : null} */}
    </div>
  );
};