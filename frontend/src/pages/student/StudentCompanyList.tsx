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
  { id: 2, title: "ATS Score", link: "/student/ats_score" },
  { id: 3, title: "Templates", link: "/student/coldmail" },
  { id: 4, title: "Company", link: "/student/companylist" },
];

const data: Application[] = [
  {
    id: "1",
    company: "Adobe",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888835.png",
    position: "Frontend Developer",
    date: "2024-03-12",
    status: "Accepted",
  },
  {
    id: "2",
    company: "Salesforce",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png",
    position: "Backend Developer",
    date: "2024-02-28",
    status: "In Process",
  },
  {
    id: "3",
    company: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    position: "Cloud Engineer",
    date: "2024-01-15",
    status: "Rejected",
  },
  {
    id: "4",
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    position: "Audio ML Engineer",
    date: "2024-03-20",
    status: "Accepted",
  },
  {
    id: "5",
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    position: "Full Stack Developer",
    date: "2024-02-19",
    status: "In Process",
  },
  {
    id: "6",
    company: "Stripe",
    logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/50489e6800006400051ae0d6/0x0.png  ",
    position: "Payment Systems Engineer",
    date: "2024-01-30",
    status: "Rejected",
  },
  {
    id: "7",
    company: "Shopify",
    logo: "https://companieslogo.com/img/orig/SHOP-020ea41a.png?t=1633439432",
    position: "DevOps Engineer",
    date: "2024-03-10",
    status: "Accepted",
  },
  {
    id: "8",
    company: "Zoom",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
    position: "Video Infrastructure Engineer",
    date: "2024-02-05",
    status: "In Process",
  },
  {
    id: "9",
    company: "Atlassian",
    logo: "https://logosandtypes.com/wp-content/uploads/2020/07/Atlassian.png",
    position: "Platform Engineer",
    date: "2024-01-12",
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
