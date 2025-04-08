import { ProfileCardProps } from "../../types";

export function ProfileCard({
  name,
  rollnum,
  img,
  company,
  date,
}: ProfileCardProps) {
  return (
    <div className="w-50 m-4">
      <div className="rounded-lg border bg-linear-to-t from-purple-100 to-indigo-400 shadow-md">
        <div className="relative mx-auto w-30 h-30 rounded-full mt-4 ">
          <img
            className="mx-auto h-full w-full rounded-full"
            src={img}
            alt=""
          />
        </div>
        <h2 className="text-center text-xl  text-gray-900">{name}</h2>
        <h2 className="text-center text-lg  text-gray-900">{rollnum}</h2>
        <h3 className="text-sm text-semibold text-center text-gray-600">
          {company}
        </h3>
        <ul className="mt-2 divide-y rounded bg-gray-100 py-1 px-2 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-1 text-xs">
            <span>Status</span>
            <span className="ml-auto">
              <span className="rounded-full bg-green-200 py-0.5 px-1.5 text-xxs font-medium text-green-700">
                Placed
              </span>
            </span>
          </li>
          <li className="flex items-center py-1 text-xs">
            <span>Placed On</span>
            <span className="ml-auto text-xs">{date}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
