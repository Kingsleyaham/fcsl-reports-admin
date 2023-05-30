export interface PropsTypes {
  labelName: string;
  htmlFor: string;
}

const Label = ({ labelName, htmlFor }: PropsTypes) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900">
      {labelName}
    </label>
  );
};

export default Label;
