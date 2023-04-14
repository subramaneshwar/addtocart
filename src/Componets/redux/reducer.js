var initialData={
    name:""
};
const basicreducer = (storedata = initialData,action)=>{

    if(action.type==="name"){
        return {
            name:action.username
        }

    };
    return storedata;

}
export default basicreducer;