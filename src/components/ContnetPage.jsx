export default function ContentPage() {
  return (
    <main className="bg-[#f8f1df]">
      <section
        id="chapter1"
        className="max-w-4xl mx-auto px-8 md:px-16 py-24 border-b border-[#d9c7aa]"
      >
        <p className="uppercase tracking-[6px] text-[#8b6b4d] text-sm mb-6">
          Chapter I
        </p>

        <h2 className="text-5xl md:text-6xl font-serif text-[#3b2a1f] mb-14">
          Down the Rabbit-Hole
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-2xl mb-14 border-4 border-[#dbc5a4]">
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop"
            alt="Rabbit Hole"
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div className="space-y-10 text-[#3e3428] text-xl leading-[48px] font-serif">
          <p>
            Alice was beginning to get very tired of sitting by her sister on
            the bank, and of having nothing to do. Once or twice she had peeped
            into the book her sister was reading, but it had no pictures or
            conversations in it.
          </p>

          <blockquote className="border-l-4 border-[#8b6b4d] pl-8 italic text-[#6d5843]">
            “What is the use of a book,” thought Alice, “without pictures or
            conversations?”
          </blockquote>

          <p>
            So she was considering in her own mind whether the pleasure of
            making a daisy-chain would be worth the trouble of getting up and
            picking the daisies, when suddenly a White Rabbit with pink eyes ran
            close by her.
          </p>

          <p>
            The Rabbit actually took a watch out of its waistcoat-pocket and
            looked at it, then hurried on. Alice started to her feet, for it
            flashed across her mind that she had never before seen a rabbit with
            either a waistcoat-pocket or a watch to take out of it.
          </p>

          <p>
            Burning with curiosity, she ran across the field after it and was
            just in time to see it pop down a large rabbit-hole under the hedge.
          </p>
        </div>

        <div className="mt-20 text-center text-[#8b6b4d] italic">— 01 —</div>
      </section>

      <section id="chapter2" className="max-w-4xl mx-auto px-8 md:px-16 py-24">
        <p className="uppercase tracking-[6px] text-[#8b6b4d] text-sm mb-6">
          Chapter II
        </p>

        <h2 className="text-5xl md:text-6xl font-serif text-[#3b2a1f] mb-14">
          The Pool of Tears
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-2xl mb-14 border-4 border-[#dbc5a4]">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
            alt="Fantasy Forest"
            className="w-full h-[500px] object-cover"
          />
        </div>

        <div className="space-y-10 text-[#3e3428] text-xl leading-[48px] font-serif">
          <p>
            “Curiouser and curiouser!” cried Alice. She was so much surprised
            that for the moment she quite forgot how to speak good English.
          </p>

          <p>
            Now she opened the little door and found that it led into a small
            passage, not much larger than a rat-hole. She knelt down and looked
            along the passage into the loveliest garden you ever saw.
          </p>

          <blockquote className="border-l-4 border-[#8b6b4d] pl-8 italic text-[#6d5843]">
            Alice longed to get out of that dark hall and wander among those
            bright flower-beds and cool fountains.
          </blockquote>

          <p>
            But she could not even get her head through the doorway. She sat
            down and began to cry again. Soon there was a large pool all around
            her, reaching halfway down the hall.
          </p>

          <p>
            After a time she heard a little pattering of feet in the distance
            and quickly dried her eyes to see what was coming.
          </p>
        </div>

        <div className="mt-20 text-center text-[#8b6b4d] italic">— 02 —</div>
      </section>
    </main>
  );
}
