
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import Footer from "../components/shared/Footer";
import Navbar from "../components/Home/navber";

export const metadata: Metadata = {
    title: "Design Role | Home",
    description: "Generated by create design role",
};

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // const session = await getServerSession(authOptions)

    return (
        <div>
        <div>
            <Navbar />
        </div>
        <div className="min-h-screen">
            {children}
        </div>
        <Footer />
    </div>
    );
}