import { HubNavBar } from "@/components/hub/HubNavBar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HubNavBar />
      {children}
    </>
  )
}
