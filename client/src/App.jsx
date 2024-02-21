import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button onClick={()=>{
        alert("ShadCn is the best!");
      }}>Submit</Button>
    </>
  );
}