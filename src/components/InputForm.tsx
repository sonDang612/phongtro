import React from 'react';
type Props = {
  label: string;
  value: string;
  setValue: any;
  type: string;
};
const InputForm = (props: Props) => {
  const { label, value, type, setValue } = props;
  return (
    <div>
      <label htmlFor="phone" className="text-sx">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
        value={value}
        onChange={(e) =>
          setValue((prev: any) => ({ ...prev, [type]: e.target.value }))
        }
      />
    </div>
  );
};

export default React.memo(InputForm);
