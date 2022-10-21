import React from 'react'



export default function StationSelect(props) {

    const handleChange = event => {
        props.setStation(event.target.value)
    }

    const stationList = props.stationList.map(station => {
        return(<option value={station.stationID}>{station.name}</option>)
    })

    return (
        <div>
            <select name="stations" id="stations" onChange={handleChange}>
                {stationList}
            </select>
        </div>
    )
}