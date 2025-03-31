import { CompanyProfileCardProps } from "../../types";

export function CompanyProfileCard({
  name,
  college,
  date,
}: CompanyProfileCardProps) {
  return (
    <div className="w-50 m-4">
      <div className="rounded-lg border bg-linear-to-t from-purple-100 to-gray-200 shadow-md">
        <div className="relative mx-auto w-30 h-30 rounded-full mt-4 ">
          <img
            className="mx-auto h-full w-full rounded-full"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <h2 className="text-center text-xl  text-gray-900">{name}</h2>

        <h3 className="text-sm text-semibold text-center text-gray-600">
          {college}
        </h3>
        <ul className="mt-2 divide-y rounded bg-gray-100 py-1 px-2 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-1 text-xs">
            <span>Placed On</span>
            <span className="ml-auto text-xs">{date}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
