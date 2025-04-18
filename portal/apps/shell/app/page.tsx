import { Button } from "@shellapp/ui/button";
import { MainNavigation } from "@shellapp/ui/main-navigation";

export default function Home() {
  return (
    <div>
      <MainNavigation />
      <Button appName={"test"}>Test</Button>
    </div>
  );
}
