import React from 'react';
type Props = {
  label: string;
};
const InputForm = (props: Props) => {
  const { label } = props;
  return (
    <div>
      <label htmlFor="phone" className="text-sx">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
      />
    </div>
  );
};

export default React.memo(InputForm);
