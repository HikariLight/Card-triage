import { useEffect, useState } from "react"
import Column from "./components/Column"
import SearchBar from "./components/SearchBar"
import { filterData, filtersPipeline } from "./utils"

const App = () => {
    const apiURL = "http://localhost:3000/cards"

    const [patientData, setPatientData] = useState()
    const [filter, setFilter] = useState("")

    const getPatientData = () => {
        fetch(apiURL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPatientData(data)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
            })
    }

    useEffect(() => {
        getPatientData()
    }, [])

    return (
        <div className="h-screen w-screen overflow-hidden bg-sky-50">
            <h1 className="my-2 text-center text-3xl text-purple-800">
                Card Triage
            </h1>
            <SearchBar setFilter={setFilter} />
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h1 className="my-2 text-center text-2xl text-purple-800">
                        Todo
                    </h1>
                    <div className="grid grid-cols-2 gap-2">
                        {patientData && (
                            <div>
                                <h1 className="my-2 text-center text-xl text-purple-600">
                                    Pending
                                </h1>
                                <Column
                                    data={filtersPipeline(patientData, [
                                        {
                                            type: "equality",
                                            attribute: "status",
                                            value: "PENDING",
                                        },
                                        {
                                            type: "inclusion",
                                            attribute: "patient_name",
                                            value: filter,
                                        },
                                    ])}
                                    setPatientData={setPatientData}
                                />
                            </div>
                        )}
                        {patientData && (
                            <div>
                                <h1 className="my-2 text-center text-xl text-purple-600">
                                    Rejected
                                </h1>
                                <Column
                                    data={filtersPipeline(patientData, [
                                        {
                                            type: "equality",
                                            attribute: "status",
                                            value: "REJECTED",
                                        },
                                        {
                                            type: "inclusion",
                                            attribute: "patient_name",
                                            value: filter,
                                        },
                                    ])}
                                    setPatientData={setPatientData}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h1 className="my-2 text-center text-2xl text-purple-800">
                        Done
                    </h1>
                    {patientData && (
                        <Column
                            data={filtersPipeline(patientData, [
                                {
                                    type: "equality",
                                    attribute: "status",
                                    value: "DONE",
                                },
                                {
                                    type: "inclusion",
                                    attribute: "patient_name",
                                    value: filter,
                                },
                            ])}
                            setPatientData={setPatientData}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
