export default function AuthLayout({ 
  children 
}: {
  children: React.ReactNode 
}) {
  return (
    <div className="h-full flex items-center justify-center bg-gradient">
      {children}
    </div>
  )
}