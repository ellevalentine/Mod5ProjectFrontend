import React from "react";
import Moment from "react-moment";
import 'moment-timezone';

// import ChartsPage from './PieChart'






const PotDetails = props => {

    //----------------------------------------------------------------------------------------------------------
    // Todays date  
    //----------------------------------------------------------------------------------------------------------
  

    let today = new Date()

    let dd = today.getDate()
    let mm = today.getMonth()+1  // since jan is 0 
    let yyyy = today.getFullYear()

    if(dd<10){
        dd='0'+dd
    }

    if(mm<10){
        mm='0'+mm
    }


    // let todaysDate = yyyy+'-'+mm+'-'+dd

    // const currentAddOn = "T10:59-0500"

    // const currentCombinded = todaysDate+currentAddOn



//----------------------------------------------------------------------------------------------------------
// goal date  
//----------------------------------------------------------------------------------------------------------
    // const dateaddon = "T12:59-0500"

    // const goalDate = props.item.date

    // const combinded = goalDate+dateaddon

//----------------------------------------------------------------------------------------------------------
// days untill goal
//----------------------------------------------------------------------------------------------------------

    // const date_diff_indays = function(date1, date2) {
    //     let dt1 = new Date(date1);
    //     let dt2 = new Date(date2);
    //     return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    //     }

    // let daysTillGoal = date_diff_indays(todaysDate, goalDate)

    // let weeksTillGoal = Math.round(daysTillGoal / 7)

    // let monthsTillGoal = Math.round(daysTillGoal / 30)


//----------------------------------------------------------------------------------------------------------
// amount to pay
//----------------------------------------------------------------------------------------------------------

// const neededMoney = props.item.goal

//  const perDay = neededMoney / daysTillGoal 
//  const perWeek = neededMoney / weeksTillGoal
//  const perMonth = neededMoney / monthsTillGoal

//  const perDayRoundedUp = (Math.round (perDay * 100))/100
//  const perWeekRoundedUp = (Math.round (perWeek * 100))/100
//  const perMonthRoundedUp = (Math.round (perMonth * 100))/100

//----------------------------------------------------------------------------------------------------------
// graph
//----------------------------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------------------
  return (


 

    <div className="ui segment">

<img
    alt="oh no!"
    className="potDetailImage"
    src={require('../components/water1.png')}
  />
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
          
          </div>
          <div >
            <h2></h2>
            <p>
              <strong>Description: </strong>
               
            </p>
            <strong>
              I want to raise £ by .
            </strong>
            <br />
            <div >
              <div >
                <div className="row">
                  <div className="column">
                    <i  />
                    <strong></strong>
                  </div>
                  <div className="column">
                    <i />
                    <br/>

                    {/* Time left: <Moment duration={currentCombinded}
                    date={combinded}
                    /> */}
                    <hr/>
                    <strong>Options:</strong>
                  </div>
                  <div className="column">
                    <i />

                    <form  >
{/* add on submit */}
                    <select name='potSchedule' id="mySelect" >
                      <option value="daily">Daily</option>
                      <option value="weekly" >Weekly</option>
                      <option value="monthly" >Montly</option>
                    </select>
                    
                    <button onClick={()=>{alert("payment confrimed!")}}>
                      Confirm
                    </button>

                    </form>
                    
                    <hr/>

                   <br/>

                   Days left:  |
                   Weeks left:  |
                   Months left: 

                   <br/> <br/>

                   pay per day : <strong> £  </strong>

                   <br/> 

                   pay per week : <strong> £  </strong> 

                   <br/> 

                   pay per month : <strong> £  </strong> 

                    <br/>
                   
               
                    {/* <ChartsPage perDayRoundedUp={perDayRoundedUp} perWeekRoundedUp={perWeekRoundedUp} perMonthRoundedUp={perMonthRoundedUp}/> */}
               

                </div>
                </div>
              </div>
            </div>
       
       
          </div>
        </div>
      </div>
    </div>
  );

};

export default PotDetails;
