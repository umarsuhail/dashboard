"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ChangeEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { User } from "../utils/types";
const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  username: z.string().min(1, "Username is required"),
});
type UserFormInputs = z.infer<typeof userSchema>;
interface PopupProps {
  onFormSubmit: (data: UserFormInputs & { id: string }) => void;
  handleClose: () => void;
  initialData?: User | null;
}
export default function Popup({initialData, onFormSubmit, handleClose }: PopupProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: initialData?.name || "",
      email: initialData?.email || "",
      username: initialData?.username || "",
    },
  });
  const [formData, setFormData] = useState<User>({
    id: uuidv4(),
    name: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (initialData) {
      reset({
        name: initialData.name,
        email: initialData.email,
        username: initialData.username,
      });
    } else {
      reset({
        name: "",
        email: "",
        username: "",
      });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [initialData, reset]);

  const onSubmit: SubmitHandler<UserFormInputs> = (data: User) => {
    const userData = { ...data, id: uuidv4() };
    onFormSubmit(userData);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full h-full bg-[#0000008c] absolute top-0 left-0 flex items-center justify-center mt-16">
      <div className="bg-secondary_bg md:w-2/4  rounded-lg shadow-lg">

        <p className="text-xl font-bold text-primary m-6 flex justify-between">
         {initialData?.name?"Update User":"Create new user"} 
            <button onClick={handleClose}><Icon icon="mingcute:close-line" className="text-gray-700 m-2"/></button> 
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="m-9 flex flex-wrap">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="label text-sm text-primary mx-3 gap-4"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              onChange={handleChange}
              className=" rounded-md border-gray-300 mx-2 p-2 text-gray-700"
              value={formData?.name}
              placeholder=" name"
            ></input>
            {errors.name && (
              <p className="text-red-500 text-sm mx-2">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="label text-sm text-primary mx-3">
              email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              onChange={handleChange}
              className=" rounded-md border-gray-300 mx-2 p-2 text-gray-700"
              value={formData?.email}
              placeholder="email@company.com"
            ></input>
            {errors.email && (
              <p className="text-red-500 text-sm mx-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="username"
              className="label text-sm text-primary mx-3"
            >
              user name
            </label>
            <input
              type="text"
              {...register("username")}
              id="username"
              onChange={handleChange}
              className=" rounded-md border-gray-300 mx-2 p-2 text-gray-700"
              value={formData?.username}
              placeholder="username"
            ></input>
            {errors.username && (
              <p className="text-red-500 text-sm mx-2">
                {errors.username.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary p-2 rounded-md h-8 flex items-center mt-9 mx-auto"
          >
            {" "}
            Create user
          </button>
        </form>
      </div>
    </div>
  );
}
