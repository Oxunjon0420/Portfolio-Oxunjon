import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="container mx-auto text-zinc-300 flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-3xl">Bu sahifa mavjud emas</h1>
      <Link href="/" className="text-zinc-400 hover:text-zinc-100 underline transition-colors">
        Bosh sahifaga qaytish →
      </Link>
    </div>
  );
}

export default Page;
