import PatientCard from "./PatientCard"

const Column = ({ data, setPatientData }) => {
    return (
        <div className="flex h-[60vh] max-h-[75vh] flex-col space-y-2 overflow-y-scroll rounded border border-purple-800 bg-white">
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
