import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center bg-slate-50 relative overflow-hidden min-h-[70vh]">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-xl mb-8 border border-slate-100">
                        <AlertCircle className="w-12 h-12 text-accent" />
                    </div>

                    <h1 className="text-8xl font-black text-slate-200 mb-2">404</h1>
                    <h2 className="text-3xl font-bold text-primary mb-6">Page Not Found</h2>

                    <p className="text-slate-500 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                        Oops! It looks like the pipe you&apos;re looking for leads to nowhere.
                        Let&apos;s get you back to the main line.
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
