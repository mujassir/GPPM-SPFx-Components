import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


export interface IEssHrApplicationWebPartProps {
  description: string;
}

export default class EssHrApplicationWebPart extends BaseClientSideWebPart<IEssHrApplicationWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div class="overflow-auto">
        <table class="First-table">
            <thead>
                <tr>
                    <th class="table-head" colspan="6">
                        Employee Withholding Tax Provision Application Form
                    </th>
                </tr>
            </thead>
            <tr>
                <td class="fixed-width">Description</td>
                <td colspan="5" class="same-textarea"><textarea name="" id="" cols="90" rows="3"
                        style="border: 2px solid #878181; color: #878181;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident minima aperiam, quo ex libero officia nulla fugiat exercitationem odit itaque alias culpa eaque vel, totam molestiae ea. Saepe, optio quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, distinctio sunt? A laboriosam labore ex neque ipsam nemo. Ad sunt atque aut iste </textarea>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="samePad1">Department</td>
                <td colspan="2" class="samePad1">Employee Number</td>
                <td colspan="2" class="samePad1">Name</td>
            </tr>
            <tr>
                <td colspan="2" class="samePad2"><select class="flied_leng" name="dept" id="dept">
                        <option value=""></option>
                        <option value="Dept 01">Dept 01</option>
                        <option value="Dept 02">Dept 02</option>
                        <option value="Dept 03">Dept 03</option>
                        <option value="Dept 04">Dept 04</option>
                        <option value="Dept 05">Dept 05</option>
                        <option value="Dept 06">Dept 06</option>
                        <option value="Dept 07">Dept 07</option>
                        <option value="Dept 08">Dept 08</option>
                        <option value="Dept 09">Dept 09</option>
                        <option value="Dept 10">Dept 10</option>
                        <option value="Dept 11">Dept 11</option>
                    </select></td>
                <td colspan="2" class="samePad2"><input type="number" name="" id="" class="wide-input" placeholder="0001">
                </td>
                <td colspan="2" class="samePad2"><input type="text" class="wide-input" placeholder="StaffAAA"></td>
            </tr>
            <tr>
                <th colspan="6" class="th-change">Employee Check ( Please Check "V" )</th>
            </tr>
            <tr>
                <td colspan="2" class="samePad1">
                    <input type="checkbox" id="unfunded" name="unfunded" value="unfunded">
                    <label for="unfunded"> Unfunded</label>
                </td>
                <td colspan="4" style="padding: 4px 14px 2px 12px;">
                    <input type="checkbox" id="funded" name="funded" value="funded">
                    <label for="funded"> Funded and Adjustment</label>
                    <input type="checkbox" name="5percentage" id="5percentage" value="5%" class="same-border">
                    <label for="5percentage">5%</label>
                    <input type="number" id="type%" style="width: 58px;" class="same-border">
                    <label for="type%">%</label>
                    <input type="checkbox" name="" id="" class="same-border">
                    <input type="number" name="" id="integer" style="    width: 119px;" class="same-border">
                    <label for="integer">( Please fill in an integer in thousands)</label>

                </td>
            </tr>
            <tr>
                <td colspan="2" class="samePad3" style="font-weight: 600;">Request Form No.</td>
                <td colspan="2" class="samePad3"><label for="application_date" style="font-weight: 600;">Application
                        Date</label>
                    <input type="date" name="" id="application_date" class="wide-input2">
                </td>
                <td colspan="2" style="padding: 4px 0px 4px 30px;"><label for="status" style="font-weight: 600;">
                        Status</label>
                    <select name="status" id="status" class="select2-style">
                        <option value="000 New">000 New</option>
                        <option value="001 New">001 New</option>
                        <option value="002 New">002 New</option>
                        <option value="003 New">003 New</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="empty-cell" colspan="2"></td>
                <td class="empty-cell" colspan="2"></td>
                <td class="empty-cell" colspan="2"></td>
            </tr>
            <tr>
                <td colspan="2" style="font-weight: 600; padding:10px; width: 150px;text-align: center; ">Comment</td>
                <td colspan="4" class="same-textarea"><textarea name="" id="" cols="10" rows="3"></textarea></td>
            </tr>
            <tr>
                <td colspan="6" style="border:none">
                    <div class="btn-div">
                        <button type="button" class="btn btn-primary">Cancel</button>
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </td>
            </tr>

        </table>
    </div>`;
    
    require('./EssHrApplicationWebPart.css');
  }

}
