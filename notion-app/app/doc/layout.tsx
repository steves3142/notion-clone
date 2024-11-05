import LiveBlocksProvider from "@/components/LiveBlocksProvider"


function Pagelayout({ children }: {children: React.ReactNode }) {
  return (
    <LiveBlocksProvider>{children}</LiveBlocksProvider>
  )
}

export default Pagelayout