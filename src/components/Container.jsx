const Container = ({children, className}) =>{
return(
    <div className={`max-w-[1990px] px-4 sm:px-10 lg:px-[48px] m-auto ${className}`}>
        {children}
    </div>
)
}

export default Container