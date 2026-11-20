// http://localhost:3000/api-demo

import Link from "next/link";

// Let this page wait for the API before it renders (no loading state needed)
export const instant = false;

type Service = { id: number; title: string };

export default async function ApiDemoPage() {
  // 1. Call the backend
  // API_URL comes from the .env.local file
  const messageRes = await fetch(`${process.env.API_URL}/api/message`);
  const healthRes = await fetch(`${process.env.API_URL}/api/health`);
  const servicesRes = await fetch(`${process.env.API_URL}/api/services`);

  // 2. Read the JSON
  const message = await messageRes.json();
  const health = await healthRes.json();
  const { services } = await servicesRes.json();
  console.log(health)


  // 3. Show it
  return (
    <main className="min-h-screen bg-[#FAFAF7] px-6 py-16 font-sans text-[#141414]">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#5F5E5A] hover:text-[#141414]">← Back to home</Link>

        <h1 className="mt-6 mb-3 text-5xl font-bold tracking-tight">
          Data from the <span className="text-[#D9480F]">backend</span>
        </h1>
        <p className="mb-10 text-lg text-[#5F5E5A]">
          This page calls the Express API and shows the answer.
        </p>

        <div className="flex flex-col gap-6">
          {/* /api/message */}
          <div className="rounded-xl border border-[#E4E2DA] bg-white p-6">
            <p className="mb-2 font-mono text-xs text-[#5F5E5A]">GET /api/message</p>
            <h2 className="text-2xl font-semibold">{message.message}</h2>
            <p className="mt-2 text-sm text-[#5F5E5A]">Server time: {message.serverTime}</p>
          </div>

          {/* /api/health */}
          <div className="rounded-xl border border-[#E4E2DA] bg-white p-6">
            <p className="mb-2 font-mono text-xs text-[#5F5E5A]">GET /api/health</p>
            <h2 className="text-2xl font-semibold text-emerald-600">{health.status}</h2>
            <p className="mt-2 text-sm text-[#5F5E5A]">Uptime: {health.uptime} seconds</p>
          </div>

          {/* /api/services */}
          <div className="rounded-xl border border-[#E4E2DA] bg-white p-6">
            <p className="mb-4 font-mono text-xs text-[#5F5E5A]">GET /api/services</p>
            <ul className="flex flex-col gap-2">
              {services.map((service: Service) => (
                <li key={service.id} className="rounded-lg bg-[#FAFAF7] px-4 py-3 font-medium">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
