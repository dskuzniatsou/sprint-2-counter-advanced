type ButtonProps = {
    title: string

    onClickButton?: () => void
    className?: string
}


export const Button = ({title, onClickButton, className}: ButtonProps) => {
    return (
        <button  className={className} onClick= {onClickButton}>{title}</button>
    );

};

