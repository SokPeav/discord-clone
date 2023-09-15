import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
 
const Home = () => {
  return (
    <div>
      <div>
        <UserButton afterSignOutUrl="/" />
        <ModeToggle/>
      </div>
    </div>
  );
};

export default Home;
