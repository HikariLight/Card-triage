import PatientCard from "./PatientCard"

const Column = ({ data }) => {
    return (
        <div className="flex flex-col space-y-2 overflow-y-scroll">
            {data?.map((item, index) => (
                <PatientCard data={item} key={index} />
            ))}
        </div>
    )
}

export default Column
