"use client";

import { DropdownMenuDemo } from "@/components/DropdownMenu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useDrawer } from "@/context/DrawerContext";

const notices = [
  {
    id: "1",
    title: "Parent-Teacher Conference",
    about:
      "Join us for the upcoming Parent-Teacher Conference where teachers and parents will discuss students' progress and future goals.",
    date: "2024-09-10",
    img: "https://images.unsplash.com/photo-1723920515274-ace3503adad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    id: "2",
    title: "Semester Start",
    about:
      "The new semester is beginning soon. Be prepared with all your materials and check the updated academic calendar.",
    date: "2024-09-01",
    img: "https://images.unsplash.com/photo-1723962807917-ffab0600929c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
  },
  {
    id: "3",
    title: "Sports Day",
    about:
      "Get ready for our annual Sports Day event, filled with exciting competitions, games, and activities for everyone.",
    date: "2024-09-15",
    img: "https://plus.unsplash.com/premium_photo-1670020261521-d950158a1a82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "Maintenance Notice",
    about:
      "Scheduled maintenance will take place on the school premises. Please check the schedule to see how this might affect you.",
    date: "2024-09-05",
    img: "https://images.unsplash.com/photo-1723451150503-a82e2ccf121e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Library Deadline",
    about:
      "The deadline for returning library books is approaching. Ensure all borrowed materials are returned on time to avoid fines.",
    date: "2024-08-31",
    img: "https://images.unsplash.com/photo-1724252189737-19256b08031a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TableDemo() {
  const { setDrawerData } = useDrawer();

  const handleRowClicked = (notice: any) => {
    setDrawerData(notice);
    // console.log(notice);
  };

  return (
    <Table>
      <TableCaption className="">
        <p>A list of your recent notices.</p>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">NO</TableHead>
          <TableHead className="min-w-[380px]">ABOUT</TableHead>
          <TableHead className="text-left">DATE</TableHead>
          <TableHead className="text-center">ACTION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {notices.map((notice) => (
          <TableRow
            key={notice.id}
            className="cursor-pointer"
            onClick={() => handleRowClicked(notice)}
          >
            <TableCell className="font-medium">{notice.id}</TableCell>
            <TableCell className="flex gap-3 ">
              <div className="overflow-hidden min-w-[50px] min-h-[50px] w-[50px] h-[50px] flex items-center justify-center bg-gray-300 rounded-lg">
                <Image
                  src={`${notice.img}`}
                  alt="notice picture"
                  width={50}
                  height={50}
                  className="rounded-lg object-cover object-center min-w-full min-h-full"
                />
              </div>
              <div className="flex flex-col gap-1 max-w-[380px] ">
                <p className="font-medium">{notice.title}</p>
                <span className="text-gray-400 text-sm overflow-hidden text-ellipsis whitespace-nowrap">
                  {notice.about}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-left font-medium whitespace-nowrap">
              {notice.date}
            </TableCell>
            <TableCell className="text-center">
              <DropdownMenuDemo from="notice" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
