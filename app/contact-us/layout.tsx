import { auth } from '@/auth';
import SideNav from '@/app/ui/dashboard/sidenav';
import PublicSideNav from '@/app/ui/public-sidenav';

export default async function Layout({ children }: { children: React.ReactNode }) {
	const session = await auth();
	const Nav = session?.user ? SideNav : PublicSideNav;

	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-64">
				<Nav />
			</div>
			<div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
		</div>
	);
}
