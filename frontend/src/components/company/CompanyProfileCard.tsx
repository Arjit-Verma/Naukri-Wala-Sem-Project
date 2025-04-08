import { CompanyProfileCardProps } from "../../types";

export function CompanyProfileCard({
  name,
  image,
  college,
  date,
}: CompanyProfileCardProps) {
  return (
    <div className=" lg:w-50 lg:m-4 w-25 m-2 ">
      <div className="rounded-lg border bg-linear-to-t from-purple-100 to-gray-200 shadow-md">
        <div className="relative mx-auto w-30 h-30 rounded-full mt-4 ">
          <img className=" h-full w-full rounded-full" src={image} alt="" />
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
