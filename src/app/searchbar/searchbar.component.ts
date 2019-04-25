import { Component, OnInit } from '@angular/core';




import { FilteringEventArgs } from '@syncfusion/ej2-dropdowns';
import { EmitType } from '@syncfusion/ej2-base';
import { Query } from '@syncfusion/ej2-data';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],

})

export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // defined the array of data
  public data: { [key: string]: Object }[] = [
    { Id: 's3', Restaurant: 'Alaska' },
    { Id: 's1', Restaurant: 'California' },
    { Id: 's2', Restaurant: 'Florida' },
    { Id: 's4', Restaurant: 'Georgia' }];
  // maps the appropriate column to fields property
  public fields: Object = { text: 'Restaurant', value: 'Id' };
  // set the placeholder to the DropDownList input
  public text: string = 'Restaurant...';
  // Bind the filter event
  public onFiltering: EmitType<FilteringEventArgs> = (e: FilteringEventArgs) => {
    let query = new Query();
    // frame the query based on search string with filter type.
    // tslint:disable-next-line: triple-equals
    query = (e.text != '') ? query.where('Country', 'startswith', e.text, true) : query;
    // pass the filter data source, filter query to updateData method.
    e.updateData(this.data, query);
  };
  // defined the array of data
  // tslint:disable-next-line: variable-name
  public data1: string[] = ['1', '2', '3', '4', '5', '6', '7+'];
  // set placeholder text to DropDownList input element
  public placeholder: string = 'Number of Persons';


  
}
