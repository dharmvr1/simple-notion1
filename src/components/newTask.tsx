import Button from "./button";

export default function NewTask() {
  return (
    <div className="flex flex-col gap-2  bg-zinc-700 rounded p-4  ">
      <input
        type="text"
        id="heading"
        placeholder="Add Todo"
        className="text-5xl outline-none text-white "
      />
      <input
        type="text"
        id="description"
        placeholder="Description"
        className="text-xl text-white outline-none mt-4 scroll"
      />
      <div className="flex justify-between">
        <input
          type="date"
          name="date"
          id="date"
          className="text-white outline-none"
          onChange={(e) => {
            console.log(e.target.valueAsDate);
          }}
        />
        <Button heading="Save" size="small"></Button>
      </div>
    </div>
  );
}
