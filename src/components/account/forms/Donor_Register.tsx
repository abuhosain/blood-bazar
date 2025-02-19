import Button from "@/components/common/Button";
import Form from "@/components/common/Form";

export default function Donor_Register() {
  return (
    <form>
      <Form />

      <div className="grid md:grid-cols-2 gap-6 md:gap-4 mt-6 md:mt-4">
        {/* Zila and Upazila */}
        <div className="flex justify-between gap-4">
          <div className="w-full">
            <h3 className="font-semibold uppercase">Blood Group</h3>
            <select className="py-2 w-full rounded-lg mt-[10px] border-2">
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className="font-semibold uppercase">Age</h3>
            <input
              type="number"
              className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
              placeholder="Enter here"
            />
          </div>
        </div>
        {/* Address form */}
        <div>
          <h3 className="font-semibold uppercase">Phone Number</h3>
          <input
            type="number"
            className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
            placeholder="Enter number here"
          />
        </div>

        {/* gender selection */}
        <div className="md:col-span-2">
          <h3 className="font-bold mb-2 uppercase">Select Gender </h3>
          <div className="flex justify-between items-center">
            {/* Male Donor */}
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-slate-400 flex justify-center items-center">
                <input type="radio" name="gender" defaultChecked />
              </div>
              <h4 className="text-xl font-semibold">Male</h4>
            </div>
            {/* Female Bank */}
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-slate-400 flex justify-center items-center">
                <input type="radio" name="gender" />
              </div>
              <h4 className="text-xl font-semibold">Female</h4>
            </div>
            {/* Other Bank */}
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-slate-400 flex justify-center items-center">
                <input type="radio" name="gender" />
              </div>
              <h4 className="text-xl font-semibold">Other</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-4">
        <Button
          btn_primary={true}
          text="Register Now"
          styles="uppercase text-white w-full hover:text-black hover:bg-transparent hover:border-black border"
        />
      </div>
    </form>
  );
}
