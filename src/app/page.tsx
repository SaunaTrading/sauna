'use client'
import AddBar from "@/components/ui/adBar"

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//   ]
// }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <AddBar />
    </main>
  )
}
