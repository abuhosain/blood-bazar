import Button from "@/components/common/Button";
import Form from "@/components/common/Form";

export default function Blood_Bank_Register() {
  return (
    <form>
      <Form />

      {/* phone number form */}
      <div className="mt-4">
        <h3 className="font-semibold uppercase">Phone Number</h3>
        <input
          type="number"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="Enter number here"
        />
      </div>
      {/* facebook page */}
      <div className="mt-4">
        <h3 className="font-semibold uppercase">Facebook Page</h3>
        <input
          type="text"
          className="py-2 px-3 border-2 rounded-lg mt-2 w-full"
          placeholder="(optional)"
        />
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
