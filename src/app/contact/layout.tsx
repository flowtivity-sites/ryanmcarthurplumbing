import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ryan McArthur Plumbing - Get a Free Quote",
  description: "Contact Ryan McArthur Plumbing for a free quote on plumbing and gas fitting services in Northern NSW. Call 0412 649 668 or fill out our contact form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
