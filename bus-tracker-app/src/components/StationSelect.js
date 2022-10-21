import React from 'react'



export default function StationSelect(props) {
    // const [stationList, setStationList] = props.stationList;

    const stationList = props.stationList.map(station => {
        return(<option value={station.stationID}>{station.name}</option>)
    })

    return (
        <div>
            <select name="stations" id="stations">
                {stationList}
            </select>
        </div>
    )
}