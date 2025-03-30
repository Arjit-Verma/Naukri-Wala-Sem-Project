"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import studentpic from "../../assets/heroImage.png";
import { Button } from "../../components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import { MenuItem2 } from "../../types";
import CollegeNavBar from "../../components/company/CollegeNavBar";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/college/dashboard" },
  { id: 1, title: "Stats", link: "/college/stats" },
  { id: 2, title: "Student Info", link: "/college/studentinfo" },
  { id: 3, title: "Company Info", link: "/college/companyinfo" },
];

const data: Application[] = [
  {
    id: "1",
    student: "Arjit Verma 22bcs015",
    pic: studentpic,
    company: "Google",
    date: "2024-03-15",
    status: "Interview",
  },
  {
    id: "2",
    student: "Arjit Verma 22bcs015",
    pic: studentpic,
    company: "Google",
    date: "2024-02-10",
    status: "Not Placed",
  },
  {
    id: "3",
    student: "Arjit Verma 22bcs015",
    pic: studentpic,
    company: "Amazon",
    date: "2024-01-22",
    status: "Placed",
  },
  {
    id: "4",
    student: "Aman 22bcs015",
    pic: studentpic,
    company: "Amazon",
    date: "2024-03-15",
    status: "Not Placed",
  },
  {
    id: "5",
    student: "Aman 22bcs015",
    pic: studentpic,
    company: "Adobe",
    date: "2024-02-10",
    status: "Not Placed",
  },
  {
    id: "6",
    student: "Arjit Verma 22bcs015",
    pic: studentpic,
    company: "Adobe",
    date: "2024-01-22",
    status: "Placed",
  },
  {
    id: "7",
    student: "Aman 22bcs015",
    pic: studentpic,
    company: "Adobe",
    date: "2024-03-15",
    status: "Not Placed",
  },
  {
    id: "8",
    student: "Aman 22bcs015",
    pic: studentpic,
    company: "Adobe",
    date: "2024-02-10",
    status: "Not Placed",
  },
  {
    id: "9",
    student: "Arjit Verma 22bcs015",
    pic: studentpic,
    company: "Adboe",
    date: "2024-01-22",
    status: "Placed",
  },
  {
    id: "10",
    student: "Arjit Verma 22bcs015",
    pic: studentpic,
    company: "Google",
    date: "2024-01-22",
    status: "Placed",
  },
];

export type Application = {
  id: string;
  student: string;
  pic: string;
  company: string;
  date: string;
  status: "Placed" | "Not Placed" | "Interview";
};

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "student",
    header: "student",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={row.original.pic}
          alt={row.original.student}
          className="w-6 h-6 rounded-full"
        />
        <span>{row.original.student}</span>
      </div>
    ),
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        company <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("company")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={`px-2 py-1 rounded-md text-center ${
          row.getValue("status") === "Placed"
            ? "bg-green-200 text-green-800"
            : row.getValue("status") === "Not Placed"
            ? "bg-red-200 text-red-800"
            : "bg-yellow-200 text-yellow-800"
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
];

export function CollegeStudentInfo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="w-full h-screen">
      {/* <div className="flex items-center py-4">
        <Input
          placeholder="Filter by company..."
          value={
            (table.getColumn("company")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("company")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div> */}
      <CollegeNavBar menuItems={NavBarMenu}></CollegeNavBar>
      <div className="pt-30 mt-2 mx-4 rounded-md border ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="whitespace-nowrap">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
