import Input from "./input";
import Button from "./button";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-3 min-h-screen bg-zinc-900 justify-center items-center ">
      <div className="flex flex-col gap-4 bg-zinc-800 p-4 rounded-xl ">
        <Input heading="Email" placeholder="john@gmail.com" type="text" />
        <Input heading="Password" placeholder="john@123" type="password" />
        <Button heading="SignIn" size="large"></Button>
      </div>
    </div>
  );
}
