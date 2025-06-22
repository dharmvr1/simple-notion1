interface ButtonProp {
  size: string;
  onclick?: () => void;
  heading: string;
}

export default function Button(prop: ButtonProp) {
  return (
    <button
     onClick={prop.onclick}
      className={`${
        prop.size === "large"
          ? "text-2xl font-medium px-3 py-2"
          : "text-xl font-medium px-2 py-1"
      } bg-blue-500 text-white w-full rounded-xl`}
    >
      {prop.heading}
    </button>
  );
}
