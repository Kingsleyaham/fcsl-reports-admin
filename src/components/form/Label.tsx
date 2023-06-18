export interface PropsTypes {
  labelName: string;
  htmlFor: string;
  classNames: string;
}

const Label = ({ labelName, htmlFor, classNames }: PropsTypes) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block mb-2 text-sm font-medium text-gray-900 ${classNames}`}
    >
      {labelName}
    </label>
  );
};

export default Label;
