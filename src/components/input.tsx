interface InputType {
  heading: string;
  placeholder: string;
  onchange?: () => void;
  type: string;
}

export default function Input(prop: InputType) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-white text-xl  ">{prop.heading}</h1>
      <input
        type={prop.type}
        placeholder={prop.placeholder}
        className="outline-none bg-zinc-800 px-3 py-2 text-white placeholder:text-gray-500 border-gray-500  rounded border"
        onChange={prop.onchange}
      />
    </div>
  );
} 
