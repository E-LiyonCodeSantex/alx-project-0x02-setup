import { CardProps } from "@/interfaces/index"
import { CARDLISTINGSAMPLE } from "@/constant/index";

const Card: React.FC<CardProps> = ({title, content}) =>{
    return(
        
        <div className="flex flex-col gap-4 w-full max-w[300px] bg-blue-400 text-black hover:shadow-xl transition duration-300 p-4 rounded">
            <h1 className="flex flex-wrap w-full justify-center items-center">{title}</h1>
            <p className="flex flex-wrap w-full justify-center items-center">
                {content}
            </p>
            <span></span>
        </div>
    )
}

export default Card;