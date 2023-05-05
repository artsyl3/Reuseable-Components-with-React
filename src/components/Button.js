import propTypes, { number } from "prop-types";
import className from "classnames";


function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest}){
    
        const classes = className(rest.className, 'flex items-center py-1.5 px-3 border', {
            'border-blue-500 bg-blue-500 text-wite m-px': primary,
            'border-gray-500 bg-gray-500 text-wite m-px': secondary,
            'border-green-500 bg-green-500 text-wite m-px': success,
            'border-yellow-500 bg-yellow-500 text-wite m-px': warning,
            'border-red-500 bg-red-500 text-wite m-px': danger,
            "rounded-full":rounded,
            'bg-white':outline,
            'text-blue-500':outline && primary,
            'text-gray-500':outline && secondary,
            'text-green-500':outline && success,
            'text-yellow-500':outline && warning,
            'text-red-500':outline && danger,
            });
   
    return  <button {...rest} className={classes}>{children}</button>
}
    
Button.prototypes = {

    checkVariationValue : ({primary, secondary, success, warning, danger, outline, rounded}) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)
        + Number(!!outline)
        + Number(!!rounded)
    
    if(count > 1){
        return new Error ("Your can chose only one from primary, secondary, success, warning, danger, outline, rounded")
    }
    }


}


export default Button;