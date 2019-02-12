import { Component, OnInit, ViewChild } from '@angular/core';
import { paitaint } from '../../model/paitaint'
import { condition } from '../../model/condition'
import { ApiService } from '../../services/ApiService'
import { MatSort, MatTableDataSource, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
    selector: 'patient-Info',
    templateUrl: './patientInfo.html',
    styleUrls: ['./patientInfo.scss']
})

export class patientInfo implements OnInit {

    paitaintId: string = '';
    paitaintdetail: paitaint;
    conditions = [];
    con: condition
    displayedColumns: string[] = ['name', 'daterecorded', 'searchtxt']
    constructor(private api: ApiService) { }
    dataSource: any;
    showtable = false;
    @ViewChild(MatSort) sort: MatSort;

    ngOnInit() {
        this.paitaintdetail = new paitaint();
    }


    GetInfo() {
        const searchurl = 'https://www.ncbi.nlm.nih.gov/pubmed/?term='
        this.api.getpatientinfo(this.paitaintId).subscribe(res => {
            if (res) {
                this.paitaintdetail.name = res.name[0].text;
                this.paitaintdetail.gender = res.gender;
                this.paitaintdetail.dateofbirth = res.birthDate;
            }
        })

        this.api.getpatientconditioninfo(this.paitaintId).subscribe(res => {
            if (res) {
                this.showtable = true;
                this.conditions = [];
                res.entry.forEach(r => {
                    this.con = new condition();
                    this.con.name = r.resource.code.text;
                    if (r.resource.dateRecorded)
                        this.con.daterecorded = (r.resource.dateRecorded);
                    else
                        this.con.daterecorded = '';
                    this.con.searchtxt = searchurl + r.resource.code.text;
                    this.conditions.push(this.con);

                });
                this.dataSource = new MatTableDataSource(this.conditions);
                this.dataSource.sort = this.sort;


            }
        })
    }


}