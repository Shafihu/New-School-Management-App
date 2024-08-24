import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  LayoutDashboard,
  LogOut,
  Mail,
  ClipboardMinus,
  CalendarClock,
  Users,
  AlignVerticalJustifyStart,
  ClipboardCheck,
  ClipboardList,
  CalendarFold,
} from "lucide-react";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Link from "next/link";

export function MobileCommandDemo() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/dashboard",
          text: "Dashboard",
          icon: <LayoutDashboard className="mr-2 h-4 w-4" />,
        },
        {
          link: "/dashboard/teachers",
          text: "Teachers",
          icon: <AlignVerticalJustifyStart className="mr-2 h-4 w-4" />,
        },
        {
          link: "/dashboard/students",
          text: "Students",
          icon: <Users className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Notice",
          icon: <ClipboardMinus className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Subject",
          icon: <CalendarFold className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Class Routine",
          icon: <CalendarClock className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Attendance",
          icon: <ClipboardCheck className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Exam",
          icon: <ClipboardList className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Message",
          icon: <Mail className="mr-2 h-4 w-4" />,
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          text: "Profile",
          icon: <User className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Billing",
          icon: <CreditCard className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Settings",
          icon: <Settings className="mr-2 h-4 w-4" />,
        },
        {
          link: "/",
          text: "Logout",
          icon: <LogOut className="mr-2 h-4 w-4" />,
        },
      ],
    },
  ];
  return (
    <Command className="rounded-lg min-h-screen ">
      <CommandList className="min-h-screen">
        {menuList.map((menu: any, key: number) => (
          <>
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((item: any, key: number) => (
                <>
                  <Link href={item.link} key={key}>
                    <CommandItem
                      defaultChecked={true}
                      className="flex cursor-pointer gap-1 mb-2"
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </CommandItem>
                  </Link>
                </>
              ))}
            </CommandGroup>
          </>
        ))}
      </CommandList>
    </Command>
  );
}
