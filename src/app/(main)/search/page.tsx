import font from "@/utils/fonts";
import "./search.css";
import Button from "@/components/common/Button";
import Results from "@/components/Search/Results";

const search_data = [
  {
    id: 0,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
  {
    id: 1,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
  {
    id: 2,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
  {
    id: 3,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
  {
    id: 4,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
  {
    id: 5,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
  {
    id: 6,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
  {
    id: 7,
    name: "Rakibul Hasan",
    img: "https://i.ibb.co.com/7KFKNTF/team-2.jpg",
    blood_group: "A+",
  },
];

export default function SearchPage() {
  return (
    <div className="search-main-bg min-h-[calc(100vh-88px)] flex items-center py-10">
      <div className="md:min-w-[750px] lg:min-w-[1024px] mx-auto px-4 xl:px-0">
        <div className={`${font.karla.className} bg-[#ffffffa3] rounded-lg`}>
          <div className="py-7 px-4 bg-[#ff6969] rounded-t-lg">
            <h1 className={`${font.acme.className} text-5xl text-white`}>
              Search Blood
            </h1>
          </div>
          <form className="p-4">
            <div className="grid md:grid-cols-2 gap-10">
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

          {/* search results */}
          {search_data ? (
            <div className="px-4 pb-4">
              <Results data={search_data} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
