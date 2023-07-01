
const PageHeader = (props) => {
    const { headerText, icon } = props;

    return (
        <div className="mt-6 border-b-2 border-dotted border-green-300">
            <div className="flex justify-between items-center mx-8 md:mx-24 mb-2">
                <h2 className="text-3xl text-green-300">{headerText}</h2>
                <span className="text-green-300">{icon}</span>
            </div>
        </div>
    );
};

export default PageHeader;