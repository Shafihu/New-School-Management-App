import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MobileCommandDemo } from "../Sidebar/MobileCommand";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Menu</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 min-h-screen">
        <MobileCommandDemo />
      </PopoverContent>
    </Popover>
  );
}
