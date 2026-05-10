export function TableOfContent() {
  const chapters = [
    {
      number: "01",
      title: "Down the Rabbit-Hole",
      page: "1",
    },
    {
      number: "02",
      title: "The Pool of Tears",
      page: "12",
    },
  ];

  return (
    <section className="bg-[#f8f1df] h-full py-28 border-b border-[#dcc8ab]">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-[#8a6a4a] text-sm mb-5">
            Book Index
          </p>

          <h2 className="text-5xl md:text-6xl font-serif text-[#3b2a1f]">
            Table of Contents
          </h2>
        </div>

        <div className="space-y-8">
          {chapters.map((chapter, index) => (
            <a
              key={index}
              href={`#chapter${index + 1}`}
              className="group flex items-center justify-between border-b border-[#d8c5a8] pb-6 hover:translate-x-2 transition duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="text-3xl font-serif text-[#8a6a4a]">
                  {chapter.number}
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-[#3b2a1f] group-hover:text-[#6f4a2f] transition">
                    {chapter.title}
                  </h3>

                  <p className="text-[#7d6855] italic mt-2">
                    Alice's Adventures in Wonderland
                  </p>
                </div>
              </div>

              <div className="text-[#8a6a4a] text-2xl font-serif">
                {chapter.page}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 flex justify-center items-center gap-4">
          <div className="w-20 h-[1px] bg-[#b79572]" />
          <div className="w-3 h-3 rounded-full bg-[#b79572]" />
          <div className="w-20 h-[1px] bg-[#b79572]" />
        </div>
      </div>
    </section>
  );
}
