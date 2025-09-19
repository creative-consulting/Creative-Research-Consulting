// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
//         <p className="text-xl">
//           The page you&apos;re looking for doesn&apos;t exist.
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function NotFoundContent() {
  const params = useSearchParams();
  const from = params.get("from");

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">404 | Page Not Found</h1>
      {from && <p className="mt-2 text-gray-500">You came from: {from}</p>}
    </div>
  );
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotFoundContent />
    </Suspense>
  );
}
