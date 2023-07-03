
const PageHeader = (props) => {
    const { headerText, icon } = props;

    return (
        <div className="mt-4 pb-4 border-b-2 border-dotted border-green-300">
            <div className="flex justify-between items-center mx-8">
                <h2 className="text-2xl md:text-3xl text-green-300 md:px-14">{headerText}</h2>
                <span className="text-green-300 md:px-12">{icon}</span>
            </div>
        </div>
    );
};

export default PageHeader;