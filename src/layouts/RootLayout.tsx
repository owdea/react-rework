type Props = {
    children: React.ReactNode;
}

export const RootLayout = ({children}: Props) => {
    return <div className="flex items-center content-center">
            <nav>
                {/* LINKS */}
                sss
            </nav>
            <main>
            {children}
            </main>
    </div>
}