import useTitle from "@/lib/hooks/useTitle";

const NotFound = () => {
  useTitle("404");

  return (
    <section>
      <div className="space-y-5 text-center font-mono font-medium text-slate-700 dark:text-slate-200">
        <h2 className="text-9xl font-semibold">404</h2>
        <p className="text-2xl text-red-600 lg:text-4xl dark:text-red-500">Page not found!</p>
      </div>
    </section>
  );
};

export default NotFound;
