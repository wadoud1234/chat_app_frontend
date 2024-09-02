import { redirect } from "next/navigation";

export default function page() {
  // redirect("/chat");
  return (
    <div>
      Hello World
      <div className="bg-white">I am here</div>
    </div>
  );
}
