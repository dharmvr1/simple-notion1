
interface SideCompoProp {
  heading: string;
  textColor: string;
  Icon: React.ReactNode;
  fontWidth: "bold"|"medium";
}

export function SideHeadCompo(sideprop: SideCompoProp) {
  const Icon = sideprop.Icon;
  return (
    <div className="flex gap-3 items-center px-4 py-1 hover:bg-gray-700 cursor-pointer rounded">
      <div>{Icon}</div>
      <h1 className={`${sideprop.fontWidth==="bold"?"text-xl font-medium text-blue-500  ":"text-lg font-normal text-white"}`} >{sideprop.heading}</h1>
    </div>
  );
}
