import Header from "@/components/layout/Header";
import React from "react";

const Home: React.FC = () => {
    return (
        <div className="relative h-screen">
            <Header />

            <div className="fixed inset-0 bg-white flex justify-center items-center z[-1]">
            <h1 className="bg-white rounded text-blue-600 text-3xl p-4 hover:text-white hover:bg-blue-600 transition duration-500">Home page</h1>
            </div>

        </div>
    )
}

export default Home;