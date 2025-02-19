import font from "@/utils/fonts";
import "./search.css";
import Button from "@/components/common/Button";

export default function SearchPage() {
  return (
    <div className="search-main-bg min-h-[calc(100vh-88px)] flex items-center">
      <div className="min-w-[1024px] mx-auto">
        <div className={font.karla.className}>
          <div className="py-7 px-4 bg-[#ff6969] rounded-t-lg">
            <h1 className={`${font.acme.className} text-5xl`}>Search Blood</h1>
          </div>
          <form className="bg-[#ffffffa3] p-4 rounded-b-lg">
            <div className="grid grid-cols-2 gap-10">
              {/* blood source selection */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Search From </h3>
                <div className="flex justify-between items-center">
                  {/* Blood Donor */}
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-white flex justify-center items-center">
                      <input type="radio" name="source" defaultChecked />
                    </div>
                    <h4 className="text-xl font-semibold">Blood Donor</h4>
                  </div>
                  {/* Blood Bank */}
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-white flex justify-center items-center">
                      <input type="radio" name="source" />
                    </div>
                    <h4 className="text-xl font-semibold">Blood Bank</h4>
                  </div>
                </div>
              </div>

              {/* blood group selection */}
              <div>
                <h3 className="text-xl font-bold mb-2">Select Blood Group </h3>
                <select className="w-full py-1 px-3 rounded-lg">
                  <option>A+</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              {/* location zila selection */}
              <div>
                <h3 className="text-xl font-bold mb-2">Select Zila</h3>
                <select className="w-full py-1 px-3 rounded-lg">
                  <option>Bogura</option>
                  <option>Rajshahi</option>
                  <option>Rangopur</option>
                </select>
              </div>

              {/* location upazila selection */}
              <div>
                <h3 className="text-xl font-bold mb-2">Select Upazila</h3>
                <select className="w-full py-1 px-3 rounded-lg">
                  <option>Bogura</option>
                  <option>Rajshahi</option>
                  <option>Rangopur</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <Button
                btn_primary={true}
                text="Search Now"
                styles="w-full uppercase text-white border hover:bg-transparent hover:border-black hover:text-black"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
