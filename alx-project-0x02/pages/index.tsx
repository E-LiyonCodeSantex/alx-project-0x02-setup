import Header from "@/components/layout/Header"


export default function Home() {
  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-3xl">Welcome to airbnb app cloning</h1>
      </div>
    </div>
  );
}
