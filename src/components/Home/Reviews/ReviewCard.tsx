import SliderBtns from "./SliderBtns";

export default function ReviewCard() {
  return (
    <div className="space-y-6">
      <h4 className="text-[#ff6363] text-4xl font-bold">Recipient Opinion</h4>
      <p className="text-xl">
        I wish I could tell you my donor how grateful I am for your selfless
        act. You gave me new life. We maybe coworkers or schoolmates or just two
        in the same community. {"I’m"} very grateful to you.
      </p>

      <div className="flex justify-between items-center pr-5">
        <div>
          <h5 className="text-2xl font-bold">LOGAN MUNSON</h5>
          <span className="text-xl">- Computer Expert</span>
        </div>
        <SliderBtns />
      </div>
    </div>
  );
}
