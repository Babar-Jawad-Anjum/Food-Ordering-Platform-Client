import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="w-full p-40 flex justify-center">
      <LoaderCircle className="animate-spin text-[#F88340]" />
    </div>
  );
};

export default Spinner;
