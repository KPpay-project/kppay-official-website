import { notFound } from 'next/navigation';

export default function BankingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  notFound();
}
