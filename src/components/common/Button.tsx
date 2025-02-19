export default function Button({
  text,
  btn_primary,
  styles,
}: Readonly<{ text: string; btn_primary: boolean; styles: string }>) {
  return (
    <button
      className={`${
        btn_primary
          ? "bg-[#ff6969] px-5 py-2 text-xl md:text-2xl rounded-lg transition-all duration-300"
          : "px-5 py-2 text-xl md:text-2xl rounded-lg transition-all duration-300"
      } ${styles}`}
    >
      {text}
    </button>
  );
}
