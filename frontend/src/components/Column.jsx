import PatientCard from "./PatientCard"

const Column = ({ data, setPatientData }) => {
    return (
        <div className="flex flex-col space-y-2 overflow-y-scroll">
            {data?.map((item, index) => (
                <PatientCard
                    data={item}
                    key={index}
                    setPatientData={setPatientData}
                />
            ))}
        </div>
    )
}

export default Column
