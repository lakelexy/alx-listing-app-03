import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { HERO_IMAGE } from "@/constants";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";

// Load Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
        <p className="text-lg mt-4">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </section>
  );
};

// Pill Component for Filter Section
type PillProps = {
  label: string;
  onClick: () => void;
};

const Pill: React.FC<PillProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-1 bg-gray-100 rounded-full shadow-md hover:bg-gray-200"
  >
    {label}
  </button>
);

// Filter Section Component
const filters = ["Top Villa", "Self Checkin", "Pet Friendly"];

const FilterSection: React.FC = () => (
  <section className="p-4">
    <div className="flex gap-4">
      {filters.map((filter, index) => (
        <Pill key={index} label={filter} onClick={() => console.log(filter)} />
      ))}
    </div>
  </section>
);

type PropertyProps = {
  name: string;
  price: number;
  rating: number;
  image: string;
};

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  price,
  rating,
  image,
}) => (
  <div className="border rounded-lg shadow-lg overflow-hidden">
    <img src={image} alt={name} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold">{name}</h3>
      <p>Price: ${price}/night</p>
      <p>Rating: {rating}</p>
    </div>
  </div>
);

//Listings Section Component
const ListingsSection: React.FC = () => (
  <section className="p-4">
    <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROPERTYLISTINGSAMPLE.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  </section>
);

// Main Page Component
const Home: React.FC = () => (
  <div
    className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
  >
    {/* Hero Section */}
    <HeroSection />

    {/* Main Content */}
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <FilterSection />
      <ListingsSection />
    </main>

    {/* Footer */}
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  </div>
);

export default Home;
