import ServiceLists from "./ServiceLists"

const Classes = ({setSelectedTab,setId}) => {
    return (
        <div className="services_container">
            <ServiceLists setId={setId} setSelectedTab={setSelectedTab}/>
        </div>
    )
}

export default Classes;