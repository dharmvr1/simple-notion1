import Input from "./input";
import Button from "./button";

export default function SignUp() {
  return (
    
             <div  className="flex flex-col gap-4 bg-zinc-800 p-4 rounded-xl w-full max-w-xs   ">
                <Input heading="Name" placeholder="john" type="text" />
                <Input heading="Email" placeholder="john@gmail.com" type="text" />
             <Input heading="Password" placeholder="john@123" type="password" />
             <Button heading="SignUp" size="large"></Button>
      

    </div>
  );
}
