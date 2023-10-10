import NFTCardNew from "../modules/nft/NFTCard";

const Test = () => {
    const styles: React.CSSProperties  = {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
    }
    return (
        <div style={styles}>
            <NFTCardNew/>
        </div>
    )
}

export default Test;