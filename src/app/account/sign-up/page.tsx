import Form_Switcher from "@/components/account/forms/Form_Switcher";

export default function page() {
  return (
    <div className="min-h-screen flex items-center py-16">
      <div className=" mx-auto px-4 xl:px-0">
        <Form_Switcher />
      </div>
    </div>
  );
}
