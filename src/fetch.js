import React from "react";
import Records from './record.json';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Icon from './icon';
function fectchdata()
{
    return(
        <table className="table">
          {
            Records && Records.map(record =>{
                return (
                   
                    <tr className="box" key={record.id}>
                        <td>
                     <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div> <b>{record.heading}</b></div>
                    <div>
                    <Icon icon={faThumbsUp} bgColor="yellow" iconColor="white" />
                    </div>
                    </div>
                    <br></br> 
                    {record.content}<br/>
                    <br/>
                    {record.tech && record.tech.map(data=> {
                            return(
                                <div key={record.id}>
                                    -{data.R1}
                                    <br></br>
                                    -{data.R2}
                                    <br></br>
                                    -{data.R3}
                                </div>
                            )
                        })}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{fontSize:"13px"}}>
        <br />
        <div style={{display:"inline", color: "#7CB9E8", fontSize:"13px"}}>thought</div> by anujgosalia
        </div>
        <div style={{fontSize:"13px"}}>
        <br />
        january 21 · 1 min Read · 156 Views
        </div>
    </div>
                        </td>
                    </tr>
                )
            })
          }
        </table>
    )
}
export default fectchdata;