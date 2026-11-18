import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'Cyprus Beauty Directory',description:'Βρείτε κουρεία, κομμωτήρια και ανεξάρτητους επαγγελματίες στην Κύπρο.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="el"><body>{children}</body></html>}
