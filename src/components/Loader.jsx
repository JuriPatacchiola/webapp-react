import './Loader.css';

const Loader = ({ visible }) => {
    if (!visible) return null;
    return (
        <div className="loader-backdrop">
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;
