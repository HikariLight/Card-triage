const PatientCard = ({ data }) => {
    return (
        <div className="rounded-md border border-purple-800 p-4">
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
        </div>
    )
}

export default PatientCard
