interface InputProps {
  label: string;
  width?: string;
  type : string;
  value?: string;
  customStyle?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export function Input({ label, type, width, customStyle, value, onChange  }: InputProps) {
  return(
  <div className={`relative mt-2 ${width ? width : "w-full"} `}>
    <input type={type} id={type} value={value} className={`border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-neutral-600 focus:outline-none focus:ring-0 ${customStyle}`} onChange={onChange} placeholder=" " />
    <label htmlFor={type} className="absolute left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-neutral-600">{label}</label>
  </div>
  )
}