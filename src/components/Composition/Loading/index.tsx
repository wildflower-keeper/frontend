const Loading = ({loadingStyle}: {loadingStyle: string}) => {
const defaultStyle = `${loadingStyle} bg-blue-500 rounded-full`;
    return (
    <div className="flex justify-center items-center">
        <div className="relative inline-flex">
            <div className={`${defaultStyle}`}></div>
            <div className= {`${defaultStyle} absolute top-0 left-0 animate-ping`} />
            <div className= {`${defaultStyle} absolute top-0 left-0 animate-pulse`} />
        </div>
    </div>
)}

export default Loading;