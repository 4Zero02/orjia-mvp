import { Sidebar } from "@/components/admin/sidebar"
import { Header } from "@/components/admin/header"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background text-foreground">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    )
}
