import React from 'react';
import Chart from 'chart.js';
import ChartFile from '../ChartFile/ChartFile'

function Homepage() {
    return (
    <div className="container center">

        <div className="page-area">

            <div className="text-box">
                
                <section>
                <h1>Stay on track</h1>
                <p title="How to track your money!">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
                </section>
            </div>
    
            <div className="text-box">
                
                <section>
                <h1>Alerts</h1>
                <p title="Alerts when funds are low">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
                </section>
            </div>
    
            <div className="text-box">
                
                <section>
                <h1>Results</h1>
                <p title="Get out of debt">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
                </section>
            </div>
    
            <div className="text-box">
                
                <section>
                <h1>Free</h1>
                <p title="Budget your spending for free">
                    This app is free!!! And you are the only one holding your data!
                </p>
                </section>
            </div>
    
            <div className="text-box">
                
                <section>
                <h1>Stay on track</h1>
                <p title="How to track your money!">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
                </section>
            </div>
    
            <div className="text-box">
                
                <section>
                <h1>Alerts</h1>
                <p title="Alerts when funds are low">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
                </section>
            </div>
    
            <div className="text-box">
                
                <section>
                <h1>Results</h1>
                <p title="Get out of debt">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
                </section>
            </div>
    
            <div className="text-box">
                
                <section>
                <h1>Chart</h1>
                <p title="Budget your spending for free">
                   {/*  <canvas id="myChart" width="400" height="400"></canvas> */}
                   <ChartFile/> 
                </p>
                </section>
            </div>

        </div>

    </div>
  );
}

export default Homepage;