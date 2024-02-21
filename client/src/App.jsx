import { Button } from "@/components/ui/button"
import {instance as axios} from "../axiosConfig";
import { useEffect, useState } from "react";

export default function App() {

  const [welcome, setWelcome] = useState("Loading...");

  useEffect(()=>{
    const fetchWelcomeMessage = async ()=>{
      const res = await axios.get('/');
      console.log(res.data);
      setWelcome(res.data.message);
    }
    fetchWelcomeMessage();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        {welcome}
      </h1>
      <Button onClick={()=>{
        alert("ShadCn is the best!");
      }}>Submit</Button>
    </>
  );
}