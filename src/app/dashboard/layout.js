import DashboardSideBar from "@/components/dashboard/DashboardSideBar";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-screen bg-background">
            <div className="flex flex-1 overflow-hidden">
                <DashboardSideBar />
                <div className="flex-1  overflow-y-auto">
                    
                    <main className="p-5">{children}</main>
                </div>
            </div>
        </div>
    );
}