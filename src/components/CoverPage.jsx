import { BookOpen } from "lucide-react";

export function CoverPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#2f241d] overflow-hidden px-6 py-20">
      <img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop"
        alt="Vintage Book"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-2xl border-[12px] border-[#5b3b22] bg-[#6f4a2f] shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#2a170b] to-[#6f4a2f]" />
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop"
              alt="Library"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 px-10 md:px-24 py-28 md:py-40 text-center flex flex-col items-center">
            <div className="bg-[#f6ebd7] p-5 rounded-full shadow-2xl mb-10">
              <BookOpen className="w-10 h-10 text-[#5b3b22]" />
            </div>
            <p className="uppercase tracking-[10px] text-[#d8b98a] text-sm mb-8">
              Classic Story Collection
            </p>
            <h1 className="text-5xl md:text-8xl font-bold font-serif text-[#fff7e8] leading-tight drop-shadow-xl">
              Alice's
              <br />
              Adventures
              <br />
              in Wonderland
            </h1>
            <div className="w-48 h-[2px] bg-[#d8b98a] my-12" />
            <p className="max-w-3xl text-lg md:text-2xl italic text-[#f1dfc2] leading-10">
              A timeless fantasy novel filled with imagination, curious
              adventures, and unforgettable characters.
            </p>
            <div className="mt-16">
              <p className="uppercase tracking-[6px] text-[#d8b98a] text-sm mb-4">
                Written By
              </p>
              <h2 className="text-4xl font-serif text-white">Lewis Carroll</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
