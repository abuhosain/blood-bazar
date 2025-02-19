import font from "@/utils/fonts";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${font.karla.className} bg-[#FFB3B3]`}>{children}</div>
  );
}
