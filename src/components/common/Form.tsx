export default function Form() {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-4">
      {/* name form */}
      <div>
        <h3 className="font-semibold uppercase">Full Name</h3>
        <input
          type="text"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="Enter name here"
        />
      </div>

      {/* Email form */}
      <div>
        <h3 className="font-semibold uppercase">Enter Email</h3>
        <input
          type="email"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="Enter email here"
        />
      </div>
      {/* Zila and Upazila */}
      <div className="flex justify-between gap-4">
        <div className="w-full">
          <h3 className="font-semibold uppercase">Zila</h3>
          <select className="py-2 w-full rounded-lg mt-[10px] border-2">
            <option>Bogura</option>
            <option>Rangopur</option>
            <option>Dhaka</option>
          </select>
        </div>
        <div className="w-full">
          <h3 className="font-semibold uppercase">Upazila</h3>
          <select className="py-2 w-full rounded-lg mt-[10px] border-2">
            <option>Bogura</option>
            <option>Rangopur</option>
            <option>Dhaka</option>
          </select>
        </div>
      </div>
      {/* Address form */}
      <div>
        <h3 className="font-semibold uppercase">Address</h3>
        <input
          type="text"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="Enter address here"
        />
      </div>
    </div>
  );
}
