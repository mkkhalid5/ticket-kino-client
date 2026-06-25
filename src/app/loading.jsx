export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 z-50">
      <div className="flex flex-col items-center">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"></span>
          <span
            className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-3 h-3 rounded-full bg-blue-600 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>

        <p className="mt-5 text-gray-600 text-lg font-medium">
          Loading your journey...
        </p>
      </div>
    </div>
  );
}