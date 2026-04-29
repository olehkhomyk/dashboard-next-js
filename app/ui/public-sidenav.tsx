import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function PublicSideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40">
				<div className="w-32 text-white md:w-40">
					<AcmeLogo />
				</div>
			</div>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block" />
				<Link
					href="/login"
					className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
				>
					<ArrowRightIcon className="w-6" />
					<div className="hidden md:block">Log in</div>
				</Link>
			</div>
		</div>
	);
}
