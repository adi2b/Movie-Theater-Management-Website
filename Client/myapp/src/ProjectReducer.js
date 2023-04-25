const ProjectReducer = (state = [], action) =>
{
    switch(action.type)
    {
        case "LOAD":           
            return action.payload


        case "ADD":
            return [...state, action.payload]


        case "DELETE_BY_MOVIEID":
            let movieid = action.payload
            let arr1 = [...state]

            let arr1_id = arr1.filter(x => x.movieID == movieid).map(x => x._id)

            arr1_id.forEach(id =>
                {
                    let index1 = arr1.findIndex(x => x._id == id)
                    if(index1 >=0)
                    {
                        arr1.splice(index1, 1)
                    }
                })
            return arr1

        case "DELETE_BY_MEMBERID":
            let memberid = action.payload
            let arr2 = [...state]

            let arr2_id = arr2.filter(x => x.memberID == memberid).map(x => x._id)

            arr2_id.forEach(id =>
                {
                    let index2 = arr2.findIndex(x => x._id == id)
                    if(index2 >=0)
                    {
                        arr2.splice(index2, 1)
                    }
                })            
            return arr2


        default: 
            return state;
    }

}

export default ProjectReducer 