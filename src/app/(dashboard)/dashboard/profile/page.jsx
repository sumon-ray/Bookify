"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Page = () => {
  const session = useSession();
  const currentEmail = session?.data?.user?.email;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        "https://bookify-server-lilac.vercel.app/users"
      );
      return res.data;
    },
  });

  const user = data?.find((u) => u.email === currentEmail);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const image = e.target.file.files[0];
      let imageUrl = user?.image;

      // Process the uploaded image if there’s a new one
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
      setIsModalOpen(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-black dark:bg-[#272727A6] dark:text-white">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <Image
          width={1000}
          height={600}
          className="object-cover object-top w-full"
          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <Image
          width={500}
          height={500}
          className="object-cover object-center h-32"
          src={
            user?.image ||
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          }
          alt={user?.name || "profile-photo"}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{user?.name}</h2>
        <p className="text-gray-500">
          Role: <span className="capitalize"> {user?.role}</span>
        </p>
      </div>
      <div className="p-4 border-t mx-8 mt-2">
        <button
          onClick={handleOpenModal}
          className="block mx-auto rounded hover:shadow-lg font-semibold bg-[#364957] text-white px-6 py-2"
        >
          Update Profile
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center dark:bg-transparent ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full  dark:bg-gray-600">
            <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#272727A6] dark:text-white"
                  type="text"
                  name="name"
                  required
                  defaultValue={user?.name}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium ">
                  Email Address
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#272727A6] dark:text-white"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium ">
                  Password
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-[#364957] focus:ring-opacity-0 focus:outline-none focus:ring focus:ring-blue-300 dark:bg-[#272727A6] dark:text-white"
                  type="password"
                  name="password"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium">
                  Profile Photo
                </label>
                <input
                  className="block w-full px-4  text-gray-700 bg-white border rounded-lg  focus:outline-none dark:bg-[#272727A6] dark:text-white"
                  type="file"
                  name="file"
                  id="file"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mr-4 px-4 py-2 bg-[#364957] text-white rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#364957] text-white rounded hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
