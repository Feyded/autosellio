import Image from "next/image";

export default async function Stories() {
  return (
    <div className="p-1 overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {Array.from({length: 10}).map((_, index) => (
          <div className="flex flex-col items-center gap-2 cursor-pointer" key={index}>
          <Image
            src="https://images.pexels.com/photos/27355514/pexels-photo-27355514/free-photo-of-jussmills.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2 ring-purple-700 object-cover"
          />
          <span className="font-medium">Ricky</span>
        </div>  
        ))}       
      </div>
    </div>
  );
}
