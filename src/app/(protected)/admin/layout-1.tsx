export default function AdminLayout({
  children,
  admin,
  user,
}: React.PropsWithChildren<{ admin: React.ReactNode; user: React.ReactNode }>) {
  return children
  // return (
  //   <div className="grid grid-cols-2 gap-4">
  //     {admin}
  //     {user}

  //     <div className="col-span-2 flex flex-col justify-center items-center gap-2">
  //       <p className="text-2xl">Children From Admin Layout</p>
  //       {children}
  //     </div>
  //   </div>
  // );
}
