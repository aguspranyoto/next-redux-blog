import { Article } from ".";
import Link from "next/link";

function Admin() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-slate-700 mb-6 font-bold">Admin Dashboard</h3>
        <Link href={`/admin/add`} className="text-slate-700 mb-6 font-medium">
          Add New Post
        </Link>
      </div>
      <Article type="admin" />
    </div>
  );
}

export default Admin;
