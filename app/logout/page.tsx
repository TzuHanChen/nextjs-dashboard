import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts';
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log Out',
};

export default function LogoutPage() {
  return (
    <main>
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-20">
        <Link href="/">
          <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
            <AcmeLogo />
          </div>
        </Link>
        
        <div className="space-y-3">
          <div className="flex-1 rounded-lg bg-gray-50 px-6 py-8">
            <h1 className={`${lusitana.className} mb-6 text-2xl`}>
              You have been successfully logged out.
            </h1>
            <div className="text-gray-900">
              <p>Thank you for visiting this website.</p>
              <p>If you want to login again, you may click this button :</p>
            </div>
            <Link href="/login">
              <Button className="mt-4 w-full">
                Log in<ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}