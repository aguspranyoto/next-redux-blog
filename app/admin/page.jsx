import { Admin } from "@/components";

function AdminPage() {
  return (
    <section className="bg-base-200">
      <div className="max-w-screen-lg mx-auto md:flex px-6 gap-6 bg-base-100 min-h-screen">
        <article className="w-full px-6 pt-6">
          <Admin />
        </article>
      </div>
    </section>
  );
}

export default AdminPage;
