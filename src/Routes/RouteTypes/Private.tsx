import React,{ComponentType} from "react";
import DashboardTemplate from "../../Components/Template/DashboardTemplate";

interface Props {
    element:ComponentType<any>;
}

const Private:React.FC<Props> =({element:Element}) =>{
    return (
        <DashboardTemplate>
        <Element/>
        </DashboardTemplate>
    );
}

export default Private;