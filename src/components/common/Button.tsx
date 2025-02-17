export default function Button({
  text,
  btn_primary,
}: Readonly<{ text: string; btn_primary: boolean }>) {
  return (
    <button
      className={`${
        btn_primary
          ? "bg-[#ff6969] text-white px-6 py-3 text-xl md:text-2xl rounded-lg border border-[#ff6969] hover:border-white hover:bg-transparent transition-all duration-300"
          : "text-white px-6 py-3 text-xl md:text-2xl rounded-lg border hover:border-white transition-all duration-300 hover:bg-[#ff6363]"
      }`}
    >
      {text}
    </button>
  );
}
