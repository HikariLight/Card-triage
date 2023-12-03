import { useEffect, useState } from "react"
import Column from "./components/Column"
import { filterData, filterDataByInequality } from "./utils"

const App = () => {
    const apiURL = "http://localhost:3000/cards"

    const [patientData, setPatientData] = useState()

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
        <div className="h-screen w-screen overflow-hidden bg-white">
            <h1 className="my-2 text-center text-3xl text-purple-800">
                Card Triage
            </h1>

            <div className="grid grid-cols-2 gap-2">
                <div>
                    <h1 className="my-2 text-center text-2xl text-purple-800">
                        Todo
                    </h1>
                    {patientData && (
                        <Column
                            data={filterDataByInequality(
                                patientData,
                                "status",
                                "DONE",
                            )}
                        />
                    )}
                </div>

                <div>
                    <h1 className="my-2 text-center text-2xl text-purple-800">
                        Done
                    </h1>
                    {patientData && (
                        <Column
                            data={filterData(patientData, "status", "DONE")}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
