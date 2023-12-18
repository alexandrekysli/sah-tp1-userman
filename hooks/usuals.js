import { useEffect, useState } from "react"
import Database from "../usuals/sqlite"

/**
 * Usual hooks for App
 * by kYsLi
 */

const useSimpleNavigation = (initialView) => {
    const [value, setValue] = useState(initialView)

    const changeView = (newView) => {
        setValue(newView)
    }

    return [value, changeView]
}

const useDbUsers = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            Database.initialize()
            const res = await Database.getAllUser()
            setData(x => [...res])
        }
        getData()
    }, [])

    return data
} 


export { useSimpleNavigation, useDbUsers }