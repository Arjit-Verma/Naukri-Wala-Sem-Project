import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type JobDetails = {
  id: string;
  title: string;
  appId: string;
  code: string;
  description: string;
  directoryId: string;
  address: string;
  name: string;
  user: string;
  marketing: string;
  fullAddress: string;
  status: "Available" | "Unavailable";
};

const JobEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobDetails>({
    id: id || "",
    title: "",
    appId: "",
    code: "",
    description: "",
    directoryId: "",
    address: "",
    name: "",
    user: "",
    marketing: "",
    fullAddress: "",
    status: "Available",
  });

  useEffect(() => {
    // Here you would fetch the job details based on the id
    // For now, we'll use mock data
    const fetchJob = async () => {
      // Simulate API call
      setTimeout(() => {
        setJob({
          id: id || "",
          title: "Android Engineering Server",
          appId: "APP12345",
          code: "ENG-AND-001",
          description: "Server development for Android engineering team",
          directoryId: "DIR-9876",
          address: "123 Tech Street",
          name: "Android Team",
          user: "techuser",
          marketing: "Tech Marketing",
          fullAddress: "123 Tech Street, Silicon Valley, CA 94000",
          status: "Available",
        });
      }, 500);
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would save the changes
    console.log("Job updated:", job);
    navigate("/company/updatejob");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
      >
        <ArrowLeft className="mr-1 h-5 w-5" />
        Back
      </button>
      <h1 className="text-2xl font-bold mb-6">
        {id ? "Edit Job" : "Add New Job"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              App Id
            </label>
            <input
              type="text"
              name="appId"
              value={job.appId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Code
            </label>
            <input
              type="text"
              name="code"
              value={job.code}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Directory (ID)
            </label>
            <input
              type="text"
              name="directoryId"
              value={job.directoryId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={job.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={job.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User
            </label>
            <input
              type="text"
              name="user"
              value={job.user}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Marketing
            </label>
            <input
              type="text"
              name="marketing"
              value={job.marketing}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Address
            </label>
            <input
              type="text"
              name="fullAddress"
              value={job.fullAddress}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={job.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              rows={4}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/company/updatejob")}
            className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobEditPage;
