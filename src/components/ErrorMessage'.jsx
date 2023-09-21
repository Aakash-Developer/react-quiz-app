import { BiSolidErrorAlt } from "react-icons/bi";

export default function ErrorMessage() {
  return (
    <div className="font-roboto ">
      <p className="text-center bg-slate-900 p-2 rounded-full mb-8 flex items-center gap-1">
        <BiSolidErrorAlt className="text-red-500 text-2xl" />
        There was an <span className="uppercase text-red-600 font-bold">error</span> in feching Qusetions.
      </p>
      <dotlottie-player
        src="/connectionError.json"
        background="transparent"
        speed="2"
        style={{ width: "100%", higth: "100%", maxWidth: "400px", maxHeight: "400px" }}
        direction="1"
        mode="normal"
        loop
        autoplay></dotlottie-player>
    </div>
  );
}
