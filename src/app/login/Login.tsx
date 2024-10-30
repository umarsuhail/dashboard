"use client";

import {  useState } from "react";
import CryptoJS from 'crypto-js';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();
  
  const handleForm = (e: React.FormEvent) => {
    e.preventDefault();
    const encrypted = CryptoJS.AES.encrypt(formData.password, 'abc').toString();
    sessionStorage.setItem("email",formData.email);
    sessionStorage.setItem("password",encrypted)
    if(formData.email && formData.password){
      router.push('/dashboard')
    }
    console.log(formData, 'form data');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})

  };
  return (
    <div className="flex mx-auto min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white p-4 m-3 w-3/6 shadow-xl rounded-[60px]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-3 mb-3 text-center text-xl font-bold tracking-tight text-gray-900">
        Welcome to the admin dashboard, Please <span className="text-primary">sign in </span> here
        </h2>
      </div>

      <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={handleForm}
         
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?
          <a className="text-blue cursor-pointer mx-3">Sign In</a>{" "}
        </p>
      </div>
    </div>
  );
}
