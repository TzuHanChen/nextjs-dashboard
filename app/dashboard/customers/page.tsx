import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main className="w-full">
      <h1 className={`${lusitana.className} mb-4 text-xl md:mb-8 md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <CustomersTable customers={customers} />
    </main>
  );
}