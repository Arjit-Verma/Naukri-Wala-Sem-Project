import { Bell } from "lucide-react";

interface ProfileProps {
  name: string;
  designation: string;
  avatarUrl: string;
  link: string;
}

export default function ProfileTemplate({
  name,
  designation,
  avatarUrl,
  link,
}: ProfileProps) {
  return (
    <div className="flex items-center gap-5 ">
      <a
        href={link}
        className="flex items-center justify-between w-full max-w-xs hover:scale-105 transition-transform duration-200 gap-5"
      >
        <div className="h-12 w-12 rounded-full border-2 border-indigo-500 overflow-hidden ">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
      </a>
      <div className="hover:scale-110 transition-transform duration-200 ">
        <Bell className="text-gray-500 cursor-pointer" size={20} />
      </div>
    </div>
  );
}
