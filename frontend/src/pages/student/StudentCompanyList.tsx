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

import { Button } from "../../components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import StakeNavBar from "../../functions/StakeNavBar";

import { MenuItem2 } from "../../types";

const NavBarMenu: MenuItem2[] = [
  { id: 0, title: "Dashboard", link: "/student/dashboard" },
  { id: 1, title: "Resume", link: "/student/resume" },
  { id: 2, title: "ATS Score", link: "/ats_score" },
  { id: 3, title: "Templates", link: "/student/coldmail" },
  { id: 4, title: "Company", link: "/student/companylist" },
];

const data: Application[] = [
  {
    id: "1",
    company: "Google",
    logo: "/logos/google.png",
    position: "Software Engineer",
    date: "2024-03-15",
    status: "Accepted",
  },
  {
    id: "2",
    company: "Amazon",
    logo: "/logos/amazon.png",
    position: "Data Scientist",
    date: "2024-02-10",
    status: "In Process",
  },
  {
    id: "3",
    company: "Microsoft",
    logo: "/logos/microsoft.png",
    position: "AI Researcher",
    date: "2024-01-22",
    status: "Rejected",
  },
  {
    id: "4",
    company: "Google",
    logo: "/logos/google.png",
    position: "Software Engineer",
    date: "2024-03-15",
    status: "Accepted",
  },
  {
    id: "5",
    company: "Amazon",
    logo: "/logos/amazon.png",
    position: "Data Scientist",
    date: "2024-02-10",
    status: "In Process",
  },
  {
    id: "6",
    company: "Microsoft",
    logo: "/logos/microsoft.png",
    position: "AI Researcher",
    date: "2024-01-22",
    status: "Rejected",
  },
  {
    id: "7",
    company: "Google",
    logo: "/logos/google.png",
    position: "Software Engineer",
    date: "2024-03-15",
    status: "Accepted",
  },
  {
    id: "8",
    company: "Amazon",
    logo: "/logos/amazon.png",
    position: "Data Scientist",
    date: "2024-02-10",
    status: "In Process",
  },
  {
    id: "9",
    company: "Microsoft",
    logo: "/logos/microsoft.png",
    position: "AI Researcher",
    date: "2024-01-22",
    status: "Rejected",
  },
];

export type Application = {
  id: string;
  company: string;
  logo: string;
  position: string;
  date: string;
  status: "Rejected" | "In Process" | "Accepted";
};

export const columns: ColumnDef<Application>[] = [
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <img
          src={row.original.logo}
          alt={row.original.company}
          className="w-6 h-6 rounded-full"
        />
        <span>{row.original.company}</span>
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Position <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("position")}</div>,
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
          row.getValue("status") === "Accepted"
            ? "bg-green-200 text-green-800"
            : row.getValue("status") === "Rejected"
            ? "bg-red-200 text-red-800"
            : "bg-yellow-200 text-yellow-800"
        }`}
      >
        {row.getValue("status")}
      </div>
    ),
  },
];

export function StudentCompanyList() {
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
          placeholder="Filter by position..."
          value={
            (table.getColumn("position")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("position")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div> */}
      <StakeNavBar menuItems={NavBarMenu}></StakeNavBar>
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
