import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("access_token");

  // If access token exists, redirect to dashboard
  if (accessToken) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Boost Your Productivity with Pomodoro
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-6">
          Stay focused. Manage your time. Achieve more. A simple yet powerful
          Pomodoro timer app to supercharge your workflow.
        </p>
        <a
          href="/register"
          className="px-6 py-3 bg-white text-red-500 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Get Started Free
        </a>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">Focused Sessions</h2>
            <p className="text-gray-700">
              Set 25-minute sessions to work deeply without distractions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Break Reminders</h2>
            <p className="text-gray-700">
              Get notified when it's time to rest and reset your brain.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Track Progress</h2>
            <p className="text-gray-700">
              Monitor how many sessions you complete daily and weekly.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to crush your goals?
        </h2>
        <p className="text-lg mb-6">
          Join thousands of focused people using our Pomodoro app every day.
        </p>
        <a
          href="/register"
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition"
        >
          Start Your First Session
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} Pomodoro App. All rights reserved.
      </footer>
    </main>
  );
}
