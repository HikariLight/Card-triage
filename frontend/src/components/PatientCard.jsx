const PatientCard = ({ data, setPatientData }) => {
    const updateState = (status) => {
        setPatientData((patientData) => {
            // Deep copy
            const updatedState = JSON.parse(JSON.stringify(patientData))

            for (let index in updatedState) {
                if (updatedState[index].id === data.id) {
                    console.log("HEY")
                    updatedState[index]["status"] = status
                }
            }

            return updatedState
        })
    }

    return (
        <div className="m-2 rounded-md border border-purple-800 p-4 shadow-xl">
            <h1>
                <span className="text-purple-800">Patient name</span>:{" "}
                {data.patient_name}
            </h1>
            <h3>
                <span className="text-purple-800">Creation date</span>:{" "}
                {data.created_date}
            </h3>

            <ul>
                <li className="text-purple-800">Arrythmias:</li>
                <ul>
                    {data.arrhythmias.map((arrhythmia, index) => (
                        <li className="ml-8" key={index}>
                            {arrhythmia}
                        </li>
                    ))}
                </ul>
            </ul>
            <h3>
                <span className="text-purple-800">Status</span>: {data.status}
            </h3>

            <div className="flex flex-row justify-center">
                {(data.status === "PENDING" || data.status === "REJECTED") && (
                    <button
                        className="rounded-xl bg-purple-800 px-4 py-2 text-white"
                        onClick={() => updateState("DONE")}>
                        Done
                    </button>
                )}

                {data.status === "DONE" && (
                    <button
                        className="rounded-xl bg-purple-800 px-4 py-2 text-white"
                        onClick={() => updateState("REJECTED")}>
                        Todo
                    </button>
                )}
            </div>
        </div>
    )
}

export default PatientCard
