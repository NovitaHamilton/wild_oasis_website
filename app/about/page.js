import Image from "next/image";
import about1 from "@/public/about-1.jpg";
import about2 from "@/public/about-2.jpg";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-x-12 lg:gap-x-24 gap-y-16 md:gap-y-32 text-lg items-center">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Welcome to The Wild Oasis
          </h1>
          <div className="space-y-8">
            <p>
              Where nature’s beauty and comfortable living come together. Tucked
              away in the heart of the Canadian Rockies, this is your peaceful
              escape from the everyday. It’s a place to reconnect with nature
              and enjoy life’s simple pleasures with family and friends.
            </p>
            <p>
              Our 8 cozy cabins provide a warm base, but the real adventure
              awaits in the surrounding mountains. Wander through forest trails,
              breathe in the crisp mountain air, and watch the stars sparkle
              above from beside your campfire or while relaxing in your hot tub.
            </p>
            <p>
              This is where lasting memories are made, surrounded by nature’s
              stunning beauty. Take the time to slow down, unwind, and feel at
              home in the wild.
            </p>
          </div>
        </div>

        <div className="col-span-2">
          <Image
            src={about1}
            placeholder="blur"
            quality={80}
            alt="Family sitting around a fire pit in front of a cabin"
          />
        </div>

        <div className="col-span-2">
          <Image
            src={about2}
            placeholder="blur"
            quality={80}
            alt="Family that manages The Wild Oasis"
          />
        </div>

        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent-400 font-medium">
            Managed by Our Family since 1962
          </h1>
          <div className="space-y-8">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we've maintained the essence of The Wild Oasis,
              blending the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, you're not just a
              guest; you're part of our extended family. So join us at The Wild
              Oasis soon, where tradition meets tranquility, and every visit is
              like coming home.
            </p>
            <div>
              <Link
                href="/cabins"
                className="inline-block mt-4 bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
              >
                Explore our cabins
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
