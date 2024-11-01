import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCross, FaWindowClose } from "react-icons/fa";

const ProfileUpdateModal = () => {
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const currentEmail = session?.data?.user?.email;
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://bookify-server-lilac.vercel.app/users"
      );
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const user = data?.find((u) => u.email === currentEmail);
  // console.log(user);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const image = e.target.file.files[0];
      let imageUrl = user?.image; // Fallback to existing image if no new image is uploaded.

      // If a new image is uploaded, process it
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        const { data } = await axios.post(
          "https://api.imgbb.com/1/upload?key=52396a4930fb920fb80bbebb2b3fe41d",
          formData
        );
        imageUrl = data.data.display_url;
      }

      const updatedUser = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        image: imageUrl,
        role: user?.role,
      };

      // Send PUT request to update the user
      const res = await axios.put(
        `https://bookify-server-lilac.vercel.app/user?id=${user._id}`,
        updatedUser
      );

      if (res.status === 200) {
        refetch();
        toast.success("User updated successfully");
      } else {
        toast.error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    } finally {
      setLoading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      {/* Button to open modal */}
      <button onClick={() => setIsOpen(true)}>Update Profile</button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="text-3xl text-red-500 hover:text-red-700 absolute right-0 -top-1"
              onClick={() => setIsOpen(false)}
            >
              <FaWindowClose />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
            <Image
              src={user?.image}
              alt={user?.name}
              width={128}
              height={128}
              className="mx-auto rounded-full aspect-square"
            />
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#0A0A0C] dark:text-white"
                  type="text"
                  name="name"
                  id="name"
                  required
                  defaultValue={user?.name}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#0A0A0C] dark:text-white"
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#0A0A0C] dark:text-white"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Profile Photo
                </label>
                <input
                  className="block w-full px-4  text-gray-700 bg-white border rounded-lg  focus:outline-none"
                  type="file"
                  name="file"
                  id="file"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#364957] text-white px-4 py-2 rounded"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin text-indigo-300"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.43 0.03C14 0.17 13.75 0.42 13.63 0.83C13.56 1.05 13.55 1.58 13.55 4.33C13.55 7.98 13.55 7.94 13.92 8.31C14.42 8.8 15.58 8.8 16.08 8.31C16.45 7.94 16.45 7.98 16.45 4.33C16.45 0.8 16.44 0.74 16.15 0.4C15.91 0.12 15.65 0.02 15.08 0.01C14.86 -0.01 14.64 0.00 14.43 0.03Z"
                        fill="#4F46E5"
                      />
                      {/* Simplified SVG content */}
                    </svg>
                  </div>
                ) : (
                  "Update"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileUpdateModal;
