import SideNav from "@/app/ui/dashboard/sidenav";

// Partial Prerendering (=ppr)はNext.js 14 で導入された実験的な機能で、現時点で本番環境で使用することは推奨されていないため、コメントアウトしている
// export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
