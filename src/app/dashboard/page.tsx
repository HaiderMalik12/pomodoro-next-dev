import PomodoroTimer from "@/components/pomodoro/PomodoroTimer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const cookieStore = cookies();
  const cookieHeader = (await cookieStore)
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile`, {
    headers: {
      Cookie: cookieHeader,
    },
    credentials: "include",
    cache: "no-store", // prevent caching for auth
  });

  if (!res.ok) {
    redirect("/login"); // or render an error UI
  }

  const user = await res.json();
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    //   <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
    //     <div className="mb-6 text-center text-2xl font-bold text-gray-800">
    //       Dashboard
    //     </div>
    //     {/* Dashboard content goes here */}
    //   </div>
    // </div>
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Pomodoro Timer</h1>
        <PomodoroTimer />
      </div>
    </main>
  );
};

export default DashboardPage;
