
import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // minimum value of money to have so you can give zakat
      nisab: '',
      // gold and silver values
      goldValue: '',
      goldOz: '',
      silverValue: '',
      silverOz: '',
      // cash values
      cash: '', // cash on hand and in bank accts
      deposits: '',
      loan: '',
      businessInvestments: '',
      // trade
      stock: '',
      // liabilities
      borrowedMoney: '',
      wages: '',
      taxRentUtility: '',
      // total amount
      total: ''
    }
  }

  formSubmit = () => {
    const { nisab, goldValue, goldOz, silverValue, silverOz, cash, deposits, loan, businessInvestments, stock, borrowedMoney, wages, taxRentUtility } = this.state;
    // gold and silver values 
    let gold = goldOz * goldValue;
    let silver = silverOz * silverValue;
    // cash values
    let totalCash = cash + deposits + businessInvestments + loan;
    // liabilities 
    let totalLiabilities = borrowedMoney + wages + taxRentUtility;
    let total = parseInt(gold) + parseInt(silver) + parseInt(totalCash) + parseInt(stock) - parseInt(totalLiabilities);
    // this.setState({total: parseInt(total)});
    if (total >= 6056.85) {
      document.querySelector("#zakatOutput").innerHTML = `<h6>Total Zakat Due This Year: ${0.025 * total}</h6>`;
    }
    else {
      document.querySelector("#zakatOutput").innerHTML = "<h6>No Zakat Due This Year</h6>"
    }
  } 
  render() {
    return (
      <div id = "app">
            <form>
              <label>
                Nisab:
                <input type="number" name="nisab" placeholder="$6056.85" onChange= {e => this.setState({nisab: e.target.value})}/>
              </label> <br />
              <label>
                Gold Value Today:
                <input type="number" name="goldValue" placeholder="$2018.95" onChange= {e => this.setState({goldValue: e.target.value})}/>
              </label>  <br />
              <label>
                Gold (in oz):
                <input type="number" name="goldOz" onChange= {e => this.setState({goldOz: e.target.value})}/>
              </label>  <br />
              <label>
                Silver Value Today:
                <input type="number" name="silverValue" placeholder="$22.89" onChange= {e => this.setState({silverValue: e.target.value})}/>
              </label>  <br />
              <label>
                Silver (in oz):
                <input type="number" name="silverOz" onChange= {e => this.setState({silverOz: e.target.value})}/>
              </label>  <br />
              <label>
                Cash:
                <input type="number" name="cash" onChange= {e => this.setState({cash: e.target.value})} />
              </label>  <br />
              <label>
                Loan:
                <input type="number" name="loan" onChange= {e => this.setState({loan: e.target.value})}/>
              </label>  <br />
              <label>
                Stock Value:
                <input type="number" name="stock" onChange= {e => this.setState({stock: e.target.value})} />
              </label>  <br />
              <label>
                Liability:
                <input type="number" name="liability" onChange= {e => this.setState({liability: e.target.value})}/>
              </label>  <br />
              <button type="button" onClick = {() => this.formSubmit()}>Submit</button>
            </form>
          <div id="zakatOutput">
          </div> 
        </div>
    )
  }
  
}
