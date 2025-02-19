import { LuUser } from "react-icons/lu";
import Button from "@/components/common/Button";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen flex items-center py-16">
      <div className="w-[340px] md:w-[650px] lg:w-[990px] mx-auto bg-white rounded-lg px-4 pt-16 pb-4 relative">
        <div className="w-full absolute -top-24 lg:-top-36 left-0 flex justify-center">
          <div className="bg-white p-6 rounded-full border-[20px] border-[#FFB3B3]">
            <LuUser className="text-7xl lg:text-[140px]" />
          </div>
        </div>

        <form>
          {/* phone number form */}
          <div className="mt-4">
            <h3 className="font-semibold uppercase">Enter Email</h3>
            <input
              type="email"
              className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
              placeholder="Enter email here"
            />
          </div>
          {/* facebook page */}
          <div className="mt-4">
            <h3 className="font-semibold uppercase">Password</h3>
            <input
              type="text"
              className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
              placeholder="Enter password"
            />
          </div>

          <div className="w-full mt-4">
            <Button
              btn_primary={true}
              text="Sign In"
              styles="uppercase text-white w-full hover:text-black hover:bg-transparent hover:border-black border"
            />
          </div>

          <div className="flex justify-between items-center mt-5">
            <p>Already have an account?</p>
            <Link href={"/account/sign-up"} className="text-[#ff6969]">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
