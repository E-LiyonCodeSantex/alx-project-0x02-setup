import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { CARDLISTINGSAMPLE } from "@/constant";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col bg-white">
            <Header />

            <main className="flex justify-between h-[100%] bg-white items-start gap-4 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {CARDLISTINGSAMPLE.map((card, index) => (
                        <Card key={index} title={card.title} content={card.content} />
                    ))}
                </div>
            </main>

        </div>
    )
}

export default Home;