type Props = {
    children: React.ReactNode;
}

export const PageLayout = ({children}: Props) => {
    return <div className="flex items-center content-center">
            {children}
    </div>
}