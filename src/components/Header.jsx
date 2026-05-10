import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header
      id="top"
      className="
        sticky
        top-0
        z-50
        bg-[#f8f1df]/95
        backdrop-blur-md
        border-b-[6px]
        border-[#5b3b22]
        shadow-lg
      "
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <div className="bg-[#5b3b22] p-3 rounded-full shadow-xl">
              <BookOpen className="w-6 h-6 text-[#fff7e8]" />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#3b2a1f] leading-none">
                Wonderland
              </h1>

              <p className="text-sm italic text-[#7c6754] mt-1">
                Classic Digital Storybook
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
