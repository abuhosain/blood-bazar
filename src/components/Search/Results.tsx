import Image from "next/image";
import Button from "@/components/common/Button";

export default function Results({
  data,
}: Readonly<{
  data: Array<{ id: number; name: string; img: string; blood_group: string }>;
}>) {
  return (
    <div className="space-y-2">
      {data.map((user) => (
        <div
          key={user.id}
          className="md:bg-[#ffffff8a] rounded-lg py-4 md:py-2 px-2 flex flex-wrap justify-center gap-4 md:justify-between md:items-center"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              className="w-12 h-12 rounded-full"
              src={user.img}
              width={100}
              height={100}
              alt={user.name}
            />
            <h4 className="text-xl font-semibold">{user.name}</h4>
            <h4 className="text-xl font-bold text-[#ff6969]">
              {user.blood_group}
            </h4>
          </div>

          <Button
            btn_primary={false}
            text="Contact Now"
            styles="text-black border border-black hover:bg-[#ff6969] hover:border-[#ff6969] hover:text-white"
          />
        </div>
      ))}
    </div>
  );
}
