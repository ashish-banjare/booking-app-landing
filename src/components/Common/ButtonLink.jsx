const ButtonLink = function ButtonLink({ myClass, text, href }) {
    return(
        <a className={`main-btn ${myClass}`} href={href}>{text}</a>
    );
};

export default ButtonLink;