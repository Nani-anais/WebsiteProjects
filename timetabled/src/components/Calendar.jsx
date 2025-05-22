import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
            <thead>
            <tr>
                
                <th>     </th> 
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="time">8am</td>
                <Event event='Free time ' color ='green'/>
                <Event event='Course COT' color= 'blue' location='Bldg EW101'/>
                <td></td>
                <Event event='Course COT' color= 'blue' location='Bldg 101'/>
                <td></td>
                <td></td>
                <Event event='Free time' color='green'/>
            </tr>
            <tr>
                <td className="time">9am</td>
                <Event color='green'/>
                <Event color= 'blue'/>
                <Event event='Course MAS'color= 'pink' location='Blg EE209'/>
                <Event color= 'blue'/>
                <Event event='Course MAS'color= 'pink' location='Blg EE209'/>
                <Event event='Course CIS' color= 'purple' location='Blg AL307'/>
                <Event color='green'/>
            </tr>
            <tr>
                <td className="time">10am</td>
                <Event color='green'/>
                <Event event='Office hours' color= 'blue' location='Bldg EW102'/>
                <Event color='pink'/>
                <Event event='Office hours' color= 'blue' location='Bldg EW102'/>
                <Event color='pink'/>
                <Event color= 'purple'/>
                <Event color='green'/>
            </tr>
            <tr>
                <td className="time">11am</td>
                <Event color='green'/>
                <Event event='Study Sesh 📚' color='orange' location='library F2'/>
                <Event event='Office hours' color='pink' location='Bldg EE130'/>
                <Event event='Study Sesh 📚' color='orange' location='library F2'/>
                <Event event='Office hours' color='pink' location='Bldg EE130'/>
                <Event color= 'purple'/>
                <Event event='Study Sesh 📚' color='orange'/>
            </tr>
            <tr>
                <td className="time">12pm</td>
                <Event color='green'/>
                <Event color='orange'/>
                <td></td>
                <Event color='orange'/>
                <td></td>
                <Event event='Office hours' color= 'purple' location='Blg AL307'/>
                <Event color='orange'/>
            </tr>
            <tr>
                <td className="time">1pm</td>
                <td></td>
                <Event color='orange'/>
                <Event event='CIS Lab1 Due' color='red'/>
                <Event color='orange'/>
                <td></td>
                <Event color= 'purple'/>
                <Event color='orange'/>
            </tr>
            <tr>
                <td className="time">2pm</td>
                <td></td>
                <Event color='orange'/>
                <td></td>
                <Event color='orange'/>
                <td></td>
                <td></td>
                <Event color='orange'/>
            </tr>
            <tr>
                <td className="time">3pm</td>
                <td></td>
                <Event color='orange'/>
                <td></td>
                <Event color='orange'/>
                <td></td>
                <td></td>
                <Event color='orange'/>
            </tr>
            <tr>
                <td className="time">4pm</td>
                <Event event='MAS Quiz 1' color='red' location='LockDown Browser'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">5pm</td>
                <Event color='red'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event='COT HW1 Due' color='red'/>
                <td></td>
            </tr>
            </tbody>
            </table>
        </div>
        );
}
export default Calendar;
