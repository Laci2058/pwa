import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { StoredData } from 'src/app/models/idb';

@Component({
    selector: 'app-saved',
    templateUrl: './saved.component.html',
    styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
    savedItems!: StoredData[]

    constructor(private databaseService: DatabaseService) {
        this.savedItems = this.databaseService.getAllData()
     }

    ngOnInit(): void {
        
    }

    del(id:number) {
        this.databaseService.delete(id)
        console.log(id);
    }

}
