import { propertDetailsAction } from "./propertyDetails-slice";
import{axiosInstance} from "../../utils/axios";

//fetch speific id

//recv the property
//call backend api
//wait for response
//get the property data
//storedetails in redux
//if error stote error in redux



export const getPropertyDetails =(id)=> async(dispatch) =>{
    try{
        dispatch(propertDetailsAction.getListRequest());
        const response = await axiosInstance(`/v1/rent/listing/${id}`)
        console.log(response);
        if(!response){
            throw new Error ("Could not fetch any propertyDetails")
        }

        const{data} = response.data;
        dispatch(propertDetailsAction.getPropertyDetails(data))
    }catch(error){
        dispatch(propertDetailsAction.getErrors(error.response.data.error))
    }
}
