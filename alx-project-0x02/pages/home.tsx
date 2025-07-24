import Header from "@/components/layout/Header";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="relative h-screen">
            <Header />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="bg-white rounded text-blue-600 text-3xl p-4 hover:text-white hover:bg-blue-600 transition duration-500">Home page</h1>
            </div>

        </div>
    )
}

export default Home;